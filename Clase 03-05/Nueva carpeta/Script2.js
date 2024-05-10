$(document).ready(function() {
    // Obtener el nombre de usuario de la query string
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    
    // Validar el formulario
    $('#dataForm').validate({
        submitHandler: function(form) {
            // Obtener los datos del formulario
            var formData = {
                input1: $('#input1').val(),
                input2: $('#input2').val(),
                input3: $('#input3').val(),
                input4: $('#input4').val(),
                input5: $('#input5').val(),
                input6: $('#input6').val(),
                username: username // Agregar el nombre de usuario
            };

            // Guardar datos en localStorage
            localStorage.setItem('formData', JSON.stringify(formData));
            
            // Mostrar un alert con la información
            alert(`Datos guardados:\n${JSON.stringify(formData, null, 2)}`);
        }
    });
});