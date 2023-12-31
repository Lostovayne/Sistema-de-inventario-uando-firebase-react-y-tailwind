import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@/hooks/useForm";
import { RiLoader4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Login = () => {
    const { email, password, onInputChange, loading, handleLogin } = useForm({
        email: "Epsaind@gmail.com",
        password: "123456",
    });

    return (
        <form onSubmit={handleLogin}>
            <h2 className="mb-6 text-left font-semibold md:text-lg">Bienvenido de nuevo</h2>
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
                <Button variant={"link"} className="border-none">
                    <Link to="/auth/register"> No tienes una cuenta ? </Link>
                </Button>
                <Button variant={"default"} className="w-full" type="submit" disabled={loading}>
                    <RiLoader4Fill hidden={!loading} className="mr-2 h-4 w-4 animate-spin" />
                    {loading ? "Cargando..." : "Iniciar Sesión"}
                </Button>
            </div>
        </form>
    );
};
