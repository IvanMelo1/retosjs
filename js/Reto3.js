function calcularprecio(){
    const precioh = 450;
    var preciod = precioh*0.5;
    var cantidad1 = Number(document.getElementById('barrandia').value);
    var cantidad2 = Number(document.getElementById('barradia').value);
    var totaldes = cantidad1*preciod;
    var totalsindes = cantidad2*precioh;
    var totalpagar = totaldes + totalsindes;

    document.getElementById("salida3").innerHTML = "El precio habitual de las barras dulces es de $" + precioh + " c/u, cuando una barra de dulce no es del dia, tiene un costo de $" + preciod +
    " c/u, es decir 50% del valor habitual";
    document.getElementById("salida3-1").innerHTML = "el costo total es de: $" + totalpagar + " y te ahorraste: $" + totaldes;
    
}