//Llamada del path del arquivo con require
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:

        console.log('Comando no reconocido');


}

// Objecto process  sirve para  obtener  el path de node y del archivo en ejecución
// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = path[2];
// 
// let base = parametro.split('=')[1];


//recibe la promesa