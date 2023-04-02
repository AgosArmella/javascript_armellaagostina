const formulario = document.getElementById('formulario')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const titulo = document.getElementById ('titulo')

formulario.onsubmit = (e) => {
    e.preventDefault()
    const infoUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value
    }
    localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario))
    formulario.remove()
    titulo.innerText = `Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}`
}

const infoUsuario = localStorage.getItem('infoUsuario')
const infoUsuarioJS = JSON.parse(infoUsuario)
if (infoUsuario) {
    formulario.remove()
    titulo.innerText = `Bienvenido ${infoUsuarioJS.nombre} ${infoUsuarioJS.apellido}`
}

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const Productos = [
    new Producto(1, 'Iphone', 100000),
    new Producto(2, 'Tablet', 80000),
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

const anadirBtnNode = document.querySelector('#anadirprods')
anadirBtnNode.onclick = () => {
    const index = selectNode.selectedIndex
    const Prodseleccionado = Productos[index]
    carrito.push(Prodseleccionado)
    console.log(carrito)
}

const finalizarBtnNode = document.querySelector('#finalizarcompra')
finalizarBtnNode.onclick = () => {
    let totalcompra = 0
    carrito.forEach((Productos) => {
        totalcompra = totalcompra + Productos.precio
    })
    alert(
        `El total de tu compra es ${totalcompra}`
    )
}


