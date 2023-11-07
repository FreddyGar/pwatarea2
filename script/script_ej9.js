// ejercicio9

document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");

    const targetDate = new Date("2023-11-20 00:00:00").getTime(); 

    const updateCountdown = () => {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        if (timeRemaining <= 0) {
            countdownElement.textContent = "¡Tiempo agotado!";
        }
    };

    updateCountdown();

    setInterval(updateCountdown, 1000);
});
