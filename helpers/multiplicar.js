const fs = require('fs');
const colors = require('colors');

salida = "";
consola = "";
const crearArchivo = async (base = 5,listar = false, limite = 10) => {
  try {
    
    for (let index = 1; index <= limite; index++) {
      let resultado = index * base
      salida += `${base} x ${index} = ${resultado}\n`;
      consola += `${base} ${"x".green} ${index} ${"=".green} ${resultado}\n`;
    }
    fs.writeFileSync(`./salida/Tabla-${base}-Limite${limite}.txt`, salida)
    if (listar===true) {
      console.log("===================".green)
      console.log(`    Tabla del ${base}`)
      console.log("===================".green)
      console.log(consola);
    }
    return `Tabla-${base}-Limite${limite}.txt`;
  } catch (err) {
    throw err;
  }
 
}

module.exports = {
  crearArchivo
}