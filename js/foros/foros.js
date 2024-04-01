import { idUsuario } from '../index.js'; 
const contenedorForos = document.getElementById('containerJe');

if (idUsuario && Number.isInteger(parseInt(idUsuario))) { 

    var idEstudianteDato = {
        idUsuario: idUsuario
    };

  const apiUrl = `https://localhost:7293/api/Foro/ListarForosPorEstudiante`;
  
  fetch(apiUrl, {
    method: 'POST',
    
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(idEstudianteDato ),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    if (data && data.length > 0) {
      data.forEach(foro => {
        const divForo = document.createElement('div');
        divForo.classList.add('foro');
        
        const nombreForo = document.createElement('h1');
        nombreForo.textContent = foro.nombreForo;
        divForo.appendChild(nombreForo);
        
        const descripcionForo = document.createElement('p');
        descripcionForo.textContent = foro.descripcion;
        divForo.appendChild(descripcionForo);

        const fechaInicio = document.createElement('h5');
        fechaInicio.textContent = foro.fechaInicio;
        divForo.appendChild(fechaInicio);

        const fechaFin = document.createElement('h5');
        fechaFin.textContent = foro.fechaFin;
        divForo.appendChild(fechaFin);
        
        contenedorForos.appendChild(divForo);
      });
    } else {
      contenedorForos.textContent = 'No se encontraron foros.';
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
    contenedorForos.textContent = 'Error al cargar los datos.';
  });
} else {
  console.error('El idUsuario no es válido:', idUsuario);
}
