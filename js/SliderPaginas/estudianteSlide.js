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
    '<li >' +
    '<a href="../../vista/foros/forosListarEstudiante.html">' +
    '<i class="icon ph-bold ph-file-text"></i>' +
    '<span class="text">Foros</span>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '<div class="menu_final">' +
    '<p class="title">Account</p>' +
    '<ul>' +
    '<li class="hols">' +
    '<a href="../../vista/estudiante/perfilEstudiante.html">' +
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