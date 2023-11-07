// script.js
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Londres", "Madrid", "París"],
        respuestaCorrecta: "París"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Marte", "Júpiter", "Venus"],
        respuestaCorrecta: "Júpiter"
    },
    {
        pregunta: "¿Quién escribió 'Romeo y Julieta'?",
        opciones: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
        respuestaCorrecta: "William Shakespeare"
    }
];

let puntuacion = 0;
let preguntaActual = 0;

const preguntaElement = document.getElementById("pregunta");
const opcionesElement = document.getElementById("opciones");
const puntuacionElement = document.getElementById("puntuacion-numero");

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    if (pregunta) {
        preguntaElement.textContent = pregunta.pregunta;
        opcionesElement.innerHTML = "";

        pregunta.opciones.forEach((opcion, index) => {
            const li = document.createElement("li");
            li.textContent = opcion;
            li.addEventListener("click", () => evaluarRespuesta(opcion, pregunta.respuestaCorrecta));
            opcionesElement.appendChild(li);
        });
    } else {
        // Todas las preguntas han sido respondidas
        finalizarJuego();
    }
}

function evaluarRespuesta(respuesta, respuestaCorrecta) {
    if (respuesta === respuestaCorrecta) {
        puntuacion++;
        puntuacionElement.textContent = puntuacion;
    }
    
    preguntaActual++;
    mostrarPregunta();
}

function finalizarJuego() {
    const preguntaContainer = document.getElementById("pregunta-container");
    preguntaContainer.style.display = "none"; // Ocultar el contenedor de la pregunta
    puntuacionElement.style.color = "red"; // Cambiar el color de la puntuación a rojo
    
    alert(`¡Juego terminado! Tu puntuación final es: ${puntuacion}`);
}

mostrarPregunta();
