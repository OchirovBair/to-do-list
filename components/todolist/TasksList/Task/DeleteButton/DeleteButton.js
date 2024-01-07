import { deleteTask } from "../../../../../data/data.js";
import { createElementWithClass } from "../../../../other/helpers.js";

export function DeleteButton(taskId) {
    const deleteButton = createElementWithClass('button', 'deleteButton');
    deleteButton.append('❌');
    deleteButton.addEventListener('click', () => {
        deleteTask(taskId);
    });
    return deleteButton;
}
