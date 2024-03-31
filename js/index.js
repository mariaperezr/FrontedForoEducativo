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

            $("#correo").val("");
            $("#password").val("");
          }
          return response.json();
        })
        .then(data => {
          
          // Manejar la respuesta del backend si es necesario
          localStorage.setItem('idUsuario', data.idUsuario);
          localStorage.setItem('documento', data.documento);
          localStorage.setItem('nombre', data.nombre);
          localStorage.setItem('apellido', data.apellido);
          localStorage.setItem('email', data.email);
          localStorage.setItem('estado', data.estado);
          localStorage.setItem('imagen', data.imagen);
          localStorage.setItem('rol', data.rol);
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

var idUsuario = localStorage.getItem('idUsuario');
var documento = localStorage.getItem('documento');
var nombre = localStorage.getItem('nombre');
var apellido = localStorage.getItem('apellido');
var email = localStorage.getItem('email');
var estado = localStorage.getItem('estado');
var imagen = localStorage.getItem('imagen');
var rol = localStorage.getItem('rol');

export { idUsuario };
export { documento };
export { nombre };
export { apellido };
export { email };
export { estado };
export { imagen };
export { rol };
