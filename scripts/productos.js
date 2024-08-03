const productosContainer = document.querySelector('.productos-container');

const productos = [
    {
        id: 'dulce',
        nombre: 'Dulce de leche La Serenisima', 
        precio: 980,
        imagen: 'Img/Dulce de leche.jpeg',
        cantidadDisponible: 10, 
        cantidadSeleccionada: 0,
    },
    {
        id: 'cerveza',
        nombre: 'Cerveza Corona Rubia 300cc',
        precio: 1299,
        imagen: 'Img/cerveza.jpeg',
        cantidadDisponible: 10, 
        cantidadSeleccionada: 0,
    },
    {
        id: 'vino',
        nombre: 'Vino blanco Viñas de Alvear',
        precio: 2499,
        imagen: 'Img/vino.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,
    },
    {
        id: 'jugo',
        nombre: 'Jugo en sobre cligth',
        precio: 199,
        imagen: 'Img/jugo.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,
    },
    {
        id: 'oreos',
        nombre: 'Galletitas Oreos 350g',
        precio: 3299,
        imagen: 'Img/galletitas.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,

    },
    {
        id: 'azucar',
        nombre: 'Azucar Comun La Perla 1kg',
        precio: 860,
        imagen: 'Img/azucar.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,

    },
    {
        id: 'yerba',
        nombre: 'Yerba mate Playadito suave con palo 1 kg',
        precio: 3840,
        imagen: 'Img/yerba.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,

    },
    {
        id: 'pure',
        nombre: 'Puré de tomate Carrefour classic 520 g',
        precio: 699,
        imagen: 'Img/tomate.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,

    },
    {
        id: 'sal',
        nombre: 'Sal Fina Celusal paquete 500 g.',
        precio: 1089,
        imagen: 'Img/sal.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,

    },
    {
        id: 'fideos',
        nombre: 'Fideos mostacholes Lucchetti 500 g.',
        precio: 1020,
        imagen: 'Img/fideos.jpeg',
        cantidadDisponible: 10,
        cantidadSeleccionada: 0,
    }
];

function crearProducto(producto) {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    productoDiv.id = producto.id;

    // Agregar la imagen del producto
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    productoDiv.appendChild(imagen);

    // Mostrar el nombre y precio del producto
    const nombrePrecio = document.createElement('p');
    nombrePrecio.textContent = `${producto.nombre} $${producto.precio}`;
    productoDiv.appendChild(nombrePrecio);

    // Agregar un input para la cantidad
    const inputCantidad = document.createElement('input');
    inputCantidad.type = 'number';
    inputCantidad.min = 1;
    inputCantidad.max = producto.cantidadDisponible;
    inputCantidad.value = producto.cantidadSeleccionada;
    inputCantidad.addEventListener('change', () => {
        // Actualizar la cantidad seleccionada del producto
        producto.cantidadSeleccionada = parseInt(inputCantidad.value);
        // Validar que la cantidad no sea negativa
        if (producto.cantidadSeleccionada < 0) {
            producto.cantidadSeleccionada = 0;
            inputCantidad.value = 0;
        }
        // Actualizar la visualización del producto
        actualizarProducto(producto);
        // Actualizar el total
        actualizarTotal();
    });
    productoDiv.appendChild(inputCantidad);

    // Agregar un botón para comprar
    const botonComprar = document.createElement('button');
    botonComprar.textContent = 'Comprar';
    botonComprar.onclick = () => {
        comprarProducto(producto.id);
        // Actualizar el total después de comprar
        actualizarTotal();
    };
    productoDiv.appendChild(botonComprar);

    return productoDiv;
}

//appenchild para agregar el boton comprar al div producto y agregarle el evento onclick que comprara el producto

function actualizarProducto(producto) {
    const productoDiv = document.getElementById(producto.id);
    productoDiv.querySelector('p').textContent =` ${producto.nombre} $${producto.precio}`;
    // Actualizar el valor del input de cantidad
    productoDiv.querySelector('input').value = producto.cantidadSeleccionada;
}

function comprarProducto(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    const cantidadSeleccionada = parseInt(document.getElementById(idProducto).querySelector('input').value);

    if (producto.cantidadDisponible >= cantidadSeleccionada) {
        producto.cantidadDisponible -= cantidadSeleccionada;
        document.getElementById(idProducto).querySelector('input').value = producto.cantidadSeleccionada;
        actualizarProducto(producto);
        alert(`¡Has comprado ${cantidadSeleccionada} unidades de ${producto.nombre}!`);
    } else {
        alert(`Lo siento, solo quedan ${producto.cantidadDisponible} ${producto.nombre} disponibles.`);
    }
}

function actualizarTotal() {
    let total = 0;
    productos.forEach(p => {
        if (p.cantidadDisponible > 0) {
            total += p.precio * p.cantidadSeleccionada;
        }
    });
    document.getElementById('total').textContent = total; 
}
//p. es un producto, p.precio es el precio del producto y p.cantidadSeleccionada es la cantidad seleccionada del producto


// Crear los productos en el HTML
productos.forEach(p => productosContainer.appendChild(crearProducto(p)));

// Inicializar el total
actualizarTotal();

function pagar() {
    const selectElement = document.getElementById('opciones');
    const selectedOpcion = selectElement.value;
    alert(`Has seleccionado ${selectedOpcion} como método de pago`);
}


