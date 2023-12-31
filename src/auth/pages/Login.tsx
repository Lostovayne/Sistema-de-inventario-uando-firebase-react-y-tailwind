import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Login = () => {
    return (
        <div className="flex min-h-svh w-screen items-center justify-center">
            <div className="flex w-[90%] flex-col gap-6 rounded-lg border px-10 pb-8 pt-10 shadow-xl lg:max-w-96">
                <h2 className="text-center text-lg font-medium">Iniciar Sesión</h2>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" className="" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="******" />
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Iniciar Sesión</Button>
                </div>
            </div>
        </div>
    );
};
