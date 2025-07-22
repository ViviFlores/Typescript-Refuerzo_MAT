//rafc + tab o enter
export const Funciones = () => {

    const sumar = (): number => {
        return 6 + 1;
    }

    const restar = (num1: number, num2: number): number => {
        mensaje(); //llamar método void
        return num1 - num2;
    }

    const mensaje = (): void => {
        console.log("Hola segundo sistemas");
    }

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado de la suma es: {sumar()}</span>
            <br />
            <span>El resultado de la resta es: {restar(7, 4)}</span>
        </div>
    )
}
