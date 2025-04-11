import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    // Danh sách phim đề xuất
    const featuredMovies = [
        {
            id: 1,
            title: "Spider-Man: Across the Spider-Verse",
            image: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            year: 2023
        },
        {
            id: 2,
            title: "Oppenheimer",
            image: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyNGE5NTNhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            year: 2023
        },
        {
            id: 3,
            title: "The Batman",
            image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
            year: 2022
        },
        {
            id: 4,
            title: "Dune",
            image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
            year: 2021
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white px-4 py-8 md:px-8 lg:px-12">
            {/* Header */}
            <header className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                        CINEMAX
                    </h1>
                    <nav className="hidden md:flex space-x-6 ml-12">
                        <a href="#" className="hover:text-indigo-400 transition">Trang chủ</a>
                        <a href="#" className="hover:text-indigo-400 transition">Phim lẻ</a>
                        <a href="#" className="hover:text-indigo-400 transition">Phim bộ</a>
                        <a href="#" className="hover:text-indigo-400 transition">Thể loại</a>
                    </nav>
                </div>

                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate("/login")}
                        className="relative px-5 py-2 rounded-lg font-medium overflow-hidden group bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        <span className="relative z-10">Đăng nhập</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </button>
                    <button
                        onClick={() => navigate("/register")}
                        className="relative px-5 py-2 rounded-lg font-medium overflow-hidden group bg-white text-gray-900 hover:text-gray-800 transition"
                    >
                        <span className="relative z-10">Đăng ký</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Khám phá thế giới điện ảnh
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Hàng ngàn bộ phim chất lượng cao, xem mọi lúc mọi nơi. Trải nghiệm điện ảnh không giới hạn.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium flex items-center transition transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Xem ngay
                        </button>
                        <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium flex items-center transition transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            Tìm hiểu thêm
                        </button>
                    </div>
                </div>

                {/* Banner */}
                <div className="relative rounded-2xl overflow-hidden mb-16 h-64 md:h-96">
                    <img
                        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                        alt="Movie banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">Phim đề cử tháng</h3>
                        <p className="text-gray-300 mb-4">Khám phá những bộ phim mới nhất và hot nhất</p>
                        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium flex items-center transition">
                            Xem chi tiết
                        </button>
                    </div>
                </div>

                {/* Featured Movies */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="w-2 h-6 bg-indigo-500 mr-3"></span>
                        Phim đề xuất
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {featuredMovies.map(movie => (
                            <div key={movie.id} className="group relative rounded-lg overflow-hidden transition transform hover:-translate-y-2">
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h4 className="font-bold text-white">{movie.title}</h4>
                                    <p className="text-gray-300 text-sm">{movie.year}</p>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto pt-8 mt-12 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            CINEMAX
                        </h2>
                        <p className="text-gray-400 mt-2">© 2023 Cinemax. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition">Điều khoản</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Bảo mật</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Liên hệ</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">FAQ</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;