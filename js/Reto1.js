function calcularsalario(){
    var horas = Number(document.getElementById('hrtra').value);
    var pago = Number(document.getElementById('costohr').value);
    document.getElementById("salida1").innerHTML = "su paga correspondiente es: $" + horas*pago;
    
}