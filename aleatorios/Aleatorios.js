
var max,min, max_1,min_2;
var z;
var resultado;
var cuadro_texto = document.getElementById("Texto_Lineas");
var botoncito = document.getElementById("numero aleatorios");
var resultados = document.getElementById("resultado");

botoncito.addEventListener("click", numeros_Aleatorios);

function aleatorio (max,min){
      resultado = Math.floor(Math.random()*(max-min+1)) + min;
      return resultado;
    }

function numeros_Aleatorios(){

  var numero_Lineas = (cuadro_texto.value);
  for (let l = 0; l < numero_Lineas; l++) {
    z = aleatorio(10,20);
    aa = (z + " , ");
    document.getElementById("resultado").value=aa;
    document.getElementById("numero lineas").innerHTML=aa;

  }
}
