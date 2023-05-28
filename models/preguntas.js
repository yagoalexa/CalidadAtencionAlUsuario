'use strict'
var conexion = require('../config/db');

let Pregunta = function(pregunta){
    this.numero = pregunta.numero;
    this.descripcion = pregunta.descripcion;
    this.tipoPregunta = pregunta.tipoPregunta;
    this.calificacion = pregunta.calificacion;
    this.fechaCalificacion = new Date();
    this.numeroDocumento = pregunta.numeroDocumento;
}

//Listar preguntas
Pregunta.findAll = function (){
    conexion.query("select * from preguntas where estado = 1", function (err, res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            result(null, res);
          }
    });
}

Pregunta.create = function (newEmp, result) {
    conexion.query("INSERT INTO Calificacion set ?", newEmp, function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };