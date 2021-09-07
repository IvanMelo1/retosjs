function calcularimc(){
    var peso = Number(document.getElementById('Peso').value);
    var Altura = Number(document.getElementById('Altura').value);
    var m2 = Altura**2;
    var imc = peso/m2;
    var condecimal = imc.toFixed(2);
    document.getElementById("salida2").innerHTML = "Tu índice de masa corporal es " + condecimal;
    
}