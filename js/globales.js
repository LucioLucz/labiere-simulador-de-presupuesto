//ARRAY LITROS
const arrayLitros = [];

//LISTA LITROS
const option0 = new OptionLitros(0, 0);
const option1 = new OptionLitros(1, 10);
const option2 = new OptionLitros(2, 20);
const option3 = new OptionLitros(3, 30);
const option4 = new OptionLitros(4, 40);
const option5 = new OptionLitros(5, 50);
const option6 = new OptionLitros(6, 60);
const option7 = new OptionLitros(7, 70);
const option8 = new OptionLitros(8, 80);
const option9 = new OptionLitros(9, 90);
const option10 = new OptionLitros(10, 100);
const option11 = new OptionLitros(11, 110);
const option12 = new OptionLitros(12, 120);
const option13 = new OptionLitros(13, 130);
const option14 = new OptionLitros(14, 140);
const option15 = new OptionLitros(15, 150);
console.log(arrayLitros);

//CARGA DE LITROS EN SELECT
arrayLitros.push(option0);
arrayLitros.push(option1);
arrayLitros.push(option2);
arrayLitros.push(option3);
arrayLitros.push(option4);
arrayLitros.push(option5);
arrayLitros.push(option6);
arrayLitros.push(option7);
arrayLitros.push(option8);
arrayLitros.push(option9);
arrayLitros.push(option10);
arrayLitros.push(option11);
arrayLitros.push(option12);
arrayLitros.push(option13);
arrayLitros.push(option14);
arrayLitros.push(option15);
console.log(arrayLitros);

//ARRAY ESTILOS
const estilos = [];

//ESTILOS DE CERVEZA
const estilo1 = new Estilo(1, "Rubia");
const estilo2 = new Estilo(2, "Roja");
const estilo3 = new Estilo(3, "Negra");
const estilo4 = new Estilo(4, "Golden");
const estilo5 = new Estilo(5, "Lager");
const estilo6 = new Estilo(6, "Amber")
const estilo7 = new Estilo(7, "Ipa");
const estilo8 = new Estilo(8, "Milk stout");
const estilo9 = new Estilo(9, "Honey");

//CARGA DE ESTILOS EN ARRAY
estilos.push(estilo1);
estilos.push(estilo2);
estilos.push(estilo3);
estilos.push(estilo4);
estilos.push(estilo5);
estilos.push(estilo6);
estilos.push(estilo7);
estilos.push(estilo8);
estilos.push(estilo9);

//ARRAY PARA ESTILOS DE CERVEZA ELEGIDOS POR EL USUARIO
const estilosElegidos = [];

//ARRAY ADICIONALES
const arrayAdicionales = [];

//CARGA DE SERVICIOS ADICIONALES
const Adicional1 = new Adicional(1, "Personal", 3000);
const Adicional2 = new Adicional(2, "Cristaleria", 2000);
const Adicional3 = new Adicional(3, "Traslado", 3000);
console.log(arrayAdicionales);

//CARGA DE ADICIONALES EN ARRAY
arrayAdicionales.push(Adicional1);
arrayAdicionales.push(Adicional2);
arrayAdicionales.push(Adicional3);
console.log(arrayAdicionales);

//ARRAY PARA SERVICIOS ADICIONALES ELEGIDOS POR EL USUARIO
const adicionalesElegidos = [];

//LLAMADA AL DOM - BOTONES PARA AGREGAR SABORES A LA LISTA
let botonesElegir = document.getElementsByClassName("btnElegir");

//VARIABLE PARA OCULTAR Y MOSTRAR BOTONES DESDE EL EVENTO
let botonElegir = document.getElementById("btnElegir")

//LLAMADA AL DOM - BOTONES PARA AGREGAR ADICIONALES A LA LISTA
let botonesAdicionales = document.getElementsByClassName("btnAdicional");

//RECUPERAR ESTILOS ELEGIDOS DEL LOCAL STORAGE
let mostrarEstilosElegidos = JSON.parse(localStorage.getItem("estilosElegidos"));

//LLAMADA AL DOM - DIV ESTILOS ELEGIDOS
let divEstilosElegidos = document.getElementById("divEstilosElegidos");

//LLAMADA AL DOM - BOTON "QUITAR" - ESTILOS ELEGIDOS INDIVIDUALES
let botonesQuitarElegido = document.getElementsByClassName("btnQuitarElegido");

//LLAMADA AL DOM - BOTON "QUITAR" - ADICIONALES ELEGIDOS INDIVIDUALES
let botonesQuitarAdicionalElegido = document.getElementsByClassName("btnQuitarAdicionalElegido");

//LLAMADA AL DOM - BOTON "LIMPIAR LISTA"
let botonLimpiarElegidos = document.getElementById("botonLimpiarElegidos");

//LLAMADA AL DOM - BOTON "GUARDAR CARRITO"
let botonGuardarCarrito = document.getElementById("botonGuardarCarrito");

//LLAMADA AL DOM - DIV SELECT LITROS
let divSelectLitros = document.getElementById("divSelectLitros");

//LLAMADA AL DOM - SELECT LITROS
let selectLitros = document.getElementById("selectLitros");

//LLAMADA AL DOM - OPTION - LITROS
let optionLitros = document.getElementsByClassName("optionLitros");

//LLAMADA AL DOM - DIV MOSTRAR PRECIO
let divMostrarPrecio = document.getElementById("divMostrarPrecio");

//LLAMADA AL DOM - DIV MOSTRAR PRECIO
let divPrecioTotal = document.getElementById("divPrecioTotal");

//VARIABLE PARA CONTROLAR CANTIDAD DE SABORES A ELEGIR SEGUN CANTIDAD DE LITROS
let cantidadDeSaboresHabilitados = parseInt("");

//PRECIO TOTAL
let precioTotal = 0;

//VARIABLE PARA EL PRECIO DE CERVEZA
let varPrecioCerveza = 0;

//VARIABLE PARA SUMAR PRECIOS DE SERVICIOS ADICIONALES ELEGIDOS
let sumaTotal = parseInt(0);

//LLAMADA AL DOM - BOTON COMENZAR
// let botonComenzar = document.getElementsByClassName("btnComenzar");
let botonComenzar = document.getElementById('boton-comenzar');
// let botonComenzar = $('.btnComenzar');
// let botonComenzar = $("#boton-comenzar");

