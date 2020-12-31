const descripcion ={
    demand: true,
    alias: 'd',
}

const completado ={
    default: false,
    alias: 'c',
}

const argv = require('yargs')
    .command('crear','crea una nueva tarea',{descripcion,completado})
    .command('actualizar','actualiza una tarea ya existente',{descripcion,completado})
    .command('borrar','borra la tarea indicada',{descripcion})
    .help()
    .argv

module.exports = {
    argv
}