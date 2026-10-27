
let inputTarea = document.querySelector("input");
let listaTareas = document.querySelector("#lista-tareas");
let botonAgregar = document.querySelector("#Agregar");

botonAgregar.addEventListener("click", function() {
    chequearInput();
    inputTarea.focus();
});
listaTareas.addEventListener("click", function(evento) {
if (evento.target.classList.contains("item-input")) {
let tarea = evento.target;

if (tarea.style.textDecoration === "line-through") {
    tarea.style.textDecoration = "none";
    tarea.style.color = "black";
} else {
    tarea.style.textDecoration = "line-through";
    tarea.style.color = "gray";
    }
    }
});
class Item {
    constructor(tarea) {
        this.tarea = tarea;
    }

    crearDiv() {
        let div = document.createElement("div");

        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.value = this.tarea;
        inputItem.classList.add("item-input");
        inputItem.disabled = true;

        div.appendChild(inputItem);
        let botonEditar = document.createElement("button");
botonEditar.innerHTML = '<i class="fas fa-pencil-alt"></i>';
botonEditar.classList.add("boton-editar");
botonEditar.addEventListener("click", function() {
    if (inputItem.disabled) {
        inputItem.disabled = false;
        inputItem.focus();
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
    } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    }
});
let botonRemover = document.createElement("button");
botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
botonRemover.classList.add("boton-remover");
botonRemover.addEventListener("click", function() {
    div.remove();
});

div.appendChild(botonEditar);
div.appendChild(botonRemover);

return div;
    }
}
function chequearInput() {
    let tarea = inputTarea.value;

    if (tarea.trim() !== "") {
        let nuevaTarea = new Item(tarea);
        listaTareas.appendChild(nuevaTarea.crearDiv());
        inputTarea.value = "";
    }
}