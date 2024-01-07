import { data, subscribe } from "./data/data.js"
import { ToDoList } from "./components/todolist/ToDoList.component.js"


subscribe(refreshUI);

function refreshUI() {
    const todolistElement = ToDoList(data.todolist);

    const rootElement = document.getElementById('root');
    rootElement.innerHTML = '';

    rootElement.append(todolistElement);
}

refreshUI();

