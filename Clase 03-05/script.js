$(document).ready(function(){
   $("#formLoginEquipos").validate({
    rules: {
        Denominacion: {
            required: true
        },
        Password: {
            required: true,
            
        }
        
    },
    messages: {
        nombre: {
            required: "La DENOMINACION del club es obligatorio"
            
        }
    }

   })
})