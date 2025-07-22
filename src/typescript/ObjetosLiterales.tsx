//rafc + tab

interface Persona {
    nombre: string;
    edad: number;
    telefono: string;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    ciudad: string;
    casaNumero: number;
}

export const ObjetosLiterales = () => {
    // lógica de programación
    // CREAR UN OBJETO
    const persona: Persona = {
        nombre: "Viviana",
        edad: 33,
        telefono: "0945654566",
        direccion: {
            pais: "Ecuador",
            ciudad: "Quito",
            casaNumero: 365
        }
    }

    //modificar valor de la propiedad en el objeto
    //persona.telefono = "0963554266";
    //no se puede instanciar interfaces
    //const objPersona = new Persona();

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
