
class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const Productos = [
    new Producto(1,'Iphone', 100000 ),
    new Producto(2, 'Tablet',80000),
    new Producto(3, 'Tv', 150000),
    new Producto(4, 'Airpods', 20000)
]

const selectNode = document.querySelector('#listaprods')
Productos.forEach((prod) => {
    const optionprod = document.createElement('option')
    optionprod.innerText = ` ${prod.nombre}: $${prod.precio} `
    optionprod.setAttribute('id', ` ${prod.id} `)
    selectNode.append(optionprod)
})

const carrito = []

const anadirBtnNode = document.querySelector ('#anadirprods')
anadirBtnNode.onclick = ()=>{
    const index = selectNode.selectedIndex
    const Prodseleccionado = Productos [index]
    carrito.push(Prodseleccionado)
    console.log(carrito)
}

const finalizarBtnNode = document.querySelector ('#finalizarcompra')
finalizarBtnNode.onclick = ()=>{
    let totalcompra = 0
    carrito.forEach ((Productos) => {
        totalcompra = totalcompra +Productos.precio
    })
    alert(
            `El total de tu compra es ${totalcompra}`
         )
}





// let BancoDeseado = parseInt(
//     prompt('Escoge el numero del Banco que desea cotizar 1.Banco Patagonia - 2.Banco Credicoop - 3.Banco Ciudad - 4.Banco Nacion')
// )

// let Bancoescogido = false
// let banco

// while (Bancoescogido === false) {
//     banco = bancos.find((banco => banco.id === BancoDeseado))
//     if (!banco) {
//         BancoDeseado = parseInt(
//             prompt('Escoge el numero correcto del Banco que desea cotizar 1.Banco Patagonia - 2.Banco Credicoop - 3.Banco Ciudad - 4.Banco Nacion')
//         )
//     } else {
//         Bancoescogido = true
//     }
// }
// console.log(banco);

// const montosolicitado = parseInt(
//    prompt('Ingresa el monto que deseas solicitar')
// )

// const cuota12 = calcularCuota(montosolicitado, banco.tasa12, 12)
// const cuota24 = calcularCuota(montosolicitado, banco.tasa12, 24)
// const cuota36 = calcularCuota(montosolicitado, banco.tasa12, 36)

// function calcularCuota(monto, interes, meses) {
//     const cuota = ((monto + (monto * interes)) / 100) / meses
//     return cuota
// }

// alert(
//     `Las opciones que te ofrece ${banco.nombre} son: 1. ${cuota12} mensuales a 12 meses -2. ${cuota24} mensuales a 24 meses -3. ${cuota36} mensuales a 36 meses`
// )
// }