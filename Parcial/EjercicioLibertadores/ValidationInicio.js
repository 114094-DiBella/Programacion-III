$(document).ready(function(){
    $("#frmInicioCopa").validate({
          rules: {
              usuario: {
                  required: true,
                  minlength: 1
              },
              password: {
                  required: true,
                  minlength:8
              }
          },
          messages: {
              usuario:{
                  required: "Debe ingresar un usuario valido",
                  minlength: "El usuario no debe ser menor a 2 caracteres"
              },
              password:{
                  required: "Debe ingresar una clave",
                  minlength: "la clave no puede ser menor a 8 caracteres"
              }
          }
      })
  
      $("#frmInicioCopa").submit(function(e){
          e.preventDefault();
          if($(this).valid()){
              const url = "http://127.0.0.1:5500/EjercicioLibertadores/Promedios.html";
              window.location.href = url;
          }
      })
  });