canvas = document.getElementById("VillaSancamilo");
papel = canvas.getContext("2d");
var min,max;
var z;
var a;
var resultado;
var mapa = "tile.png";
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);
var velocidad = 10;
var x_cerdo = 100;
var y_cerdo = 300;
var x_vaca= 400;
var y_vaca = 400;

var teclas = {
  UP:38,
  LEFT:37,
  DOWN:40,
  RIGHT:39
};

var teclas_vaca = {
  UP:87,
  LEFT:65,
  DOWN:83,
  RIGHT:68
};

var porcino = "cerdo.png";
var cerdo = new Image ();
cerdo.src = porcino;

var vaquita = "vaca.png";
var vaca = new Image ();
vaca.src = vaquita;

addEventListener("load",mover_imagen_vaca);
  function mover_imagen_vaca () {
  addEventListener("keydown",cargar_vaca);
  }
  function cargar_vaca (evento){
    switch (evento.keyCode) {
      case teclas_vaca.RIGHT:
      papel.clearRect (0,0,500,500);
      papel.drawImage(fondo,0,0);
      papel.drawImage(lobo, 200,200);
      papel.drawImage(pollo,100,80);
      papel.drawImage(cerdo, x_cerdo,y_cerdo);
      papel.drawImage(vaca,x_vaca + velocidad,y_vaca);
      x_vaca = x_vaca + velocidad;

      break;
      case teclas_vaca.DOWN:
      papel.clearRect (0,0,500,500);
      papel.drawImage(fondo,0,0);
      papel.drawImage(lobo, 200,200);
      papel.drawImage(pollo,100,80);
      papel.drawImage(cerdo, x_cerdo,y_cerdo);
      papel.drawImage(vaca,x_vaca,y_vaca + velocidad);
      y_vaca = y_vaca + velocidad;

      break;
      case teclas_vaca.LEFT:
      papel.clearRect (0,0,500,500);
      papel.drawImage(fondo,0,0);
      papel.drawImage(lobo, 200,200);
      papel.drawImage(pollo,100,80);
      papel.drawImage(cerdo, x_cerdo,y_cerdo);
      papel.drawImage(vaca,x_vaca - velocidad,y_vaca);
      x_vaca = x_vaca- velocidad;
      break;
      case teclas_vaca.UP:
      papel.clearRect (0,0,500,500);
      papel.drawImage(fondo,0,0);
      papel.drawImage(lobo, 200,200);
      papel.drawImage(pollo,100,80);
      papel.drawImage(cerdo, x_cerdo,y_cerdo);
      papel.drawImage(vaca,x_vaca,y_vaca-velocidad);
      y_vaca = y_vaca - velocidad;
      break;
  }
  }


  addEventListener("load", mover_imagen_cerdo);
  function mover_imagen_cerdo (){
addEventListener("keydown",cargar_cerdo);
}

vaca.addEventListener("load", dibujar_vaca);
function dibujar_vaca () {
  papel.drawImage(vaca, x_vaca,y_vaca);
}

cerdo.addEventListener("load", dibujar_cerdo);
function dibujar_cerdo () {
  papel.drawImage(cerdo, x_cerdo,y_cerdo);
}



function cargar_cerdo (evento){
  switch (evento.keyCode) {
    case teclas.RIGHT:
    papel.clearRect (0,0,500,500);
    papel.drawImage(fondo,0,0);
    papel.drawImage(lobo, 200,200);
    papel.drawImage(pollo,100,80);
    papel.drawImage(vaca, x_vaca,y_vaca);
    papel.drawImage(cerdo,x_cerdo + velocidad,y_cerdo);
    x_cerdo = x_cerdo + velocidad;


    break;
    case teclas.DOWN:
    papel.clearRect (0,0,500,500);
    papel.drawImage(fondo,0,0);
    papel.drawImage(lobo, 200,200);
    papel.drawImage(pollo,100,80);
    papel.drawImage(vaca, x_vaca,y_vaca);
    papel.drawImage(cerdo,x_cerdo,y_cerdo + velocidad);
    y_cerdo = y_cerdo + velocidad;

    break;
    case teclas.LEFT:
    papel.clearRect (0,0,500,500);
    papel.drawImage(fondo,0,0);
    papel.drawImage(lobo, 200,200);
    papel.drawImage(pollo,100,80);
    papel.drawImage(vaca, x_vaca,y_vaca);
    papel.drawImage(cerdo,x_cerdo - velocidad,y_cerdo);
    x_cerdo = x_cerdo - velocidad;

    break;
    case teclas.UP:
    papel.clearRect (0,0,500,500);
    papel.drawImage(fondo,0,0);
    papel.drawImage(lobo, 200,200);
    papel.drawImage(pollo,100,80);
    papel.drawImage(vaca, x_vaca,y_vaca);
    papel.drawImage(cerdo,x_cerdo,y_cerdo - velocidad);
    y_cerdo = y_cerdo - velocidad;

    break;
}
}

function dibujar () {
papel.drawImage(fondo,0,0);
}


var pollito = "pollo.png";
var pollo = new Image ();
pollo.src = pollito;

pollo.addEventListener("load", dibujar_pollo);

function dibujar_pollo () {
  papel.drawImage(pollo,100,80);
}

var lobito = "lobo.png";
var lobo = new Image ();
lobo.src = lobito;

lobo.addEventListener("load", dibujar_lobo);

function dibujar_lobo () {
  papel.drawImage(lobo, 200,200);
}
