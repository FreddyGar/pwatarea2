// Ejercicio 1 *******************************************************************************************
const cambiarColorButton = document.getElementById("cambiarColorButton");
const elementoParaCambiarColor = document.getElementById("elementoParaCambiarColor");

// Agrega un controlador de eventos al botón para cambiar el color de fondo al hacer clic
cambiarColorButton.addEventListener("click", function() {
    // Genera un color aleatorio en formato hexadecimal
    const nuevoColor = getRandomColor();

    // Cambia el color de fondo del elemento
    elementoParaCambiarColor.style.backgroundColor = nuevoColor;
});

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}