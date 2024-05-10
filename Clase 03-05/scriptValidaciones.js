/*$(document).ready(function(){
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
});*/
$("#formLoginEquipos").validate({
    rules:{
        denominacion:{
        required:true,
        minlenght:1,
        maxlength: 70
    },
    password:{
      required:true,
      minlength:8,
      maxlength:16
    }
    
    },
    messages:{
        denominacion:{
            required:"La DENOMINACION del club es obligatorio"
        },
        password: {
            required: "Necesita una contraseña",
            minlenght: "la contraseña no puede ser menor a 8 caracteres"
           }
    }
})

$("#formLoginEquipos").submit((e) => {
  e.preventDefault(); // Prevenir el envío del formulario

  if ($("#formLoginEquipos").valid()) {
    const denominacion = $("#denominacion").val();
    const password = $("#password").val();

    // Redireccionar a la nueva página con valores pasados por GET
    window.location.href = 'https://./SegundaPagina.html?denominacion=${encodeURIComponent(denominacion)}&password=${encodeURIComponent(password)}';
  }
})



