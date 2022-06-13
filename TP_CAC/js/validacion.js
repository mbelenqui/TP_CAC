function validar(){
    var form = document.form;
    //Ve que los campos no se envien vacios

    if(form.nombre.value==0){
        alert("Por favor ingrese un nombre en el formulario de contacto");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.correo.value==0){
        alert("Por favor ingrese una direccion de mail en el formulario de contacto");
        form.correo.value="";
        form.correo.focus();
        return false;
    }

    
    if(form.mensaje.value==0){
        alert("El campo mensaje esta vacio");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }
    alert("¡Gracias!El mensaje se envio con exito")
    form.submit();
}
