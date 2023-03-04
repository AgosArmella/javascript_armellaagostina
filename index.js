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

const BancoPatagonia = new Banco('Banco Patagonia', 1, 3, 10, 15)
const Credicoop = new Banco('Banco Credicoop', 2, 10, 12, 15)
const Ciudad = new Banco('Banco Ciudad', 3, 5, 9, 11)
const Nacion = new Banco('Banco Nacion', 4, 5, 10, 20)

console.log(BancoPatagonia, Credicoop, Ciudad, Nacion)

let BancoDeseado = parseInt(
    prompt('Escoge el numero del Banco que desea cotizar 1.Banco Patagonia - 2.Banco Credicoop - 3.Banco Ciudad - 4.Banco Nacion')
)

let Bancoescogido = false
let InfoBanco

while (Bancoescogido === false) {
    if (BancoDeseado === 1) {
        Bancoescogido = true
        InfoBanco = BancoPatagonia
    } else if (BancoDeseado === 2) {
        Bancoescogido = true
        InfoBanco = Credicoop
    } else if (BancoDeseado === 3) {
        Bancoescogido = true
        InfoBanco = Ciudad
    } else if (BancoDeseado === 4) {
        Bancoescogido = true
        InfoBanco = Nacion
    } else {
        BancoDeseado = parseInt(
            prompt('Escoge el numero correcto del Banco que desea cotizar 1.Banco Patagonia - 2.Banco Credicoop - 3.Banco Ciudad - 4.Banco Nacion')
        )
    }
}

const montosolicitado = parseInt(
    prompt('Ingresa el monto que deseas solicitar')
)
const cuota12 = calcularCuota(montosolicitado,InfoBanco.tasa12,12)
const cuota24 = calcularCuota(montosolicitado,InfoBanco.tasa12,24)
const cuota36 = calcularCuota(montosolicitado,InfoBanco.tasa12,36)
console.log(cuota12,cuota24,cuota36)

function calcularCuota (monto, interes, meses){
const cuota = ((monto + (monto*interes))/100)/meses
return cuota
}
alert(
    'Las opciones que te ofrece  '
)
console.log('InfoBanco', InfoBanco, montosolicitado)

