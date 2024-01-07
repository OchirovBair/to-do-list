import { closeTaskDialog, createTask, data } from "../../../data/data.js"
import { createElementWithClass } from "../../other/helpers.js";

export function Dialog() {
    const container = createElementWithClass('dialog', 'dialog');
    
    if (data.todolist.addNewTaskDialog.isOpen) {
        container.open = true;
    }

    const headerOfDialogElement = createElementWithClass('h4', 'dialogHeader');
    headerOfDialogElement.append('New Task');
    container.append(headerOfDialogElement);

    const inputElement = createElementWithClass('input', 'dialogInput')
    
    container.append(inputElement);

    const saveButtonElement = createElementWithClass('button', 'saveButton');
    saveButtonElement.append('Save');
    saveButtonElement.addEventListener('click', () => {
        const createResult = createTask(inputElement.value);
        if (createResult) {
            closeTaskDialog();
        }
    })

    if (data.todolist.addNewTaskDialog.error) {
        inputElement.setAttribute('class', 'error');
        inputElement.setAttribute('placeholder', data.todolist.addNewTaskDialog.error);
    }

    container.append(saveButtonElement);

    const cancelButtonElement = createElementWithClass('button', 'cancelButton');
    cancelButtonElement.append('Cancel');
    cancelButtonElement.addEventListener('click', () => {
        closeTaskDialog();
    })
    container.append(cancelButtonElement);

    return container;
}