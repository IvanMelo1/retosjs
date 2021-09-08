const frutas = {
    guanabana: 2000,
    fresa: 1500,
    cereza: 2000,
    kiwi: 500,
    manzana: 300,
    pera: 250,
    piña: 3000,
    banano: 1000,
    maracuya: 500,
    sandia: 500,
    papaya: 1000,
    mandarina: 500,
    naranja: 600,
    uvas: 800,
    mora: 750,
    lulo: 850,
    mango: 600,
    carambolo: 500
};

function calcularfruta(){
    let fruta = (document.getElementById("fruta").value).toLowerCase();
    let kilos = Number(document.getElementById("kilos").value);
    let preciokg = frutas[fruta];
    console.log(fruta);
    console.log(kilos);
    console.log(preciokg);

if(preciokg != null){
    var total = preciokg*kilos;
    var respuesta = "El precio total de " + kilos + " kg de " + fruta + " es de $" + total;
}else{
    var respuesta = "La fruta '" + fruta + "' no se encontró, intentalo nuevamente."
}

document.getElementById("salida7").innerHTML = respuesta;
}