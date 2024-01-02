import { CardProduct } from "@/components/dashboard/card";
import { Input } from "@/components/ui/input";
import { useData } from "@/hooks/useData";

export const HomePage = () => {
    //* Leer datos del documento

    const { handleSubmit, json } = useData();

    return (
        <div className="grid min-h-screen place-content-center">
            <form action="" className="mb-3 max-w-xs">
                <Input type="file" accept=".xlsx , .xlsx" onChange={handleSubmit} />
            </form>
            {/* <div className="w-80 text-sm">{json && <pre>{JSON.stringify(json, null, 2)}</pre>}</div> */}
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
    );
};
