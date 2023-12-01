const { log } = require('console');
const http = require('http');

const host = '127.0.0.7';

const tareas = [
    {   id: 1,
        descripcion: "estudiar",
        estado: "En proceso..." 
    },
    {   id: 2,
        descripcion: "estudiar",
        estado: "En proceso..." 
    }

];

function requestListener(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(JSON.stringify({menssage: "Hola mundo.", tareas}))
}

const server = http.createServer(requestListener);

server.listen(3000, host, () => {
    console.log('Servidor escuchando el puerto 3000 con diferente host.');
});


// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.write(JSON.stringify({message: "Hello world.", tareas}))
// res.end();