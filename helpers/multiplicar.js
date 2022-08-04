const fs = require('fs')

const crearArchivo = async (base = 1, hasta = 10, listar = false) => {
  try {
    const fileName = `./salida/tabla-${base}.txt`
    let salida = ''

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i}\n`
    }

    if (listar) {
      console.log(`** Tabla del ${base} **\n`)
      console.log(salida)
    }
    fs.writeFileSync(fileName, salida)

    return fileName
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}
