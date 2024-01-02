import { CardProps } from "@/interfaces";

export const CardProduct = ({ title, description, category, price }: CardProps) => {
    return (
        <div className="rounded-lg border p-5 shadow shadow-blue-200">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
        </div>
    );
};
