$(document).ready(function () {
    $("#formReserva").validate({
        rules: {
            nombre: {
                required: true,
                minlength:1,
                maxlength: 25
            },
            email: {
                required: true,
                email: true
            },
            cantHuespedes: {
                required: true,
                min:1,
                max:3
            },
            tipoHabitacion: {
                required: true
            },
            basesycond: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "El nombre y apellido es obligatorio",
                maxlength: "El nombre es demasiado largo"
            },
            email: {
                required: "Ingrese su email",
                email: "Ingrese un email valido"
            },
            cantHuespedes: {
                required: "Ingrese la cantidad de huespedes",
                min: "Debe seleccionar por lo menos un huesped",
                max: "No se permiten mas de 3 huespedes"
            },
            tipoHabitacion: {
                required: "Seleccione el tipo de habitación"
            },
            basesycond: {
                required: "Debe aceptar las bases y condiciones"
            }
        },
        errorClass: "text-danger mt-2"
    })
})