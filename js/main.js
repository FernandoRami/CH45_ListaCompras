const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name")
const txtNumber = document.getElementById("Number")
const alertValidaciones = document.getElementById("alertValidaciones")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto")

function validarCantidad(){
    if(txtNumber.value.length == 0){
        return false;
    }// legth==0

    if(isNaN(txtNumber.value)){
        return false;
    }//isNaN

    if(Number(txtNumber.value)<=0){
        return false;
    }

    return true;
}//validadcantidad()

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";

//validar el nombre del producto
    if(txtNombre.value.length<3){
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="el <strong> Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display="block";
    }//if length

    //vaidar la cantidad
    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="el <strong> Cantidad</strong> no es correcto.<br/>";
        alertValidaciones.style.display="block";       
    }

});//btn agregar.addeventlistener


// evento blur es cuando un campo pierde el foco, se sale de campo
txtNombre.addEventListener("blur",function(event){
    txtNombre.value= txtNombre.value.trim();
}); //txtnombre.addeventlistener

txtNumber.addEventListener("blur",function(event){
    txtNumber.value= txtNumber.value.trim();
});
