// ejercicio8

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showSlide = (slideIndex) => {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[slideIndex].style.display = "block";
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    showSlide(currentSlide);

    // Cambia automáticamente las imágenes cada 3 segundos (3000 ms)
    setInterval(nextSlide, 3000);
});
