import axiosInstance from "../../../config/ConfigAxios";
import { jwtDecode } from "jwt-decode";

export const login = async ({ userName, password }) => {
    try {
        const response = await axiosInstance.post("/api/Auth/sign-in", {
            userName,
            password,
        });

        if (response.data.isSuccess) {
            const accessToken = response.data.result.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return { token: accessToken, user: decodedToken };
        } else {
            throw new Error(response.data.message || "Login failed");
        }
    } catch (error) {
        console.error("Login error:", error);
        throw error; // Ném lỗi từ interceptor
    }
};

export const register = async ({ userName, password, confirmPassword, email, fullName }) => {
    try {
        console.log("Register payload:", { userName, password, confirmPassword, email, fullName });
        const response = await axiosInstance.post("/api/Auth/sign-up", {
            userName,
            password,
            confirmPassword,
            email,
            fullName,
        });

        if (response.data.isSuccess) {
            return response.data;
        } else {
            throw new Error(response.data.message || "Registration failed");
        }
    } catch (error) {
        console.error("Registration error:", error);
        throw error; // Ném lỗi từ interceptor
    }
};

export const checkIsExistEmail = async (email) => {
    try {
        const response = await axiosInstance.get("/api/Auth/check-email-exist", {
            params: { email },
        });
        if (response.data.isSuccess) {
            return response.data;
        } else {
            throw new Error(response.data.message || "Email check failed");
        }
    } catch (error) {
        console.error("Email check error:", error);
        throw error;
    }
};

export const getMe = async () => {
    try {
        const response = await axiosInstance.get("/api/Auth/me");
        if (response.data.isSuccess) {
            return response.data.result;
        } else {
            throw new Error(response.data.message || "Get user failed");
        }
    } catch (error) {
        console.error("Get user error:", error);
        throw error;
    }
};

export const authApi = {
    login,
    register,
    checkIsExistEmail,
    getMe,
};