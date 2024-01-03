import { AppDispatch } from "@/store/store";
import { checkingCredentials, login, logout } from "../AuthSlice";
import { signInWithGoogle } from "@/firebase/providers";
import { toast } from "@/components/ui/use-toast";

export const startGoogleSignIn = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (!result?.ok) {
            toast({
                title: "Error al autenticar",
                description: result?.errorMessage,
                variant: "destructive",
            });

            return dispatch(logout(result?.errorMessage));
        }

        const data = {
            status: "authenticated",
            displayName: result?.displayName,
            email: result?.email,
            photoURL: result?.photoURL,
            uid: result!.uid,
        };
        dispatch(login(data));

        toast({
            title: "Autenticado con Google",
            description: "Se ha autenticado correctamente",
            variant: "default",
        });
    };
};
