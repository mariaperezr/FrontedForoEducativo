import {idCurso} from '../administrador/cursosAdministrador.js'

$(function () {
    listarEstudiantesCursos();

    function listarEstudiantesCursos() {

        var idCursoDato = {
            idCurso: idCurso
        };
        fetch('https://localhost:7293/api/Estudiante/ListarEstudiantesPorCurso', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(idCursoDato)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo traer los datos');
                }
                return response.json();
            })
            .then(data => {
                let foroLista = '';
                if (Array.isArray(data)) {
                    data.forEach(cargarForosDocente);
                } else {
                    throw new Error('La respuesta no es un array');
                }

                function cargarForosDocente(item, index){
                    let fila = '<main>';
                    fila += '<section>';
                    fila += '<section>';
                    fila += '<tr>'; // Agregar una fila de tabla para cada conjunto de datos
                    fila += '<td>' + (index + 1) + '</td>';
                    fila += '<td>' + item.documento + '</td>';
                    fila += '<td>' + item.nombre + '</td>';
                    fila += '<td>' + item.apellido + '</td>';
                    fila += '<td>' + item.email + '</td>';
                    fila += '<td>' + item.estado + '</td>';
                    fila += '</tr>'; // Cerrar la fila de la tabla
                    fila += '</section>';
                    fila += '</main>';
                
                    foroLista += fila;
                }
                
                document.getElementById('estudianteCurso').innerHTML = '<table>' + foroLista + '</table>'; // Agregar una tabla alrededor de las filas
                

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    $("#volverCursosAdmin").on('click', function(){
        window.location.href = "../../vista/administrador/cursosAdministrador.html";
    })

});

