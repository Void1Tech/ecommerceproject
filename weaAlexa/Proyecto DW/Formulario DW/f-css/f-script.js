
// no permitir espacios en los campos
function noEspacios (event)
{ if (event.keyCode == 32) { 
    event.preventDefault();
  }
}
//Hacer que las contraseñas coincidan
function verificarPassword (){ 
 var clave1 = document.getElementById("clave1").Value;
 var clave2 = document.getElementById("clave2").value;
 var mensaje = document.getElementById("mensaje");

 if(clave1 !== clave2) {
     mensaje.textcontext = "Las contraseñas no coinciden";
} else {
    mensaje.textcontext = "";
   }
 }