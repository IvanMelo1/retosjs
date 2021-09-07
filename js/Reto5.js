var palabra = "";

function tomarpalabra(){
palabra = document.getElementById('palindromo').value;

let array = palabra.split("");
let consulta = array.reverse();

if (palabra == consulta.join("")){
    var resultado = "La palabra si es un palíndromo";
}else {
    var resultado = "La palabra no es un palíndromo";
}
document.getElementById("salida5").innerHTML = resultado;
console.log(resultado);
}









   





