var muestra = " ";
var sumaar = 0;

function calcularmedia(){
    suma = 0;
    sumaar = 0;
    muestra = document.getElementById('muestra-no').value;
    for(let i = 0; i<muestra.length; i++){
        muestra = muestra.replace("," , "");
    }
    
    let array = muestra.split("");

    console.log(array);

    for(let i = 0; i<array.length; i++){
        suma += Number(array[i]);
    }    
    
    var media = (suma/array.length).toFixed(2);

    for(let i = 0; i<array.length; i++){
        sumaar += (Number(array[i])-media)**2;
    }

   var sm = 
    document.getElementById("salida6").innerHTML = "la media de su muestra de números es: " + media + " y su desviación estandar es "
    console.log(sumaar)
}

