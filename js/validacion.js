function validar(){	
	var mensaje="";

	var nombre=document.forms["frmcliente"].txtnombre.value;
	patron=/^\s*$/;
	if(patron.test(nombre)==true){
		mensaje+="\n"+"Ingrese el nombre y Apellidos";
	}
	
		
	var email=document.forms["frmcliente"].txtemail.value;
	patron=/^\w[\w._]*[@][a-zA-Z]+[.][a-z]{2,3}$/;		
	if(patron.test(email)==false){
		mensaje+="\n"+"Correo incorrecto";
	}
	
	var fono=document.forms["frmcliente"].txtfono.value;
	patron = /^[0-9]{7,15}$/;
	if(patron.test(fono)==false){
		mensaje+="\n"+"Telefono entre 7 hasta 15 digitos";
	}
	
	var carrera=document.forms["frmcliente"].cboropa.value;
	if(carrera==""){
		mensaje="\n"+"Selecciona una ropa de interés";
	}
	
	var sede=document.forms["frmcliente"].rbdistrito.value;
	if(sede==""){
		mensaje+="\n"+"Selecciona un distrito";
	}
		
	if(mensaje==""){
		alert("Datos Ingresado correctamente");
	}
	else{
		alert(mensaje);
	}	
}


$(document).ready(function(){

    //evento cycle con otra funcion
        $("#slider-efecto").cycle({
            fx:    'scrollUp', 
            timeout:  5000, 
            delay: -500 
        });
        
    });
    
    