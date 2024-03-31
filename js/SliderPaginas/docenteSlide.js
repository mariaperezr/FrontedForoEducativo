import {rol} from '../index.js'
import {nombre} from '../index.js'
import {apellido} from '../index.js'
var slide =
    '<div class="sidebar active">' +
    '<div class="menu-btn">' +
    '<i class="ph-bold ph-caret-left"></i>' +
    '</div>' +
    '<div class="head">' +
    '<div class="user-img">' +
    '<img src="../../img/user.jpg" alt="">' +
    '</div>' +
    '<div class="user-details">' +
    '<p class="title">'+rol+'</p>' +
    '<p class="name">'+nombre+' '+apellido+'</p>' +
    '</div>' +
    '</div>' +
    '<div class="nav">' +
    '<div class="menu">' +
    '<p class="title">Principal</p>' +
    '<ul>' +
    '<li>' +
    '<a href="#">' +
    '<i class="icon ph-bold ph-house-simple"></i>' +
    '<span class="text">Inicio</span>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="#">' +
    '<i class="icon ph-bold ph-user"></i>' +
    '<span class="text">Estudiantes</span>' +
    '<i class="arrow ph-bold ph-caret-down"></i>' +
    '</a>' +
    '<ul class="sub-menu">' +
    '<li>' +
    '<a href="#">' +
    '<span class="text">Users</span>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="#">' +
    '<span class="text">Suscribirse</span>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</li>' +
    '<li >' +
    '<a href="#">' +
    '<i class="icon ph-bold ph-file-text"></i>' +
    '<span class="text">Foros</span>' +
    '</a>' +
    '</li>' +
    '<li >' +
    '<a href="#">' +
    '<i class="icon ph-bold ph-file-text"></i>' +
    '<span class="text">Cursos</span>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '<div class="menu_final">' +
    '<p class="title">Account</p>' +
    '<ul>' +
    '<li class="hols">' +
    '<a href="../../vista/docente/perfilDocente.html">' +
    '<i class="icon ph-bold ph-gear"></i>' +
    '<span class="text">Perfil</span>' +
    '</a>' +
    '</li>' +
    '<li class="hols">' +
    '<a href="#">' +
    '<i class="icon ph-bold ph-info"></i>' +
    '<span id="salir" class="text">Cerrar Sesion</span>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>' ;
document.getElementById('containerSlide').innerHTML = slide;
$(".menu > ul > li").click(function (e) {
    //Remover la seleccion 
    $(this).siblings().removeClass("active")

    // agregar evento activo 
    $(this).toggleClass("active");

    // Abre el menu seleccionado
    $(this).find("ul").slideToggle();

    //cerrar el menu que no esta seleccionado
    $(this).siblings().find("ul").slideUp();

    //eliminar actividad del sub menu
    $(this).siblings().find("ul").find("li").removeClass("active");
})

$(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
})

$("#salir").click(function () {
    Swal.fire({
        title: "¿Seguro que quieres salir?",
        showCancelButton: true,
        confirmButtonText: "Cerrar Sesion"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "../../index.html";
        }
      });
})