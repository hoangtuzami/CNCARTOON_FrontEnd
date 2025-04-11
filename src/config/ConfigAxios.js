import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://localhost:7112/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("Phiên đăng nhập hết hạn");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            // Điều hướng về trang đăng nhập
            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }
        // Ném lỗi với thông tin chi tiết từ API
        const errorMessage = error.response?.data?.message || "Lỗi khi gọi API";
        console.error("API error:", errorMessage, error);
        return Promise.reject(new Error(errorMessage));
    }
);

export default axiosInstance;