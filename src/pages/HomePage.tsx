import { CardProduct } from "@/components/dashboard/card";
import { Input } from "@/components/ui/input";
import { useData } from "@/hooks/useData";
import { useAppSelector } from "@/store/hooks";
import { ChekingAuth } from "./ChekingAuth";

export const HomePage = () => {
    //* Leer datos del documento

    const { handleSubmit, json } = useData();
    const { photoURL, email, displayName } = useAppSelector((state) => state.auth);

    return (
        <div className="mx-auto flex min-h-screen max-w-[85rem]">
            {photoURL!.length > 0 ? (
                <div className="flex w-full max-w-52 flex-col items-center justify-between border-r p-7 text-center">
                    <div>
                        <img
                            src={photoURL!}
                            alt=""
                            className="mx-auto h-28 w-28 rounded-full object-cover p-3"
                        />
                        <span className="block text-base font-semibold text-gray-700">
                            {displayName}
                        </span>
                        <span className="text-sm font-medium capitalize text-gray-500">
                            {email}
                        </span>
                    </div>
                    <footer>Logout</footer>
                </div>
            ) : (
                <div className="w-full max-w-32">
                    <ChekingAuth className="mt-10 flex items-start text-2xl" />
                </div>
            )}

            <div className="min-h-screen w-full p-20">
                <form action="" className="mb-3 max-w-xs">
                    <Input type="file" accept=".xlsx , .xlsx" onChange={handleSubmit} />
                </form>

                <section className="grid grid-cols-2 grid-rows-3 gap-4 xl:grid-cols-5">
                    {json.length > 1 &&
                        json.map((item, index) => {
                            return (
                                <CardProduct
                                    key={index}
                                    title={item.ELEMENTO}
                                    description={item.TIENDA}
                                    category={item.CATEGORIA}
                                    price={item.PRECIO}
                                />
                            );
                        })}
                </section>
            </div>
        </div>
    );
};
