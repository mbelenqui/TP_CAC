document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarForm); 
});
  
function validarForm(evento) {
    evento.preventDefault();
    var name = document.getElementById('name').value;
    var expReg= /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3,4})+$/
    if(name.length == 0) {
        alert("Por favor ingrese un nombre en el formulario de contacto")
        return;
    }
    var email = document.getElementById('email').value;
    if (expReg.test(email)==false){
         alert("Por favor ingrese una direccion de mail valida")
       }
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length==0) {
        alert("El campo mensaje esta vacio");
        return;
    }
    alert('¡Gracias! Su mensaje fue enviado con exito')
    this.submit();
}

   

