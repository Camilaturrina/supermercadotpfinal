const productosContainer = document.querySelector('.productos-container');
const productos = [
  {
    id: 'dulce',
    nombre: 'Dulce de leche',
    precio: 980,
    imagen: 'Img/Dulce de leche.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'cerveza',
    nombre: 'Cerveza Corona Rubia 330cc',
    precio: 1300,
    imagen: 'Img/Cerveza.jpeg',
    cantidadDisponible: 20,
    cantidadSeleccionada: 0
  },
  {
    id: 'vino',
    nombre: 'Vino blanco Viñas de Alvear',
    precio: 2499,
    imagen: 'Img/Vino.jpeg',
    cantidadDisponible: 20,
    cantidadSeleccionada: 0
  },
  {
    id: 'jugo',
    nombre: 'Jugo en sobre cligth',
    precio: 199,
    imagen: 'Img/Jugo.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'oreos',
    nombre: 'Galletitas oreos 350g',
    precio: 3299,
    imagen: 'Img/Galletitas.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'azucar',
    nombre: 'Azucar comun La Perla 1kg',
    precio: 860,
    imagen: 'Img/Azucar.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'yerba',
    nombre: 'Yerba mate Playadito suave con palo 1 kg',
    precio: 3840,
    imagen: 'Img/yerba.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'pure',
    nombre: 'Puré de tomate Carrefour classic 520 g',
    precio: 699,
    imagen: 'Img/Tomate.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'sal',
    nombre: 'Sal fina Celusal paquete 500 g.',
    precio: 1089,
    imagen: 'Img/sal.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  },
  {
    id: 'fideos',
    nombre: 'Fideos mostacholes N51 Lucchetti rayado 500 g.',
    precio: 1020,
    imagen: 'Img/Fideos.jpeg',
    cantidadDisponible: 10,
    cantidadSeleccionada: 0
  }
];

function crearProducto(producto) {
  const productoDiv = document.createElement('div');
  productoDiv.classList.add('producto');
  productoDiv.id = producto.id;
 
 
  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  productoDiv.appendChild(imagen);
 
 
  const nombrePrecio = document.createElement('p');
  nombrePrecio.textContent = `${producto.nombre} $${producto.precio}`;
  productoDiv.appendChild(nombrePrecio);
 
 
  const stockDiv = document.createElement('div');
  stockDiv.textContent = `Stock disponible: ${producto.cantidadDisponible}`;
  stockDiv.classList.add('stock');
  productoDiv.appendChild(stockDiv);
 
 
  const inputCantidad = document.createElement('input');
  inputCantidad.type = 'number';
  inputCantidad.min = 1;
  inputCantidad.max = producto.cantidadDisponible;
  inputCantidad.value = producto.cantidadSeleccionada;
  inputCantidad.addEventListener('change', () => {
 
 
    producto.cantidadSeleccionada = parseInt(inputCantidad.value);
    if (producto.cantidadSeleccionada < 0) {
      producto.cantidadSeleccionada = 0;
      inputCantidad.value = 0;
    }
  });
  productoDiv.appendChild(inputCantidad);
  const botonComprar = document.createElement('button');
  botonComprar.textContent = 'Comprar';
  botonComprar.onclick = () => {
    comprarProducto(producto.id);
  };
  productoDiv.appendChild(botonComprar);
  return productoDiv;
}

function actualizarProducto(producto) {
  const productoDiv = document.getElementById(producto.id);
  productoDiv.querySelector('p').textContent = `${producto.nombre} $${producto.precio}`;
  productoDiv.querySelector('input').value = producto.cantidadSeleccionada;
  productoDiv.querySelector('.stock').textContent = `Stock disponible: ${producto.cantidadDisponible}`;
}

function comprarProducto(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    const cantidadSeleccionada = parseInt(document.getElementById(idProducto).querySelector('input').value);
    if (cantidadSeleccionada <= 0) {
      alert('La cantidad seleccionada debe ser mayor que 0.');
      return;
    }
    if (cantidadSeleccionada > producto.cantidadDisponible) {
      alert(`Lo siento, solo quedan ${producto.cantidadDisponible} ${producto.nombre} disponibles.`);
      return;
    }
    producto.cantidadDisponible -= cantidadSeleccionada;
    productos.forEach(p => {
      if (p.id === idProducto) {
        p.cantidadSeleccionada = cantidadSeleccionada;
      }
      actualizarProducto(p);
    });
    document.getElementById(idProducto).querySelector('input').value = cantidadSeleccionada;
    actualizarTotal();
    alert(`¡Has comprado ${cantidadSeleccionada} ${producto.nombre}!`);
  }
  
  function actualizarTotal() {
    let total = 0;
    productos.forEach(p => {
      total += p.precio * p.cantidadSeleccionada;
    });
    document.getElementById('total').textContent = `${total}`;
  }
  
  productos.forEach(p => productosContainer.appendChild(crearProducto(p)));
  actualizarTotal();

function pagar() {
  const selectElement = document.getElementById('opciones');
  const selectedOpcion = selectElement.value;
  alert(`Has seleccionado ${selectedOpcion} como método de pago`);
}