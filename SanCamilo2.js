canvas = document.getElementById("VillaSancamilo");
papel = canvas.getContext("2d");
var min,max;
var z;
var a;
var resultado;


var fondo = {
  url:"tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var cerdo = {
  url:"cerdo.png",
  cargaOk: false
}

var pollo = {
  url: "pollo.png",
  cargaOk: false
}

var lobo = {
  url:"lobo.png",
  cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargar_Fondo);

function cargar_Fondo () {
  fondo.cargaOk = true;
  dibujar ();
}

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargar_Vaca);

function cargar_Vaca () {
  vaca.cargaOk = true;
  dibujar ();
}

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargar_cerdo);

function cargar_cerdo() {
  cerdo.cargaOk = true;
  dibujar ();
}

pollo.imagen = new Image ();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargar_pollo);

function cargar_pollo () {
  pollo.cargaOk = true;
  dibujar ();
}

lobo.imagen = new Image ();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load",cargar_lobo);

function cargar_lobo () {
  lobo.cargaOk = true;
  dibujar ();
}

function dibujar () {
if (fondo.cargaOk == true ) {
  papel.drawImage(fondo.imagen,0,0);
}

for (l = 0; l < aleatorio(1,15) ; l++) {
if (vaca.cargaOk == true ) {
  zz = aleatorio(80,420);
  ww = aleatorio(80,420);
  papel.drawImage(vaca.imagen,zz,ww);

}
}
for (i = 0; i < aleatorio(1,5); i++) {
  if (cerdo.cargaOk == true) {
    cc = aleatorio(80,420);
    dd = aleatorio(80,420);
    papel.drawImage(cerdo.imagen,cc,dd);
  }
}

for ( i = 0; i < aleatorio(1,5); i++) {
  if(pollo.cargaOk == true) {
    dd = aleatorio(80,420);
    ee = aleatorio(80,420);
    papel.drawImage(pollo.imagen,dd,ee);
  }
}
for( n = 0; n < aleatorio(1,5); n++) {
  if(lobo.cargaOk == true){
    ff = aleatorio(80,420);
    gg = aleatorio(80,420);
    papel.drawImage(lobo.imagen,ff,gg);
}
}
}

function aleatorio (max,min) {
  resultado = Math.floor(Math.random()*(max-min+1)) + min;
  return resultado;
}
