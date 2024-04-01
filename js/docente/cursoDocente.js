import { idUsuario} from "../index.js";

var idUsuarioDato = idUsuario
$(function () {

    listarCursos()

    // ------------------------------------------- LISTAR CURSOS ----------------------------------------------

    function listarCursos() {

        var DatoidUsuario = {
            idUsuario: idUsuarioDato
          };
        fetch('https://localhost:7293/api/Curso/ListarCursosPorDocente',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(DatoidUsuario)
            }).then(response => {
                if (!response.ok) {
                    console.log("No se pudo traer los datos")
                }
                return response.json();
            })
            .then(data => {
                let cardsCurso = '';
                data.forEach(cargarCardsDocentes);

                function cargarCardsDocentes(item, index) {
                    cardsCurso += '<div class="box">';
                    cardsCurso += '<h3>'+item.numero+' '+item.nomenclatura+'</h3>';
                    cardsCurso += '<input type="button" idCurso="'+item.idCurso+'" id="verEstudiantes" value="Ver Estudiantes" class="btn"/>';
                    cardsCurso += '</div>';
                    document.getElementById('containerCursosAdmin').innerHTML = cardsCurso;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    $("#containerCursosAdmin").on("click", "#verEstudiantes", function() {
        var idCurso = $(this).attr("idCurso")
        localStorage.setItem('idCurso', idCurso); 
        window.location.href = "../../vista/cursos/listarDocenteEstudiante.html";
    })

})

var idCurso = localStorage.getItem('idCurso');
export{idCurso};