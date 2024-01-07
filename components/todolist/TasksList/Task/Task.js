import { createElementWithClass } from "../../../other/helpers.js";
import { DeleteButton } from "./DeleteButton/DeleteButton.js";

export function Task(data) {
    const liContainer = createElementWithClass('li', 'elementOfList');
    const divContainer = createElementWithClass('div', 'containerOfElement');
    const spanContainer = createElementWithClass('span', 'titleOfTask');
    // spanContainer.addEventListener('dblclick', () => {
        
    // })
    const deleteButton = DeleteButton(data.id);

    spanContainer.append(data.title);
    divContainer.append(spanContainer);
    divContainer.append(deleteButton);
    liContainer.append(divContainer);

    return liContainer;
}

