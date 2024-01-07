import { createElementWithClass } from "../other/helpers.js";
import { ButtonsPanel } from "./ButtonsPanel/AddButton.js";
import { Dialog } from "./Dialog/Dialog.component.js";
import { Header } from "./Header/Header.js";
import { TaskList } from "./TasksList/TasksList.js";

export function ToDoList(data) {
    const container = createElementWithClass('div');

    const headerElement = Header(data.title);
    const tasksListElement = TaskList(data.tasks);
    const buttonsPanelElement = ButtonsPanel();
    const dialogElement = Dialog();

    container.append(headerElement);
    container.append(tasksListElement);
    container.append(buttonsPanelElement);
    container.append(dialogElement);

    return container;
}