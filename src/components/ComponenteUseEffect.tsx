import { useEffect, useState } from "react";

//rafc + tab o enter
export const ComponenteUseEffect = () => {

    //hook useState para manejar el estado del valor booleano
    const [valor, setValor] = useState<boolean>(false);

    //función para cambiar el valor booleano
    const cambiarValor = (): void => {
        setValor(!valor);
    }

    //hook useEffect para manejar efectos secundarios
    useEffect(() => {
        // Este código se ejecuta una vez cuando la página se monta
        console.log("Desde el hook useEffect");
    }, [valor]); //lista de dependencias


    return (
        <div>
            <h3>Hook - UseEffectt</h3>
            <button onClick={cambiarValor}>Cambiar</button>
        </div>
    )
}
