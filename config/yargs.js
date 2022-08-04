const argv = require('yargs')
  .option('b', {
    alias: 'base',
    demandOption: true,
    describe: 'La base de la tabla de multiplicar',
    type: 'number',
  })
  .option('h', {
    alias: 'hasta',
    default: 10,
    describe: 'Marca hasta qué número, incluído, llega la multiplicación',
    type: 'number',
  })
  .option('l', {
    alias: 'listar',
    default: false,
    describe: 'Muestra la tabla en consola',
    type: 'boolean',
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw '-b, --base debe ser un número'
    }

    return true
  }).argv

module.exports = argv
