// ["LG", 1970, 1000, 600]
/* Los atributos de un objeto se guardan en LLAVES */

const empresa = {  // este es un OBJETO que dentro de las llaves tendran los atributos...
    nombre: "LG",
    fundacion: 1970,
    cantEmpleados: 1000,
    cantSucursales : 600,
};
console.log(empresa.fundacion); //aqui digo muestrame el atritubo fundacion del objeto empresa

const paciente1 = {
    nombre: "Erick",
    grupoSang: "o+",
    altura: 1.65,
};

const paciente2 = {
    nombre: "pepe",
    grupoSang: "b+",
    altura: 1.80,
};
console.log("Altura del paciente ", paciente2.altura)

const empresaLG = { //este array tiene objetos y el objeto empleado a su ves es un array que tiene 2 objetos.
    nombre: "LG",
    fundacion: 1970,
    empleados: [{ nombre: "rqwe", edad: 13, salario: 20222 }, { nombre: "rq5232e", edad: 33, salario: 63212 }],
    //ahora mi atributo empleados lo transformo a un array para guardar objetos con sus atributos.
    sucursales: 600,
};

const empresaAdidas = {
    nombre: "ADIDAS",
    fundacion: 182,
    empleados: 1046,
    sucursales: 97,
};

/* dentro de un array puedo guardar objetos */

const empresas1 = [empresaLG, empresaAdidas,
    { // de esta forma tambien puedo guardar un objeto dentro de un array. la coma , separa elementos.
    nombre: "atma",
    fundacion: 682,
    empleados: 346,
    sucursales: 647,
} ];
console.log(empresas1[2].fundacion); // me va a mostrar la fundacion de atma.
console.log(empresaLG.empleados[1])

const empresas = [
    {
    nombre: "LG", //ESTE ES EL PRIMER OBJETO DE EMPRESAS
    fundacion: 1970,
        empleados: [ // ESTE ES EL ATRIBUTO QUE TIENE UN ARRAY QUE CONTIENE EMPLEADOS. 
            { nombre: "juan", edad: 13, salario: 20222 }, // ESTE ES MI PRIMER EMPLEADO 
            {
                nombre: "pedro", edad: 33, salario: 63212,
                telefono: [{ personal: 1234, casa: 7432 }] //ESTE ES UN ATRIBUTO QUE TIENE ARRAY
            }],
    sucursales: 600,
    },
    {
        nombre: "ADIDAS",
        fundacion: 182,
        empleados: 1046,
        sucursales: 97,
    },
    { 
    nombre: "atma",
    fundacion: 682,
    empleados: 346,
    sucursales: 647,
    }];
console.log(empresas[0].empleados[1].telefono[0].personal);

const divContenido = document.getElementById("contenido"); /* "document" es un objeto que ya esta definido dentro del navegador y
que tiene el metodo ".getElementbyid" que significa (dame un elemento por id), asi que va a ir a html y va a buscar el 
elemento que tenga como id "contenido y nos devolvera el div de html y el elemento lo guardara como objeto en "divContenido" */