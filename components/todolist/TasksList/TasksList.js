import { createElementWithClass } from "../../other/helpers.js";
import { Task } from "./Task/Task.js";


export function TaskList(data) {
    const container = createElementWithClass('ol', 'tasksList');
    for (let i = 0; i < data.length; i++) {
        const task = data[i];
        const taskElement = Task(task);
        container.append(taskElement);
    }
    
    return container;
}
