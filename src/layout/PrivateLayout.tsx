import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateLayout = () => {
    const [status, setStatus] = useState("no-authorized");

    if (status === "authorized") {
        return <Outlet />;
    }

    return <Navigate to="/auth/login" />;
};
