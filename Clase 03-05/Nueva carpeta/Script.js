$(document).ready(function(){
    $("#frmLogin").validate({
        rules: {
            nombre: {
                required: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            nombre: {
                required: "Ingresa un nombre"
            },
            password: {
                required: "Ingresa una clave",
                minlength: "Debe ser mayor a 8 caracteres"
            }
        }
    }
),
    $("#frmLogin").submit(function(e){
        e.preventDefault();
        if($(this).valid()){
            alert("Perfecto!")
            const url = "http://127.0.0.1:5500/Pagina2.html?username=${encodeURIComponent(username)}";
            window.location.href = url;
        }
        else{
            alert("Error, intente nuevamente")
        }
    })
})