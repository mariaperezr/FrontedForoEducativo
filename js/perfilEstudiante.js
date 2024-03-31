import {nombre} from './index.js'
import {apellido} from './index.js'
import {rol} from './index.js'
import {documento} from './index.js'
import {estado} from './index.js'
import {email} from './index.js'
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
'<button class="btn">Editar datos</button>'+
'</div>'+
'</div>';

document.getElementById('containerCardPerfil').innerHTML = perfil;
