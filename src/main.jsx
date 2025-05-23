﻿import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./features/auth/contexts/AuthContext"; // Import AuthProvider

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider> {/* Bọc App trong AuthProvider */}
                <App />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);