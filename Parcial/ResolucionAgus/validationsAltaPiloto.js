$(document).ready(function() {
    // Configuración de validaciones para el formulario de alta de piloto
    $("#frmAltaPiloto").validate({
        rules: {
            inputNombre: {
                required: true,
                minlength: 2 // Puedes ajustar el valor según tus necesidades
            },
            inputApellido: {
                required: true,
                minlength: 2 // Puedes ajustar el valor según tus necesidades
            },
            inputCantHsVuelo: {
                required: true,
                min: 1
            },
            sltNacionalidad: {
                required: true
            },
            sltSexo: {
                required: true
            }
        },
        messages: {
            inputNombre: {
                required: "Debe ingresar un nombre",
                minlength: "El nombre debe tener al menos 2 caracteres"
            },
            inputApellido: {
                required: "Debe ingresar un apellido",
                minlength: "El apellido debe tener al menos 2 caracteres"
            },
            inputCantHsVuelo: {
                required: "Debe ingresar la cantidad de horas de vuelo",
                min: "La cantidad de horas de vuelo debe ser al menos 1"
            },
            sltNacionalidad: {
                required: "Debe seleccionar su nacionalidad"
            },
            sltSexo: {
                required: "Debe seleccionar su sexo"
            }
        }
    });

    // Manejando el evento de envío del formulario
    $("#frmAltaPiloto").submit(function (e) {
        e.preventDefault();

        // Verificar si el formulario es válido
        if ($(this).valid()) {
            alert("Piloto cargado con éxito");
            // Aquí puedes agregar cualquier lógica adicional para manejar el envío exitoso del formulario
        }
    });
});
