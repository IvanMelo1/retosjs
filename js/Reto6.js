var muestra = " ";
var sumaar = 0;

function calcularmedia(){
    suma = 0;
    sumaar = 0;
    muestra = document.getElementById('muestra-no').value;
    muestra=muestra.trim();
    let array = muestra.split(",");

    console.log(array);

    for(let i = 0; i<array.length; i++){
        suma += Number(array[i]);
    }    
    
    var media = (suma/array.length);

    for(let i = 0; i<array.length; i++){
        sumaar += ((Number(array[i])-media)**2);
    }

   let ds = Math.sqrt(sumaar/(array.length-1));
   let desviacións = ds.toFixed(2);
    document.getElementById("salida6").innerHTML = "la media de su muestra de números es: " + media + " y su desviación estandar es " + ds;
    console.log(suma);
    console.log(sumaar);
    }

