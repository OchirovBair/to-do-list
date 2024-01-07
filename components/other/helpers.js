export function createElementWithClass(tagName, ...classNames) {
  const element = document.createElement(tagName);
  classNames.forEach((c) => element.classList.add(c));
  return element;
}

export function createElementWithAttribute(tagName, props) {
  const element = document.createElement(tagName);
  Object.entries(props).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

