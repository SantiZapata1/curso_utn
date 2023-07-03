//desarrollar al menos una estructura de control
//usar DOM

/*
IMC por debajo de 18.5: Bajo peso
IMC entre 18.5 y 24.9: Peso normal
IMC entre 25.0 y 29.9: Sobrepeso
IMC entre 30.0 y 34.9: Obesidad clase 1
IMC entre 35.0 y 39.9: Obesidad clase 2
IMC de 40.0 o superior: Obesidad clase 3 (obesidad mórbida) 
*/

var contenedor = document.getElementById("form");
var nuevoTexto = document.createElement("p");


function funcionIMC(){

    var altura = prompt("ingrese su altura (mts):");
    var peso = prompt("ingrese su peso (kgs):");

    var imc = peso/(altura*altura);

    if(imc<18.5){
        nuevoTexto.textContent = "bajo peso";
    }else if(imc>=18.5 && imc <=24.9){
        nuevoTexto.textContent = "peso normal.";

    }else if(imc>=25.0 && imc <=29.9){
        nuevoTexto.textContent = "sobrepeso.";

    }else if(imc>=30.0 && imc <=34.9){
        nuevoTexto.textContent = "obesidad clase 1.";

    }else if(imc>=35.0 && imc <=39.9){
        nuevoTexto.textContent = "obesidad clase 2.";

    }else if(imc>=40.0){
        nuevoTexto.textContent = "obesidad clase 3.";

    }

}

contenedor.appendChild(nuevoTexto);
