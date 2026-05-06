const contadorElemento = document.querySelector('.cart-count');
const botonesAgregar = document.querySelectorAll('button'); // Asegúrate que el nombre coincida abajo
const mensajeToast = document.getElementById('toast');

let cantidadProductos = 0;

function mostrarNotificacion() {
    mensajeToast.classList.add('show');
    setTimeout(() => {
        mensajeToast.classList.remove('show');
    }, 3000);
}

botonesAgregar.forEach(boton => {
    if (boton.innerText.includes("Agregar al carrito")) {
        boton.addEventListener('click', () => {
            cantidadProductos++;
            contadorElemento.innerText = cantidadProductos;
            mostrarNotificacion(); 
            
            console.log("Productos en carrito: " + cantidadProductos);
        });
    }
});