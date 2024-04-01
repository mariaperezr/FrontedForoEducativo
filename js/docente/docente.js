import { idUsuario } from '../index.js'

var idUsuarioVariable = idUsuario;
$(function () {

    listarForosDocente();
    // ----------------------------------------------------- listar foros de docentes -----------------------

    function listarForosDocente() {

        var idUsuarioDato = {
            idUsuario: idUsuarioVariable
        };
        fetch('https://localhost:7293/api/Foro/ListarForosPorDocente',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(idUsuarioDato)
            }).then(response => {
                if (!response.ok) {
                    console.log("No se pudo traer los datos")
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                let foroLista = '';
                data.forEach(cargarForosDocente);

                function cargarForosDocente(item, index) {
                    foroLista += '<div class="box-container">';
                    foroLista += '<div class="box">';
                    foroLista += '<h2>'+item.nombreForo+'</h2>';
                    foroLista += '<p>'+item.descripcion+'</p>';
                    foroLista += '<img src="../../img/logoColegio.png" alt="">';
                    foroLista += '<p>Fecha Inicio: '+item.fechaInicio+'</p>';
                    foroLista += '<p>Fecha Fin: '+item.fechaFin+'</p>';
                    foroLista += '<div class="btn-group">';
                    foroLista += '<a href="#" idForo="'+item.idForo+'" class="btn btnForo">Ver Respuestas</a>';
                    foroLista += '<button idForo="'+item.idForo+'" nombreForo="'+item.nombreForo+'" descripcion="'+item.descripcion+'" imagenForo="'+item.imagenForo+'" fechaInicio="'+item.fechaInicio+'" fechaFin="'+item.fechaFin+'" idCurso="'+item.idCurso+'" numero="'+item.numero+'" nomenclatura="'+item.nomenclatura+'" type="button" class="btn btnForo">Editar</button>';
                    foroLista += '<button idForo="'+item.idForo+'" type="button" class="btn btnForo">Eliminar</button>';
                    foroLista += ' </div>';
                    foroLista += '</div>';
                    foroLista += '</div>';
                    
                    document.getElementById('containerForosDocente').innerHTML = foroLista;
                }


            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

})