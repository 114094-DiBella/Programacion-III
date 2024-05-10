$(document).ready(function () {
    // Método de validación personalizada para el correo electrónico
    $.validator.addMethod("checkEmail", function (value, element) {
        return value === "tup2022@tup.com.ar";
    }, "El correo es incorrecto! Prueba con: tup2022@tup.com.ar");

    // Método de validación personalizada para la contraseña
    $.validator.addMethod("checkPassword", function (value, element) {
        return value === "123456";
    }, "La clave es incorrecta! Prueba con: 123456");

    // Configuración de validaciones para el formulario
    $("#frmLogin").validate({
        rules: {
            inputEmail: {
                required: true,
                email: true,
                checkEmail: true // Validación personalizada para el correo electrónico
            },
            inputPassword: {
                required: true,
                checkPassword: true // Validación personalizada para la contraseña
            }
        },
        messages: {
            inputEmail: {
                required: "Debe ingresar un correo.",
                email: "El correo es incorrecto! Prueba con: tup2022@tup.com.ar."
            },
            inputPassword: {
                required: "Debe ingresar una clave"
            }
        }
    });

    // Manejando el evento de envío del formulario
    $("#frmLogin").submit(function (e) {
        e.preventDefault();

        // Verificar si el formulario es válido
        if ($(this).valid()) {
            const url = "http://127.0.0.1:5500/ResolucionAgus/altaPiloto.html";
            window.location.href = url;
        }
    });
   
});