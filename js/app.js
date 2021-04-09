
//doc ---> apunta al inicio del documento HTML <html>
var doc = $(document);
//ready ---> cuando se HA CARGADO EL HTML COMPLETO:
// - recursos del HEAD: css, fuentes, script js; fontawesonne...
// - del BODY: TODO EL HTML + imagenes...,
// SE EJECUTARÁ LA FUNCION iniciar
doc.ready(iniciar);

function iniciar() {
  console.log('Hola mundo, bienvenidos a JQUERY...');
  var xsoluciones = $("header nav a#soluciones");
  var xubicacion = $("header nav a#ubicacion");
  var xtrabajos =$("header nav a#trabajos");
  var xservicios =$("header nav a#servicios");
  var xcontactos =$("header nav a#contactos");
  var xmodelos =$("header nav a#modelos");
  var xcocheselectricos =$("header nav a#cocheselectricos");
  var xcocheshibridos =$("header nav a#cocheshibridos");
  var xcarga =$("header nav a#carga");
  var xtallerbmw=$("header nav a#tallerbmw");
  var xservicioex =$("header nav a#servicioex")
  var xacessorios =$("header nav a#acessorios")
 // var xhist = $("header nav a#historia");
 xsoluciones.click(cargarsoluciones);
  xtrabajos.click(cargartrabajos);
  xcontactos.click(cargarcontactos);
  xservicios.click(cargarservicios);
  xmodelos.click(cargarmodelos);
  xcocheselectricos.click(cargarcocheselectricos);
  xcocheshibridos.click(cargarcocheshibridos);
  xcarga.click(cargarcarga);
  xtallerbmw.click(cargartallerbmw);
  xservicioex.click(cargarservicioex);
  xacessorios.click(cargaracessorios);
  xubicacion.click(cargarubicacion)
  $("main").load("html/home.html")
  var xhome =$("header figure#logo")
  xhome.click(cargarhome);
//$("main").on('click', 'div#modelos div.coche', mostrarCoche);
//$("main").on('mouseout', 'div#modelos div.coche', ocultarCoche);

  cargarhome();
}
function mostrarCoche(){
  console.log('sobre');
  $(this).find("div.config").fadeIn(500);
}
function ocultarCoche(){
  console.log('sobre');
  $(this).find("div.config").fadeOut(500);
}

function cargarhome(){
$("main").load("html/home.html", function(){showSlides(3);
  });



$("head").children().last().remove();
$("head").append("<link rel='stylesheet' href='css/home.css'>")
} 


function cargartrabajos(){
  console.log('pinchadon servicios');
  //cargar el fichero/html/servicios.html en la <main>
  $("main").load("html/trabajos.html");
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' href='css/trabajos.css'>")
}
function cargarcontactos(){
  console.log('pinchadon contactos');
  //cargar el fichero/html/contactos.html en la <main>
  $("main").load("html/contactos.html");
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' href='css/contactos.css'>")
}
function cargarservicios(){
  console.log('pinchadon servicios');
  //cargar el fichero/html/servicios.html en la <main>
  $("main").load("html/servicios.html");
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/servicios.css'>")
}
function cargarmodelos(){
  console.log("pinchadon modelos")
  //cargar el fichero/html/modelos.html en la <main>
  $("main").load("html/modelos.html");
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/modelos.css'>")
}
function cargarcocheselectricos(){
  console.log ("pinchadon cocheselectricos")
  $("main").load("html/cocheselectricos.html ", function(){showSlides(3);
  });
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/cocheselectricos.css'>")
}
function cargarcocheshibridos(){
  console.log ("pinchadon cocheshibridos")
  $("main").load("html/cocheshibridos.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/cocheshibridos.css'>")
}
function cargarcarga(){
  console.log ("pinchadon carga")
  $("main").load("html/carga.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/carga.css'>")
}
function cargartallerbmw(){
  console.log ("pinchadon tallerbmw")
  $("main").load("html/tallerbmw.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/tallerbmw.css'>")
}
function cargarservicioex(){
  console.log ("pinchadon servicioex")
  $("main").load("html/servicioex.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/servicioex.css'>")
}
function cargaracessorios(){
  console.log ("pinchadon acessorios")
  $("main").load("html/acessorios.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/acessorios.css'>")
}

function cargarubicacion(){
  console.log ("pinchadon ubicacion")
  $("main").load("html/ubicacion.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/ubicacion.css'>")
}
function cargarsoluciones(){
  console.log ("pinchadon soluciones")
  $("main").load("html/soluciones.html")
  $("head").children().last().remove();
  $("head").append("<link rel='stylesheet' type='text/css' href='css/soluciones.css'>")
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}