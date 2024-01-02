export interface InitialStateLogin {
    displayName?: string;
    email?: string;
    password?: string;
}

export interface CardProps {
    title: string;
    description: string;
    category: string;
    price: string;
}

export interface InitialProps {
    ELEMENTO: string;
    TIENDA: string;
    CATEGORIA: string;
    PRECIO: string;
}
