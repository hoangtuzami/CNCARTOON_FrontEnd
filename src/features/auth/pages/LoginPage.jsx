import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async ({ userName, password, rememberMe }) => {
        try {
            setIsLoading(true);
            setError('');
            await login(userName, password, rememberMe);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Đăng nhập thất bại');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <motion.h2
                                className="text-3xl font-bold text-white mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Chào mừng trở lại
                            </motion.h2>
                            <p className="text-white/80">Đăng nhập để tiếp tục trải nghiệm</p>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 p-3 bg-red-500/20 text-red-100 rounded-lg text-sm"
                            >
                                {error}
                            </motion.div>
                        )}

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                handleLogin({
                                    userName: formData.get('userName'),
                                    password: formData.get('password'),
                                    rememberMe: formData.get('rememberMe') === 'on',
                                });
                            }}
                        >
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="userName" className="block text-sm font-medium text-white/80 mb-1">
                                        Tên đăng nhập
                                    </label>
                                    <input
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                                        placeholder="Nhập tên đăng nhập"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                                        Mật khẩu
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
                                        placeholder="Nhập mật khẩu"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="rememberMe"
                                            name="rememberMe"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-white/80">
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </div>

                                    <Link to="/forgot-password" className="text-sm text-indigo-200 hover:text-indigo-100 transition">
                                        Quên mật khẩu?
                                    </Link>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-indigo-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Đang xử lý...
                                        </span>
                                    ) : (
                                        'Đăng nhập'
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </div>

                    <div className="px-8 py-4 bg-white/5 text-center border-t border-white/10">
                        <p className="text-white/80 text-sm">
                            Chưa có tài khoản?{' '}
                            <Link to="/register" className="text-indigo-200 hover:text-white font-medium transition">
                                Đăng ký ngay
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;