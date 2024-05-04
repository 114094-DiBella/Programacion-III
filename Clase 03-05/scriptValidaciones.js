$(document).ready(function(){
  $("#formLoginEquipos").validate({
   rules: {
       denominacion: {
           required: true,
           minlenght:1,
           maxlength: 70
       },
       password: {
           required: true,
           minlenght: 8           
       }
       
   },
   messages: {
       denominacion: {
           required: "La DENOMINACION del club es obligatorio",
           minlenght: "el nombre no puede ser menor a 1 caracter",
           maxlength: "la denominacion del club no puede ser superior a 70 caracteres"
           
       },
       password: {
        required: "Necesita una contraseña",
        minlenght: "la contraseña no puede ser menor a 8 caracteres"
       }
   }

  });
});
if(){
  $(document).ready(function(){
    $("#btnIniciarSesion").click(function(){
      $(location).attr('href','./SegundaPagina.html')
    })  
  })
  
}
