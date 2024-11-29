function mostrarMensaje(color, mensaje) {
    // Mostrar la cajita y el mensaje
    document.getElementById("cajita").classList.add("mostrar");
    document.getElementById("mensaje").innerHTML = mensaje;
    
    // Establecer el color de fondo de la cajita
    document.getElementById("cajita").style.backgroundColor = color;
    
    // Después de 3 segundos (3000 ms), ocultar la cajita
    setTimeout(function() {
        document.getElementById("cajita").classList.remove("mostrar");
    }, 10000); // 3000 ms = 3 segundos
}

document.getElementById("boton_color1").addEventListener("click", function() {
    mostrarMensaje("aqua", "¡Haz hecho clic en el Botón Aqua!");
});

document.getElementById("boton_color2").addEventListener("click", function() {
    mostrarMensaje("purple", "¡Haz hecho clic en el Botón Morado!");
});

document.getElementById("boton_color3").addEventListener("click", function() {
    mostrarMensaje("orange", "¡Haz hecho clic en el Botón Naranja!");
});

document.getElementById("boton_color4").addEventListener("click", function() {
    mostrarMensaje("yellow", "¡Haz hecho clic en el Botón Amarillo!");
});

document.getElementById("boton_color5").addEventListener("click", function() {
    mostrarMensaje("red", "¡Haz hecho clic en el Botón Rojo!");
});