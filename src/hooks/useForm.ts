import { toast } from "@/components/ui/use-toast";
import { InitialStateLogin } from "@/interfaces";
import React, { useState } from "react";

export const useForm = (initialForm: InitialStateLogin = { email: "", password: "" }) => {
    const [formState, setFormState] = React.useState(initialForm);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const [loading, setLoading] = useState<boolean>(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);

        const dataLogin = JSON.stringify({
            email: formState.email,
            password: formState.password,
        });

        toast({
            title: "Credenciales correctas",
            description: dataLogin,
        });

        onResetForm();
    };

    return {
        ...formState,
        formState,
        handleRegister,
        handleLogin,
        loading,
        onInputChange,
        onResetForm,
    };
};
