//Libreria de Node
const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=========='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=========='.green);
    for (i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i } \n`);
    }
};


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} ingresada no es un número`);
            return;
        }

        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`./tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del ${base} al ${limite}`);
        });



    });
};

//Exportar archivos
module.exports = {
    crearArchivo,
    listarTabla
};