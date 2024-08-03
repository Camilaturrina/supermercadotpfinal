let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let btnEnviar = document.getElementById("btnEnviar");
let informacion =[];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();//previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = mensaje.value;
     console.log(`su nombre es ${nombre.value} su apellido es ${apellido.value} su email es ${email.value} su telefono es ${telefono.value} su mensaje es ${mensaje.value}`);


     let blob = new Blob ([informacion], {type: "text/plain;charset=utf-8"});
     //crea un blob con el contenido de la variable informacion
     saveAs (blob, "formulario.txt");

});

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || telefono.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false; // Evita que se envíe el formulario
    }
    
    return true; // Permite el envío del formulario
}
   

