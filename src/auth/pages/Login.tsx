import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@/hooks/useForm";
import { RiLoader4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import GoogleIcon from "@/assets/google-icon.svg";
import { startGoogleSignIn } from "@/store/auth/thunks/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export const Login = () => {
    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state) => state.auth);
    const { email, password, onInputChange, loading, handleLogin } = useForm({
        email: "Epsaind@gmail.com",
        password: "123456",
    });

    const handleGoogleLogin = () => {
        dispatch(startGoogleSignIn());
    };

    // Envío de datos al store de autenticación
    return (
        <form onSubmit={handleLogin}>
            <h2 className="mb-6 text-left text-xl font-bold text-gray-800/80 md:text-2xl">
                Bienvenido
            </h2>
            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    placeholder="******"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <div className="flex flex-col items-end gap-3">
                <Link className="py-2 text-sm font-medium text-blue-700/70" to="/auth/register">
                    Olvidaste tu contraseña ?
                </Link>

                <Button
                    variant={"default"}
                    className="w-full"
                    type="submit"
                    disabled={loading || status === "checking"}
                >
                    <RiLoader4Fill hidden={!loading} className="mr-2 h-4 w-4 animate-spin" />
                    {loading ? "Cargando..." : "Iniciar Sesión"}
                </Button>

                <Button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full"
                    variant={"outline"}
                    disabled={status === "checking"}
                >
                    <img
                        src={GoogleIcon}
                        className="h-10 w-10 object-contain p-2.5"
                        alt="icon google"
                    />
                    Iniciar con Google
                </Button>
                <div className="flex items-center gap-2">
                    <span className="block py-2">No tienes una cuenta?</span>
                    <Link
                        className="py-2 text-sm font-semibold text-blue-700/70"
                        to="/auth/register"
                    >
                        Crear cuenta
                    </Link>
                </div>
            </div>
        </form>
    );
};
