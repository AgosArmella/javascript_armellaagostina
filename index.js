// un usuario elija un banco y acceda a las distintas cuotas segun los meses y el monto

class Banco {
    constructor(nombre, id, tasa12, tasa24, tasa36) {
        this.nombre = nombre
        this.id = id
        this.tasa12 = tasa12
        this.tasa24 = tasa24
        this.tasa36 = tasa36
    }
}

const bancos = [
    new Banco('Banco Patagonia', 1, 3, 10, 15),
    new Banco('Banco Credicoop', 2, 10, 12, 15),
    new Banco('Banco Ciudad', 3, 5, 9, 11),
    new Banco('Banco Nacion', 4, 5, 10, 20)
]

let BancoDeseado = parseInt(
    prompt('Escoge el numero del Banco que desea cotizar 1.Banco Patagonia - 2.Banco Credicoop - 3.Banco Ciudad - 4.Banco Nacion')
)

let Bancoescogido = false
let banco

while (Bancoescogido === false) {
    banco = bancos.find((banco => banco.id === BancoDeseado))
    if (!banco) {
        BancoDeseado = parseInt(
            prompt('Escoge el numero correcto del Banco que desea cotizar 1.Banco Patagonia - 2.Banco Credicoop - 3.Banco Ciudad - 4.Banco Nacion')
        )
    } else {
        Bancoescogido = true
    }
}
console.log(banco);

const montosolicitado = parseInt(
   prompt('Ingresa el monto que deseas solicitar')
)

const cuota12 = calcularCuota(montosolicitado, banco.tasa12, 12)
const cuota24 = calcularCuota(montosolicitado, banco.tasa12, 24)
const cuota36 = calcularCuota(montosolicitado, banco.tasa12, 36)

function calcularCuota(monto, interes, meses) {
    const cuota = ((monto + (monto * interes)) / 100) / meses
    return cuota
}

alert(
    `Las opciones que te ofrece ${banco.nombre} son: 1. ${cuota12} mensuales a 12 meses -2. ${cuota24} mensuales a 24 meses -3. ${cuota36} mensuales a 36 meses`
)


