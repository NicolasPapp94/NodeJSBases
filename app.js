const { crearArchivo } = require("./helpers/multiplicar")
const argv = require("./config/yargs")
require('colors');

console.clear();
base = argv.base;
listar = argv.listar;
limite = argv.hasta;

console.log(argv);
 crearArchivo(base,listar,limite)
   .then((archivo) => console.log(archivo.rainbow, "creado"))
   .catch((err)=> console.log("Error",err))
