

//BOTON COMENZAR
// btnComenzar.addEventListener("click", function comenzar(e){
//   console.log("hola");
// });
console.log(botonComenzar);

botonComenzar.addEventListener("click", function (e){
  e.preventDefault();
    $(".div-comenzar").slideUp(500, function(){
      $("#sectionLitros").slideDown(700);
    });
});

//INDICACION DE CANTIDAD DE GUSTOS A ELEGIR SEGUN LA CANTIDAD DE LITROS
selectLitros.addEventListener("change", limitarEstilos);

//SELECT
crearItemsSelect();
console.log(estilos);

//MOSTRAR PRECIOS DESDE SELECT
selectLitros.addEventListener("change", function changeFunc() {
  console.log(this.id);
  optionLitros = parseInt(selectLitros.options[selectLitros.selectedIndex].value); //Obtener valor de cada option
  console.log(optionLitros);
  if (optionLitros != 0) {
    console.log(`optionlitros = ${optionLitros}`);
    $("#divSubtotalPorLitro").remove(); //Eliminar div contenedor
    //Animación
    $(divMostrarPrecio).fadeIn(1000, function(){
    calcularPrecioTotal();
    $(divPrecioSubtotal).append(
      `<div id="divSubtotalPorLitro">Cerveza por ${optionLitros} litros = $${precioCervezas()}</div>`
      ); 
    //Agregar div con el precio x litros
    });
  } else {
    $("#divSubtotalPorLitro").remove(); 
    precioCervezas();
    calcularPrecioTotal();
    //Limpiar div contenedor cuando el option es 0
  }
});

//MOSTRAR ESTILOS DE CERVEZA EN CARDS
$("#divEstilos");
for (let index = 0; index < estilos.length; index++) {
  //Modificar clase desde el dom
  divEstilosElegidos.setAttribute("class", "row");
  $("#divEstilos").append(`<div id="estilo${
    index + 1
  }" class="card card-bgc" style="width: 15rem;">
<img src="Imgs/estilos-de-cerveza/estilo-${estilos[index].id}-recorte.jpg" class="card-img-top" alt="Vaso de cerveza"></img>
<div class="card-body">
  <h5 class="card-title">${estilos[index].id} - ${estilos[index].nombre}</h5>
  <a id="${
    estilos[index].id
  }" href="#" class="btn btn-primary btnElegir">Elegir</a>
</div>
</div>`);
}

console.log(botonesElegir);

console.log(estilosElegidos);

//MOSTRAR SERVICIOS ADICIONALES EN CARDS
$("#divAdicionales");
for (let index = 0; index < arrayAdicionales.length; index++) {
  //Modificar clase desde el dom
  divAdicionalesElegidos.setAttribute("class", "row");
  $("#divAdicionales").append(`<div id="divAdicional${
    index + 1
  }" class="card card-bgc card-img-top" style="width: 15rem;">
<img src="Imgs/iconos-servicios/servicio-adicional-${arrayAdicionales[index].id}.png" class="card-img-top bgc-grey icon-width" alt="..."></img>
<div class="card-body">
  <h5 class="card-title">${arrayAdicionales[index].id} - ${
    arrayAdicionales[index].nombre
  }</h5>
  <a id="${
    arrayAdicionales[index].id
  }" href="#" class="btn btn-primary btnAdicional">Elegir</a>
</div>
</div>`);
}

//FUNCION PARA BOTONES "ELEGIR"
for (const botonElegir of botonesElegir) {
  botonElegir.addEventListener("click", function (e) {
    e.preventDefault();
    seleccion = estilos.find((estilo) => estilo.id == this.id);
    console.log("El usuario seleccionó " + seleccion.id + " - " + seleccion.nombre);
    //buscar en array de estilos elegidos
    const noRepetirEstilo = estilosElegidos.find((seleccion) => seleccion.id == this.id);
    console.log(noRepetirEstilo);
    console.log(estilosElegidos.length);
    //LIMITAR CANTIDAD DE ESTILOS ELEGIDOS
    //Evitar repeticion de estilos
    if (noRepetirEstilo !== undefined) {
       console.log("Estilo repetido");
    }else if (estilosElegidos.length == cantidadDeSaboresHabilitados) {
      //Aviso de maximo de estilos
      console.log("maximo de estilos alcanzado");
      $("#divMaximoAlcanzado").remove();
      $("#divEstilosElegidos").append(`<div id="divMaximoAlcanzado"><p>Máximo de estilos alcanzado</p></div>`);
    }else if ((estilosElegidos.length < cantidadDeSaboresHabilitados) && (noRepetirEstilo == undefined)) {
      //Mostrar estilos elegidos
      estilosElegidos.push(new Elegido(seleccion.id, seleccion.nombre));
      console.log(estilosElegidos);
      $(`#divEstiloElegido${seleccion.id}`).slideDown(300);
      $("#divEstilosElegidos").append(`<div id="divEstiloElegido${seleccion.id}" class="col-4" style="display: none"> <h4>${seleccion.id} - ${seleccion.nombre}</h4><button id=${seleccion.id} class="btn btn-primary btnQuitarElegido">Quitar</button>`);
        $("#sectionMostrarEleccion").slideDown(800, function () {
          $(`#divEstiloElegido${seleccion.id}`).slideDown(300)
        });
      console.log(estilosElegidos.length);
    } 

    //FUNCION PARA BOTONES "QUITAR"
    console.log(botonesQuitarElegido);
    for (const botonQuitarElegido of botonesQuitarElegido) {
      botonQuitarElegido.addEventListener("click", quitarElegido);
    }
  });
}

//FUNCION PARA BOTONES "ADICIONAL"
for (const boton of botonesAdicionales) {
  boton.addEventListener("click", function (e) {
    e.preventDefault();
    //console.log(this.id);
    seleccion = arrayAdicionales.find((adicional) => adicional.id == this.id);
    //console.log(seleccion);
    console.log("El usuario seleccionó " + seleccion.id + " - " + seleccion.nombre);
    //buscar en array de Adicionales elegidos para evitar repeticion en el DOM
    const noRepetirAdicional = adicionalesElegidos.find((seleccion) => seleccion.id == this.id);
    console.log(noRepetirAdicional);
    if (noRepetirAdicional !== undefined) {
      console.log("Servicio Adicional repetido");
   }else if (adicionalesElegidos.length <= 2) {
      adicionalesElegidos.push(
        new adicionalElegido(seleccion.id, seleccion.nombre, seleccion.precio));
      console.log(adicionalesElegidos[0].precio);
      console.log(arrayAdicionales);
      console.log(adicionalesElegidos);
      $("#divAdicionalesElegidos").append(
        `<div id="divAdicionalElegido${seleccion.id}" class="col-4" style="display: none"> <h4>${seleccion.id} - ${seleccion.nombre}</h4><button id=${seleccion.id} class="btn btn-primary btnQuitarAdicionalElegido">Quitar</button>`);
      $(divPrecioSubtotal).append(`<div id="divSubtotalAdicional${seleccion.id}">Servicio adicional - ${seleccion.nombre} = $${seleccion.precio}</div>`);
      $("#sectionMostrarEleccion").slideDown(800);
      $(`#divAdicionalElegido${seleccion.id}`).slideDown(300);
    console.log(adicionalesElegidos.length);
    calcularPrecioTotal();
    } 
    //FUNCION PARA BOTONES "QUITAR ADICIONAL"
    console.log(botonesQuitarAdicionalElegido);
    for (const boton of botonesQuitarAdicionalElegido) {
      boton.addEventListener("click", quitarAdicionalElegido);
    }
  });
}

console.log(estilosElegidos);

//BOTON LIMPIAR LISTA
botonLimpiarElegidos.addEventListener("click", function () {
  // $('#selectLitros option:first').prop('selected',true);
  $("#selectLitros").val(0).trigger( "change" );//Reseteo de Select
  limitarEstilos();
  localStorage.clear("estilosElegidos");
  divEstilosElegidos.innerHTML = "";
  divAdicionalesElegidos.innerHTML = "";
  //Loops para limpiar arrays de Estilos Elegidos
  for (let index = 0; index <= estilosElegidos.length; index++) {
    estilosElegidos.shift(index);
  }
  for (let index = 0; index <= adicionalesElegidos.length; index++) {
    adicionalesElegidos.shift(index);
  }
  
  console.log(localStorage);
});

//CONVERTIR ARRAYS DE ESTILOS y SERVICIOS ELEGIDOS A JSON
botonGuardarCarrito.addEventListener("click", function () {
  let estilosElegidosJSON = JSON.stringify(estilosElegidos);
  localStorage.setItem("estilosElegidos", estilosElegidosJSON);
  let adicionalesElegidosJSON = JSON.stringify(adicionalesElegidos);
  localStorage.setItem("adicionalesElegidos", adicionalesElegidosJSON);
  console.log(localStorage);
  console.log(estilosElegidosJSON);
});

//RECUPERAR DATOS DE LOCAL STORAGE
console.log(localStorage);
console.log(mostrarEstilosElegidos);