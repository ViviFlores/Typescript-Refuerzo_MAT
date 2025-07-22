import { useCounter } from "../hooks/useCounter";

export const ContadorCustomHook = () => {

    //hook customizado para manejar el contador
    const { contador, gestionContador } = useCounter();

    return (
        <div>
            <h3>Contador Custom Hook: <small>{contador}</small></h3>
            <button className="btn btn-primary"
                onClick={() => gestionContador(1)}>+1</button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => gestionContador(-1)}>-1</button>
        </div>
    )
}
