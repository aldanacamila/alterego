const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.getElementById("carrito-contenido");

function renderizarCarrito() {
  carritoContainer.innerHTML = "";

  carrito.forEach((producto, index) => {
    const item = document.createElement("div");
    item.className = "producto-carrito";

    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="descripcion">${producto.nombre}</div>
      <div class="contador">
        <button onclick="cambiarCantidad(${index}, -1)">−</button>
        <span>${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${index}, 1)">+</button>
      </div>
      <div class="precio-total">$${(producto.precio * producto.cantidad).toLocaleString()}</div>
    `;

    carritoContainer.appendChild(item);
  });
}

function cambiarCantidad(index, cambio) {
  carrito[index].cantidad += cambio;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
}

renderizarCarrito();
