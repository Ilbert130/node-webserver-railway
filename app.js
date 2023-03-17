require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


//Handlebars
//Asi se regitra la instancia 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Servir contenido estatico. Esto es un middleware
app.use(express.static('public')); //El nombre del archivo en la carpeta public a renderizar debe ser llamdo index
//Este es archivo que automaticamente trata de buscar

//Para renderizar una vista con handlebars
app.get('/', (req, res) =>{
    //como segundo parametro mandamos la informacion que queremos usar en el html como un objecto 
    //Y accedemos a esta con solo poner su nombre en el archivo html
    res.render('home', {
        nombre: 'Ilbert Castillo',
        titulo: 'Curso de node'
    });  //renderizando el home a la ruta principal
});

//devolviendo un generic.html sin el html
app.get('/generic', (req, res) =>{

    res.render('generic', {
        nombre: 'Ilbert Castillo',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Ilbert Castillo',
        titulo: 'Curso de node'
    });
});

//Con este comodin todas las rutas no definidas entran aqui '*'
app.get('*', (req, res) => {

    //Creando la ruta como absoluta con __dirname para que pueda funcionar
    res.sendFile(__dirname + '/public/404.html'); //renderisa un archivo y no un texto
});
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});