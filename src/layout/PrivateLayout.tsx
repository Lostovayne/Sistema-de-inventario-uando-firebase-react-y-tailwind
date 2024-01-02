/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateLayout = () => {
    const [status, setStatus] = useState("authorized"); /* no-authorized*/

    if (status === "authorized") {
        return <Outlet />;
    }

    return <Navigate to="/auth/login" />;
};
