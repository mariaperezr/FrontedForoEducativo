$(function () {

    listarDocentes()
    //------------------------------------ FUNCION PARA LISTAR TODOS LOS DOCENTES -------------------------------

    function listarDocentes() {
        fetch('https://localhost:7293/api/Docente/ListarDocentes',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if (!response.ok) {
                    console.log("No se pudo traer los datos")
                }
                return response.json();
            })
            .then(data => {
                let cards = '';
                data.forEach(cargarCardsDocentes);

                function cargarCardsDocentes(item, index) {
                    cards += '<div class="card">';
                    cards += '<div class="imgBx">';
                    cards += '<img src="../../img/user.jpg" alt="">';
                    cards += '</div>';
                    cards += '<div class="content">';
                    cards += '<h6>' + item.nombre + ' ' + item.apellido + '</h6>';
                    cards += '<p>Documento: <br> ' + item.documento + '</p>';
                    cards += '<p>Correo: <br> ' + item.email + ' </p>';
                    cards += '<p>Estado: <br> ' + item.estado + '</p>';
                    cards += '<button class="btn" idDocente="' + item.idUsuario + '">Eliminar Registro</button>';
                    cards += '</div>';
                    cards += '</div>';
                    document.getElementById('containerCards').innerHTML = cards;
                }


            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    $("#buscarDocente").on("click", function () {
        var nombre = $('#txtBuscarDocente').val();
        if (nombre.trim() === '') {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "El campo esta vacio",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            var datoNombre = {
                nombre: nombre,
            };

            fetch('https://localhost:7293/api/Docente/BuscarDocente',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datoNombre)
                }).then(response => {
                    if (!response.ok) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "El docente no se encuentra segistrado"
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    let cards = '';
                    data.forEach(cargarCardsDocentesNombre);
    
                    function cargarCardsDocentesNombre(item, index) {
                        cards += '<div class="card">';
                        cards += '<div class="imgBx">';
                        cards += '<img src="../../img/user.jpg" alt="">';
                        cards += '</div>';
                        cards += '<div class="content">';
                        cards += '<h6>' + item.nombre + ' ' + item.apellido + '</h6>';
                        cards += '<p>Documento: <br> ' + item.documento + '</p>';
                        cards += '<p>Correo: <br> ' + item.email + ' </p>';
                        cards += '<p>Estado: <br> ' + item.estado + '</p>';
                        cards += '<button class="btn btn-primary" idDocente="' + item.idUsuario + '">Eliminar Registro</button>';
                        cards += '</div>';
                        cards += '</div>';
                        document.getElementById('containerCards').innerHTML = cards;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    })

    $("#cancelarBusqueda").on('click', function(){
        listarDocentes();
        $("#txtBuscarDocente").val("");
        
    })
})