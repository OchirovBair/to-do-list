import { openTaskDialog } from "../../../data/data.js"
import { createElementWithClass } from "../../other/helpers.js";

export function ButtonsPanel() {
    const container = createElementWithClass('button', 'addButton');
    container.append('+ add');
    container.addEventListener('click', () => {
        openTaskDialog()
    })
    return container;
}
