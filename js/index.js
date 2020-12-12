function reloj(){
	var cero ="0";
	var f=new Date(); 
	var h=f.getHours(); 
	var m=f.getMinutes();
	var s=f.getSeconds();
	if(m<10) {
		m = m+ cero;
	}
	if(s<10) {
		s = s+cero;
	}
	
	document.querySelector("#hora").innerText=h+":"+m+":"+s;
	setTimeout("reloj()",1000);
}

var baner=new Array("1.jpg", "2.jpg", "6.jpg", "4.jpg", "5.jpg");
var c=0;

function carrusel(){
	$("#baner").css({"height":"0px","transition":"all 1s"});
	
	setTimeout("cambio()",1000);
}
function cambio(){
	c++;
	if(c>=baner.length)c=0;
	
	$("#baner").attr("src","imagenes/homepage/homepage-"+baner[c]);
	$("#baner").css({"height":"430px","transition":"all 1s"});
	setTimeout("carrusel()",4000);
}

$(document).ready(function(){
	carrusel();
	
	$(".rs").mouseover(function(){
		$(this).attr("style","border-radius:10px; border:1px solid; transform: rotateY(360deg); transition:all 1s");
	});
	$(".rs").mouseleave(function(){
		$(this).attr("style","border-radius:0px; border:0px; transform: rotateY(0); transition:all 1s");
    });
    

    $(".modakids").mouseenter(function(){
		$(this)
		.attr("style","background-color:pink; color:purple; transition:all 1s")
		.find($("img"))
		.eq(0)
		.attr("style","height:0px; transition: all 1s")
		.end();
			
	});
	$(".modakids").mouseleave(function(){
		$(this)
		.attr("style","background-color:auto; color:black; transition:all 1s")
		.find($("img"))
		.eq(0)
		.css("height","160px")
		.end();
	});
});



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