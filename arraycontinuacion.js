/* Los metodos de las variables dependeran de que tipo de variable estemos usando.Por ejm
las variables de los array tendran distintos metodos a diferencia de los metodos de una
variable tipo string */
const empresas1 = ["LG", "Adidas", "Garbarino"];
const fundaciones = [1970, 1900, 1780];
const cantEmpleados = [1000, 500, 700];

const nombre = "pepe"
nombre.toLowerCase()  //este metodo es exclusivo de una varible que es string

empresas1.forEach(mostrarEmpresa);

function mostrarEmpresa(empresa, index) {
    let numerar = "cantidad de empleado"
    console.log(empresa.toLowerCase(), fundaciones[index],"cant. empleados son", cantEmpleados[index] );

}

