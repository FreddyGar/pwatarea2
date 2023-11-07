// ejercicio4

document.addEventListener("DOMContentLoaded", function () {
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourRotation = (hours % 12) * 360 + (minutes / 60) * 30;
        const minuteRotation = minutes * 6 + (seconds / 60) * 6;
        const secondRotation = seconds * 6;

        hourHand.style.transform = `rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
        secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }

    // Actualiza el reloj cada segundo
    setInterval(updateClock, 1000);

    // Llama a la función de actualización una vez al cargar la página
    updateClock();
});
