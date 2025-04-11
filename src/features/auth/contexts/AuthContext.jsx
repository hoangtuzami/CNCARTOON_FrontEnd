import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                if (token) {
                    const userData = await authApi.getMe();
                    setUser(userData);
                }
            } catch (err) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
                console.error("Auth init error:", err);
            } finally {
                setIsLoading(false);
            }
        };
        initializeAuth();
    }, []);

    const login = async (userName, password, rememberMe) => {
        setIsLoading(true);
        setError(null);
        try {
            const { token, user } = await authApi.login({ userName, password });
            localStorage.setItem("accessToken", token);
            localStorage.setItem("user", JSON.stringify(user));
            if (rememberMe) {
                localStorage.setItem("rememberMe", "true");
            } else {
                localStorage.removeItem("rememberMe");
            }
            setUser(user);
            navigate("/");
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        setError(null);
        try {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            localStorage.removeItem("rememberMe");
            setUser(null);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (userName, password, confirmPassword, email, fullName) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await authApi.register({ userName, password, confirmPassword, email, fullName });
            navigate("/login");
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const checkIsExistEmail = async (email) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await authApi.checkIsExistEmail(email);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const value = {
        user,
        isLoading,
        error,
        login,
        logout,
        register,
        checkIsExistEmail,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};