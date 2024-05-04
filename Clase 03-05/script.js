$(document).ready(function(){
   $("#formLoginEquipos").validate({
    rules: {
        denominacion: {
            required: true
        },
        password: {
            required: true,
            
        }
        
    },
    messages: {
        Denominacion: {
            required: "La DENOMINACION del club es obligatorio"
            
        }
    }

   })
})