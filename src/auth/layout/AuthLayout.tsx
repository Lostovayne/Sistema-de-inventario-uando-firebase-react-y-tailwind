import { Toaster } from "@/components/ui/toaster";
import { useCheckout } from "@/hooks/useCheckout";
import { ChekingAuth } from "@/pages/ChekingAuth";
import { Status } from "@/store/auth/AuthSlice";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
    const { status } = useCheckout();

    if (status === Status.authenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    if (status === Status.checking) {
        return <ChekingAuth className="grid min-h-screen place-content-center text-4xl" />;
    }

    return (
        <div className="fondo flex min-h-svh w-screen items-center justify-center">
            <div className="flex w-[80%] flex-col rounded-2xl border border-gray-300 bg-white px-16 py-14 shadow-2xl sm:max-w-[27rem]">
                <Outlet />
                <Toaster />
            </div>
        </div>
    );
};
