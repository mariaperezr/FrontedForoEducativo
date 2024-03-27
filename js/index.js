$(document).ready(function () {

  $("#IniciarSesion").on("click", function () {
    var correo = $('#correo').val();
    var clave = $('#password').val();
    if (correo.trim() === '' || clave.trim() === '') {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Los campos estan vacios",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      var datos = {
        email: correo,
        password: clave
      };

      fetch('https://localhost:7293/api/Inicio/IniciarSesion',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }).then(response => {
        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Correo y Contraseña Incorrectos"
          });
        }
        return response.json();
      })
      .then(data => {
        // Manejar la respuesta del backend si es necesario
        localStorage.setItem('rol', data.rol);
        localStorage.setItem('usuario', data.nombre);
        localStorage.setItem('apellido', data.apellido);
        if (data.rol == "Docente") {
          window.location.href = "vista/docente/docenteHome.html";
        } else if (data.rol == "Estudiante") {
          window.location.href = "vista/estudiante/estudianteHome.html";
        } else if (data.rol == "Administrador") {
          window.location.href = "vista/administrador/administradorHome.html";
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  })
})

var rol = localStorage.getItem('rol');
var usuario = localStorage.getItem('usuario');
var apellido = localStorage.getItem('apellido');
export{rol};
export{usuario};
export{apellido};
