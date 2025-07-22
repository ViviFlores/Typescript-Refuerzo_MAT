import { useState } from "react";

export const useCounter = () => {
    //hook useState para manejar el estado del contador
    const [contador, setContador] = useState<number>(0);

    //función para incrementar el contador
    const gestionContador = (num: number): void => {
        //llamar a la función setContador para actualizar le estado
        setContador(contador + num);
        //1+1=>2
    }

    return {
        contador,
        gestionContador
    }
}