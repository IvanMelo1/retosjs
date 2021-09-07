let lista = "";
var suma = 0;

function agregar(){
    var numero = Number(prompt('ingrese su número'));
    lista = lista + " - " + numero;
    console.log(typeof(numero));
    document.getElementById("salida4").innerHTML =  lista + " -"; 
    suma += numero;
    console.log(suma);
    document.getElementById('salida4-1').innerHTML = "La suma de sus números es: " + suma;
}

