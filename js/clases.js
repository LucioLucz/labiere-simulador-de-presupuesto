//PARA arrayPersonas
class cantPersonas {
    constructor(cantidadPersonas){
        this.cantidadPersonas = parseInt(cantidadPersonas);
    }
}

//PARA ARRAY DE CERVEZAS "estilos" HARDCODEADOS
class Estilo {
    constructor (id, nombre){
        this.id = parseInt(id);
        this.nombre = nombre;
        console.log("Se ha agregado el estilo " + nombre);
    }
}

//SABORES DE CERVEZA ELEGIDOS POR EL USUARIO
class Elegido {
    constructor(id, nombre){
    this.id = parseInt(id);
    this.nombre = nombre;
    }
}

//SERVICIOS ADICIONALES
class Adicional {
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

//ADICIONALES ELEGIDOS POR EL USUARIO
class adicionalElegido {
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

//OPTIONS DE SELECT LITROS
class OptionLitros {
    constructor(id, litros, precio){
        this.id = parseInt(id);
        this.litros = parseInt(litros);
        //Funcion lineal para el precio (Reemplazar por cuadrática)
        this.precio = parseInt(litros*306);
    }
}

