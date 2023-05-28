const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config({
	path: path.resolve(__dirname+'/enviroment', process.env.NODE_ENV + '.env')
  });
let http = require('http');
let server = http.createServer();
 
function Servidor(petic, resp) {
	resp.writeHead(200, {'content-type': 'text/plain'});
	resp.write('Hola Mundo !');
	resp.end();
}
server.on('request', Servidor);
console.log(__dirname, process.env.NODE_ENV + '.env');
server.listen(process.env.PORT, function () {
  	console.log('La Aplicación está funcionando en el puerto ' + process.env.PORT);
});