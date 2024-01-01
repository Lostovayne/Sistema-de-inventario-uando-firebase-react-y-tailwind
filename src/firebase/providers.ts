import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        //tomar datos del usuario
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // user info
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                ok: false,
                errorMessage: error.message,
            };
        }
    }
};
