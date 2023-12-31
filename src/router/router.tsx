import { AuthRoutes } from "@/auth/router/routes";
import { PrivateLayout } from "@/layout/PrivateLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <HomePage />,
            },

            {
                path: "",
                element: <Navigate to="/dashboard" />,
            },
        ],
    },

    {
        path: "/auth/*",
        element: <AuthRoutes />,
        errorElement: <ErrorPage />,
    },
]);
