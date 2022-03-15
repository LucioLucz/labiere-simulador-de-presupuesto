//QUITAR ESTILO ELEGIDO DE LA LISTA
function quitarElegido() {
  console.log("this id " + this.id);
  // $(`#divEstiloElegido${this.id}`).remove();
  $(`#divEstiloElegido${this.id}`).slideUp(300);
  let seleccion = estilosElegidos.findIndex((estilo) => estilo.id == this.id);
  console.log(seleccion);
  estilosElegidos.splice(seleccion, 1);
  $("#divMaximoAlcanzado").remove();
  console.log(estilosElegidos);
}

//QUITAR ADICIONAL ELEGIDO DE LA LISTA
function quitarAdicionalElegido() {
  console.log("this id " + this.id);
  // $(`#divAdicionalElegido${this.id}`).remove();
  $(`#divAdicionalElegido${this.id}`).slideUp(300);
  let seleccion = adicionalesElegidos.findIndex(
    (adicional) => adicional.id == this.id
  );
  console.log(seleccion);
  adicionalesElegidos.splice(seleccion, 1);
  console.log(adicionalesElegidos);
  calcularPrecioTotal();
  $(`#divSubtotalAdicional${this.id}`).remove();
}

//SELECT
function crearItemsSelect() {
  for (i = 0; i < arrayLitros.length; i++) {
    $(selectLitros).append(
      `<option id="${i}" class="optionLitros">${arrayLitros[i].litros}</option>`
    );
  }
}

//FUNCIONES PARA CALCULAR EL PRECIO DE LA CERVEZA A PARTIR DEL SELECT
//Funcion Lineal por partes
function precioCervezas() {
  if (optionLitros >= 0 && optionLitros <= 30) {
    varPrecioCerveza = optionLitros * 360;
    precioTotal = (precioTotal + varPrecioCerveza);
    return (varPrecioCerveza);
  } else if (optionLitros > 30) {
    varPrecioCerveza = optionLitros * 340;
    precioTotal = (precioTotal + varPrecioCerveza)
    return (varPrecioCerveza);
  }
}

function mostrarSectionEstilos(){
  if(cantidadDeSaboresHabilitados != 0){
    $("#sectionEstilos").slideDown(1000);
    $("#sectionAdicionales").slideDown(1000);
  }else{
    $("#sectionEstilos").slideUp(1000);
    $("#sectionAdicionales").slideUp(1000);
  }
}

//LIMITAR CANTIDAD DE ESTILOS POSIBLES SEGUN CANTIDAD DE LITROS
function limitarEstilos() {
  optionLitros = parseInt(selectLitros.options[selectLitros.selectedIndex].value); //Obtener valor de cada option
  if (optionLitros == 10) {
    console.log("Podés elegir 1 sabor");
    cantidadDeSaboresHabilitados = 1;
    $("#msjCantidadDeSabores").fadeOut(300, function (){
      $("#msjCantidadDeSabores").empty();
      $("#msjCantidadDeSabores").append(`<p>Podés elegir 1 sabor</p>`);
      $("#msjCantidadDeSabores").fadeIn(500, mostrarSectionEstilos);
      }
    );
    // cantidadDeSaboresHabilitados = 1;
    console.log(cantidadDeSaboresHabilitados);
    mostrarSectionEstilos();
  } else if (optionLitros == 20) {
    cantidadDeSaboresHabilitados = 2;
    $("#msjCantidadDeSabores").fadeOut(300, function(){
      $("#msjCantidadDeSabores").empty();
      $("#msjCantidadDeSabores").append(`<p>Podés elegir hasta 2 sabores</p>`);
      $("#msjCantidadDeSabores").fadeIn(500, mostrarSectionEstilos);
    });
    console.log(cantidadDeSaboresHabilitados);
    mostrarSectionEstilos()
  } else if (optionLitros >= 30) {
    cantidadDeSaboresHabilitados = 3;
    console.log(cantidadDeSaboresHabilitados);
    $("#msjCantidadDeSabores").fadeOut(300, function(){
      $("#msjCantidadDeSabores").empty();
      $("#msjCantidadDeSabores").append(`<p>Podés elegir hasta 3 sabores</p>`);
      $("#msjCantidadDeSabores").fadeIn(500, mostrarSectionEstilos);
    });
    mostrarSectionEstilos();
  }else{
    cantidadDeSaboresHabilitados = 0;
    $("#msjCantidadDeSabores").fadeOut(300, function (){
      $("#msjCantidadDeSabores").empty();
    $("#msjCantidadDeSabores").append(`<p>Por favor, seleccione una opción</p>`);
    $("#msjCantidadDeSabores").fadeIn(500);
    });

    mostrarSectionEstilos()
  }
}

//CALCULAR PRECIO TOTAL
function calcularPrecioTotal() {
  sumaTotal = 0;
  //Recorrer array de adicionales Elegidos
  for (let index = 0; index < adicionalesElegidos.length; index++) {
    sumaTotal += parseInt(adicionalesElegidos[index].precio);
    console.log(sumaTotal);
  }
  precioTotal = precioCervezas() + sumaTotal;
  //Actualizar precio en DOM
  $(`#divPrecioTotal`).empty();
  $(`#divPrecioTotal`).append(`<h3>Total</h3><p> = $${precioTotal}</p>`)
}

//VOLVER SELECT A 0
// function resetearSelect(){
//   const defaultSelect = $(`#selectLitros`).find("option#0");
//   $(`#selectLitros`).change(e => {
//     const value = $(`#selectLitros`).val();
//     console.log(value);
//     $(`#selectLitros`).val(defaultSelect.val());
//   });
// };
//LLAMADA AL DOM - OPTION LITROS DEFAULT

