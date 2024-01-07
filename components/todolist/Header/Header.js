import { createElementWithClass } from "../../other/helpers.js";

export function Header(data) {
    const container = createElementWithClass('h1', 'mainHeader');
    container.append(data);
    return container;
}
