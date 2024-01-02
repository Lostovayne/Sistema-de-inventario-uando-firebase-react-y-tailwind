import { InitialProps } from "@/interfaces";
import { useState } from "react";
import * as XLSX from "xlsx";

export const useData = () => {
    const [json, setJson] = useState<InitialProps[]>([]);
    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!event.target.files) {
            return;
        }
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            if (event.target?.result !== null) {
                const data = new Uint8Array(event.target?.result);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                // Obtener los nombres de las claves desde la primera fila
                const keys = jsonData[0];

                // Crear un nuevo objeto JSON con las claves correspondientes a los nombres
                const formattedJson = jsonData.slice(1).map((row) => {
                    const newObj = {};
                    for (let i = 0; i < row.length; i++) {
                        newObj[keys[i]] = row[i];
                    }
                    return newObj;
                });

                setJson(formattedJson);
            }
        };

        reader.readAsArrayBuffer(file);
    };

    return {
        json,
        setJson,
        handleSubmit,
    };
};
