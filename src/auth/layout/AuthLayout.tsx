import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <div className="fondo flex min-h-svh w-screen items-center justify-center">
            <div className="flex w-[80%] flex-col rounded-lg border bg-white px-16 py-14 shadow-xl sm:max-w-[28rem]">
                <Outlet />
                <Toaster />
            </div>
        </div>
    );
};
