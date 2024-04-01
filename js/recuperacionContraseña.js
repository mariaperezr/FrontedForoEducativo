$(function () {

    $("#buscarContraseña").on('click', function () {
        var emailInput = $("#emailRecuperarPass").val();
        var DatoEmail = {
            email: emailInput
        };
        fetch('https://localhost:7293/api/Inicio/EnviarContraseña',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DatoEmail)
        }).then(response => {
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Correo no coincide"
                });

                $("#emailRecuperarPass").val("");
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Correo enviado correctamente",
                showConfirmButton: false,
                timer: 1500
            });
            $("#emailRecuperarPass").val("");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
})