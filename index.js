const formulario = document.getElementById('formulario')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const titulo = document.getElementById('titulo')

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

async function getProductos() {
    const response = await fetch('./productos.json');
    const resultado = await response.json();
    console.log(resultado.productos); 
    return resultado.productos;
}

async function mostrarProductos() {
    const productos = await getProductos();
    productos.forEach(prod => {
        console.log(prod);
        const optionprod = document.createElement('option')
        optionprod.innerText = ` ${prod.nombre}: $${prod.precio} `
        optionprod.setAttribute('id', ` ${prod.id} `)
        selectNode.append(optionprod)
    });
}

const carrito = []
mostrarProductos()
const selectNode = document.querySelector('#listaprods')

const anadirBtnNode = document.querySelector('#anadirprods')
anadirBtnNode.onclick = () => {
    const index = selectNode.selectedIndex
    const Prodseleccionado = Producto[index]
    carrito.push(Prodseleccionado)
    toastr.success(`${producto.nombre} agregado al carrito`,'Mensaje');
    console.log(carrito)
}

const finalizarBtnNode = document.querySelector('#finalizarcompra')
finalizarBtnNode.onclick = () => {
    let totalcompra = 0
    carrito.forEach((Producto) => {
        totalcompra = totalcompra + Productos.precio
    })
    alert(
        `El total de tu compra es ${totalcompra}`
    )
}


