 
let http = require('http');
let server = http.createServer();
 
function Servidor(petic, resp) {
	resp.writeHead(200, {'content-type': 'text/plain'});
	resp.write('Hola Mundo !');
	resp.end();
}
server.on('request', Servidor);
 
server.listen(3000, function () {
  	console.log('La Aplicación está funcionando en el puerto 3000');
});