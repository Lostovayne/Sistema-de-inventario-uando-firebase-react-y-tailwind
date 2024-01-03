import { RiLoaderLine } from "react-icons/ri";

export const ChekingAuth = ({ className = "" }) => {
    // tardar 2 segundos

    return (
        <div className={className}>
            <RiLoaderLine className="animate-spin" />
        </div>
    );
};
