import { FirebaseAuth } from "@/firebase/config";
import { Status, login, logout } from "@/store/auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export const useCheckout = () => {
    const { status } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    // revisar los cambios en la sesion
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (!user) {
                return dispatch(logout("No hay usuario activo"));
            }
            const { displayName, email, photoURL, uid } = user;
            dispatch(login({ status: Status.authenticated, displayName, email, photoURL, uid }));
        });
    }, []);

    return { status };
};
