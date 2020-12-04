//Librería yargs

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

};

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar,', opts)
    .command('crear', 'Genera un archivo con la tabla a multiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
};