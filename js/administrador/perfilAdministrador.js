import {nombre} from '../index.js'
import {apellido} from '../index.js'
import {rol} from '../index.js'
import {documento} from '../index.js'
import {estado} from '../index.js'
import {email} from '../index.js'
import { idUsuario } from '../index.js'
var perfil = 
'<div class="card">'+
'<div class="img">'+
'<img src="../../img/user.jpg" alt="">'+
'</div>'+
'<div class="content">'+
'<h2>'+nombre+' '+apellido+'</h2>'+
'<p>'+rol+'</p>'+
'<div class="center">'+
'<div class="box">'+
'<h6>'+email+'</h6>'+
'<p>Correo Electroico</p>'+
'</div>'+
'</div>'+
'<div class="center">'+
'<div class="box">'+
'<h6>'+documento+'</h6>'+
'<p>Documento</p>'+
'</div>'+
'<div class="box">'+
'<h6>'+estado+'</h6>'+
'<p>Estado</p>'+
'</div>'+
'</div>'+
'<button class="btn btnEditarDatos" data-bs-toggle="modal" data-bs-target="#editarDatos">Editar datos</button>'+
'</div>'+
'</div>';

document.getElementById('containerCardPerfil').innerHTML = perfil;


$(function(){

    $("#txtEdNombre").val(nombre)
    $("#txtEdApellido").val(apellido)
    $("#txtEdEmail").val(email)
    $("#txtEdDocumento").val(documento)


    $("#guardarCambios").on('click', function(){
        var nombre = $("#txtEdNombre").val();
        var apellido = $("#txtEdApellido").val();
        var password = $("#txtEdPassword").val();
        var email = $("#txtEdEmail").val();
        var documento = $("#txtEdDocumento").val();
        var imagen  = "NULL"

        var datosUsuario = {
            idUsuario: idUsuario,
            documento: documento,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            imagen: imagen,
          };
    
          fetch('https://localhost:7293/api/Usuario/EditarUsuarios',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(datosUsuario)
            }).then(response => {
              if (!response.ok) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Error al editar los datos"
                });
              }
              return response.text();
            })
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Se editaron los datos correctamente",
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.href = "../../index.html";
            })
            .catch(error => {
              console.error('Error:', error);
            });
    })
})