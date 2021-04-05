const { number, boolean } = require('yargs');
const argv = require('yargs')
  .option('b', {
    alias: "base",
    type: number,
    describe: "Añade la base de la tabla",
    demandOption: true,
  })
  .option('l', {
    alias: 'listar',
    type: boolean,
    describe: "Decide si quiero o no mostrar la tabla en pantalla", 
  })
  .option('h', {
    alias: 'hasta',
    default: 10,
    type: number,
    describe: "Añade hasta donde quiero tener la tabla de multiplicar", 
  })
  .check((argv, options) => {
    console.log("Yargs", argv);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero"
    } else {
      if (isNaN(argv.h)) {
      throw "El limite tiene que ser un numero"
      } else {
        return true
      }
    }
  })
  .argv;

module.exports = argv;