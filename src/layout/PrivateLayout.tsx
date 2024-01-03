/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCheckout } from "@/hooks/useCheckout";
import { ChekingAuth } from "@/pages/ChekingAuth";
import { Status } from "@/store/auth/AuthSlice";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateLayout = () => {
    const { status } = useCheckout();
    // const [isLoading, setIsLoading] = useState(true);

    if (status === Status.checking) {
        return <ChekingAuth className="grid min-h-screen place-content-center text-4xl" />;
    }

    if (status === Status.authenticated) {
        return <Outlet />;
    }

    return <Navigate to="/auth/login" replace />;
};
