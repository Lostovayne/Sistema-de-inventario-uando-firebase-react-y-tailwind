import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@/hooks/useForm";
import { RiLoader4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Register = () => {
    const { loading, handleRegister } = useForm({});

    return (
        <form onSubmit={handleRegister}>
            <h2 className="mb-6 text-left font-semibold text-gray-700 md:text-lg">
                Crear tu cuenta
            </h2>

            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="Name">Name</Label>
                <Input type="text" id="Name" placeholder="Name" className="" />
            </div>

            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" className="" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="******" />
            </div>
            <div className="flex flex-col items-end gap-3">
                <Button variant={"link"} className="border-none">
                    <Link to="/auth/login">Ya tienes una cuenta?</Link>
                </Button>
                <Button variant={"default"} className="w-full" type="submit" disabled={loading}>
                    <RiLoader4Fill hidden={!loading} className="mr-2 h-4 w-4 animate-spin" />
                    {loading ? "Cargando..." : "Registrarme"}
                </Button>
            </div>
        </form>
    );
};
