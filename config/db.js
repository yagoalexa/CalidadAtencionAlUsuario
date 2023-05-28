 
'use strict';
const mysql = require('mysql');
const dotenv = require('dotenv'); 
 
// Conexión a la base de datos 
const con = mysql.createConnection({
  host     : process.env.DB_HOST,       // Host
  user     : process.env.DB_USER,       // Usuario 
  password : process.env.DB_PASSWORD,   // Password  
  database : process.env.DB_NAME        // Base de datos 
});
 
// Realizamos la conexión 
con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a la Base de Datos !");
}); 
 
// Exportamos este módulo 
module.exports = con;