// ejercicio5

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evita que se envíe el formulario si la validación falla
        }
    });

    function validarFormulario() {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (nombre.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Por favor, complete todos los campos.");
            return false;
        }

        return true;
    }
});
