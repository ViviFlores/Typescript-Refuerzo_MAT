import { useState } from "react";

export const Contador = () => {
    //hook useState para manejar el estado del contador
    const [contador, setContador] = useState<number>(0);

    //función para incrementar el contador
    const gestionContador = (num: number): void => {
        //llamar a la función setContador para actualizar le estado
        setContador(contador + num);
        //1+1=>2
    }

    return (
        <div>
            <h3>Contador: <small>{contador}</small></h3>
            <button className="btn btn-primary"
                onClick={() => gestionContador(1)}>+1</button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => gestionContador(-1)}>-1</button>
        </div>
    )
}
