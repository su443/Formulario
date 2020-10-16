function validar() {
    var nombre, apellidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById('nombre').value;
    apellidos = document.getElementById('apellidos').value;
    correo = document.getElementById('correo').value;
    usuario = document.getElementById('usuario').value;
    clave = document.getElementById('clave').value;
    telefono = document.getElementById('telefono').value;
    
    expresion = /\w+@\w+\.+[a-z]/; //igual a  texto123+@+texto+.+texto expresion de formato de correo electronico
    
    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
        alert("Campos obligatorios");
       return false;
    } else if(nombre.length>30){
        alert("Solo se admiten 30 caracteres para el nombre");
        return false;
    } else if(apellidos.length>80){
        alert("Solo se admiten 30 caracteres para los apellidos");
        return false;
    } else if(correo.length>100){
        alert("Solo se admiten máximo 100 caracteres para el correo");
        return false;
    } else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    } else if(usuario.length>20 || clave.length>20){
        alert("Solo se admiten 20 caracteres en usuario y en password");
        return false;
    } else if(telefono.length>10){
        alert("Solo se admiten 10 caracteres en el número telefonico");
        return false;
    } else if(isNaN(telefono)){
        alert("El teléfono deben contener sólo números");
        return false;
    }
    
    
}