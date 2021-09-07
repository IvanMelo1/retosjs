var muestra = " ";

function calcularmedia(){
    muestra = document.getElementById('muestra-no').value;    
    let array = muestra.split("");


    for(let i = 0; i<array.length; i = i + 2){
        var suma = 0;
        var numero = Number(array[i]);
        suma = suma + numero;
        console.log(array[i]);

    }

    console.log(suma);
    
}

