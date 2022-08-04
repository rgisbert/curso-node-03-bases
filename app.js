const argv = require('./config/yargs')
const {crearArchivo} = require('./helpers/multiplicar.js')

// ? Limpia la consola antes de la ejecución
console.clear()

/**
 * Recogida de argumentos desde consola:
 *
 * node app.js --base=5 --limite=20
 *
 * Para recogerlos en node, utilizo process.argv<string[]>
 *
 * Ejemplo ayuda antes de usar argv
 *
 * const [, , argv3 = 'base=5'] = process.argv
 * const [, base = 5] = argv3.split('=')
 */

// console.log(argv)

crearArchivo(argv.base, argv.hasta, argv.listar)
  .then((fileName) => console.log(`Archivo ${fileName} creado.`))
  .catch((err) => {
    console.log(`Error, no se ha podido crear el archivo.\nDescription:`, err)
  })
