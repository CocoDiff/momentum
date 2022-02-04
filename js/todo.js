const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input") // already uploaded the first line
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //if define type const everytime it delete 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "🩰";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); //todolist is id of ul
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function sayHello(item) {
    //console.log(`this is turn of ${item}`);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);



if(savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //sayHello(parsedToDos);
    //parsedToDos.forEach((item) => console.log(`this is the turn of ${item}`));
    parsedToDos.forEach(paintToDo);
    
}

function sexyFilter() {

}

[1,2,3,4].filter(sexyFilter);

sexyFilter