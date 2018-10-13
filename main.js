let btn = document.getElementById("btn");
let task = document.getElementById("task");

class ToDoList {
    constructor() {
        this.toDos = [];    
    }

    addToDo(task) {
        this.toDos.push(task);
        console.log(this.toDos);
    }
}

const myList = new ToDoList();

btn.addEventListener("click", function() {
    myList.addToDo(task.value);
});