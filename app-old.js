const http = require('node:http');



//req: lo que se solicita, res: lo que se responde
http.createServer((req, res)=>{

    // res.writeHead(200, {'Content-Type':'text/plain'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona ={
    //     id: 1,
    //     nombre: 'Fernando'
    // }

    // res.write(JSON.stringify(persona));
    // res.write('1, Fernando\n');
    // res.write('2, Maria\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');

    res.write('Hola mundo');
    res.end();
})
.listen(8088);

console.log('Escuchando el purto', 8088);