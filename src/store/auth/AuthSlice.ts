import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

export interface AuthProps {
    status: "checking" | "no-authenticated" | " authenticated";
    user: string;
    password?: string;
    displayName?: string;
    photoURL?: string;
    uid?: string;
    errorMessage?: string;
}

// Define the initial state using that type
const initialState: AuthProps = {
    status: "no-authenticated",
    user: "",
    password: "",
    displayName: "",
    photoURL: "",
    uid: "",
    errorMessage: "",
};

export const AuthSlice = createSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthProps>) => {
            state.user = action.payload.user;
            state.password = action.payload.password;
        },

        logout: (state) => {
            state.user = "";
            state.password = "";
        },

        checkingCredentials: (state) => {
            state.status = "checking";
        },
    },
});

export const { login, logout } = AuthSlice.actions;
