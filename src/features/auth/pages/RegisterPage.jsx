import React from "react";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../contexts/AuthContext";

/**
 * RegisterPage component renders the registration page for the application.
 * It includes a form for users to register by providing their user details.
 * The page is styled to match the theme of a movie streaming website.
 */
const RegisterPage = () => {
    const { register, error, isLoading } = useAuth();

    /**
     * Handles the registration process by calling the register function
     * from the AuthContext with the provided user details.
     * 
     * @param {Object} values - The user details from the registration form.
     * @param {string} values.userName - The username of the user.
     * @param {string} values.password - The password of the user.
     * @param {string} values.confirmPassword - The confirmation of the password.
     * @param {string} values.email - The email of the user.
     * @param {string} values.fullName - The full name of the user.
     */
    const handleRegister = async (values) => {
        try {
            await register(
                values.userName,
                values.password,
                values.confirmPassword,
                values.email,
                values.fullName
            );
            alert("Đăng ký thành công, vui lòng đăng nhập");
        } catch (error) {
            // Lỗi đã được set trong AuthContext
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center bg-black bg-opacity-70 relative">
            {/* Overlay background image */}
            <div className="absolute inset-0 bg-[url('/bg-movie.jpg')] bg-cover bg-center opacity-30 z-0" />

            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-md bg-black bg-opacity-80 text-white p-8 rounded-2xl shadow-2xl backdrop-blur">
                    <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
                        Đăng ký tài khoản
                    </h2>

                    <AuthForm isLogin={false} onSubmit={handleRegister} error={error} />

                    {isLoading && (
                        <p className="text-center mt-4 text-sm text-gray-300">
                            Đang xử lý đăng ký...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
