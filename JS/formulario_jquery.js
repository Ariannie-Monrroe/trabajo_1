$(function() {
    $("#miFormulario").validate({
        rules:{
            txtNombre:{
                required: true
            },
            txtCodigo:{
                required: true
            },
            txtPrecio:{
                required: true,
                minlength:3
            },
            txtDescripcion:{
                required: true,
                minlength:5,
                maxlength:200,
            },
        },
        messages: {
            txtNombre:{
                required:"Este campo es obligatorio",
            },
            txtCodigo:{
                required:"Este campo es obligatorio",
                minlength: "El min de caracteres es de 5",
            },
            txtPrecio:{
                required:"Este campo es obligatorio",
                minlength: "El min de caracteres es de 3",
            },
            txtDescripcion:{
                required:"Este campo es obligatorio",
                maxlength:"El maximo de caracteres es de 200"
            }
        }
    })
})



