//formulario de datos personales

var mayor = confirm("¿es mayor de edad?");

function mostrarContenido() {

    var input1 = document.getElementById("nombres");
    var nombre = input1.textContent;
    
    var input2 = document.getElementById("edad");
    var edad = input2.textContent;

    var input3 = document.getElementById("mail");
    var mail = input3.textContent;

    var input4 = document.getElementById("localidad");
    var localidad = input4.textContent;

    var div = getElementById("mensaje");
    if (div.style.display === "none") {
      div.style.display = "block";  // Mostrar el div
    }else {
        div.style.display = "none";   // Ocultar el div
    }
}


