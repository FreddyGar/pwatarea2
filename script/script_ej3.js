// ejercicio3

document.addEventListener("DOMContentLoaded", function () {
    const imagenCambiante = document.getElementById("imagenCambiante");

    imagenCambiante.addEventListener("mouseover", function () {
        imagenCambiante.src = "https://e1.pxfuel.com/desktop-wallpaper/719/695/desktop-wallpaper-future-city-future-city-future-city-background.jpg"; // Cambiar a la segunda imagen al pasar el ratón
    });

    imagenCambiante.addEventListener("mouseout", function () {
        imagenCambiante.src = "https://img.freepik.com/fotos-premium/ciudad-futurista-edificios-futuristas_921860-2371.jpg?w=1060"; // Cambiar de nuevo a la primera imagen al retirar el ratón
    });
});
