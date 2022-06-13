document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarForm); 
});
  
function validarForm(evento) {
    evento.preventDefault();
    var name = document.getElementById('name').value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(name.length == 0) {
        alert("Por favor ingrese un nombre en el formulario de contacto")
        return;
    }
    var email = document.getElementById('email').value;
    if (expReg.test(email)==false){
         alert("Por favor ingrese una direccion de mail valida")
         return;
       }
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length==0) {
        alert("El campo mensaje esta vacio");
        return;
    }
    alert('¡Gracias! Su mensaje fue enviado con exito')
    form.submit();
}

   

