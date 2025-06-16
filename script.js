
function addTodoItem() {
    let todoInput = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");

    if (todoInput.value.trim() !== "") {
    let listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.draggable = true;
    listItem.textContent = todoInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    listItem.addEventListener("dragstart", function () {
        listItem.classList.add("dragging");
    });

    listItem.addEventListener("dragend", function () {
        listItem.classList.remove("dragging");
    });

    listItem.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    listItem.addEventListener("dragenter", function (e) {
        e.preventDefault();
        let draggingItem = document.querySelector(".dragging");
        if (draggingItem != listItem) {
        // todoList.insertBefore(draggingItem,listItem);
        todoList.insertBefore(draggingItem, listItem.nextSibling);
        }
    });

    todoInput.value = "";
    } else {
    alert("PLEASE ENTER SOME TEXT");
    }
}
document
    .getElementById("addButton")
    .addEventListener("click", addTodoItem);

document
    .getElementById("deleteAllButton")
    .addEventListener("click", function () {
    // document.getElementById("todoList").innerHTML="";
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    });
document
    .getElementById("todoInput")
    .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodoItem();
    }
    });
