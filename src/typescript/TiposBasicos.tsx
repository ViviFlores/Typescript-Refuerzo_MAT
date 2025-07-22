//rafc+tab
export const TiposBasicos = () => {
    //lógica de programación
    //VARIABLES
    //let nombre: string | number = "Viviana"; //dos tipos de datos
    //let nombre: string = "Viviana";
    //CONSTANTES
    const nombre: string = "Viviana";
    const edad: number = 33;
    const donanteOrganos: boolean = true;
    //ARREGLOS
    const poderes: string[] = ["velocidad", "volar", "invisibilidad"];
    //añadir datos en el arreglo
    poderes.push("fuerza");

    return (
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos ? "Donante" : "No donante"}
            <br/>
            {poderes.join(", ")}
        </div>
    )
}

