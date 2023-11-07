// ejercicio6-script.js

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            agregarTarea(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                agregarTarea(taskText);
                taskInput.value = "";
            }
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.remove();
        }
    });

    function agregarTarea(texto) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${texto}
            <button class="delete-button">Eliminar</button>
        `;
        taskList.appendChild(listItem);
    }
});
