import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AuthLayout } from "../layout/AuthLayout";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Route>
            <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
