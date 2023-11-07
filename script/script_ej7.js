// ejercicio7-script.js

document.addEventListener("DOMContentLoaded", function () {
    const submenuItems = document.querySelectorAll(".has-submenu");

    submenuItems.forEach((item) => {
        item.addEventListener("click", function () {
            const submenu = item.querySelector(".submenu");
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
});
