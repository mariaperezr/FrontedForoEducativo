$(function () {
    tabla = null;

    listarEstudiantesCursos();

    function listarEstudiantesCursos() {

        var idCursoDato = {
            idCurso: "1"
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

                // dataSet = [];
                // var botonAcciones = '';
                // data.forEach(cargarDatosProductos);
    
                // function cargarDatosProductos(item, index) {
                //     botonAcciones = '<div class="btn-group" role="group" aria-label="Basic example">'
                //     botonAcciones += '<button id= "btn_Editar" type="button" class="btn btn-primary" ID ="' + item.idUsuario + '" Documento ="' + item.documento + '" Nombre ="' + item.nombre + '" Apellido ="' + item.apellido + '" email ="' + item.email + '" estado ="' + item.estado + '" curso ="' + item.idCursoDato + '">Editar</button>';
                //     botonAcciones += '<button id="btn_Eliminar" type="button" class="btn btn-info" ID ="' + item.idUsuario + '" Documento ="' + item.documento + '" Nombre ="' + item.nombre + '" Apellido ="' + item.apellido + '" email ="' + item.email + '" estado ="' + item.estado + '" curso ="' + item.idCursoDato + '">Eliminar</button>';
                //     botonAcciones += '</div>';
    
                //     dataSet.push([item.nombre, item.codigo, item.cantidad, botonAcciones]);
    
                // }
    
                // actualizarTabla(dataSet);

                // console.log(data);
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
                    fila += '<td>' + item.idCursoDato + '</td>';
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

    function actualizarTabla(dataSet) {
        if (tabla != null) {
            $("#tablaProducto").dataTable().fnDestroy();
        }
        tabla = $("#tablaProducto").DataTable({
            data: dataSet
        })
    }

});
