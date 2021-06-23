import Element from "./element";
import View from "./view";

export default class UIElement extends Element {
    render(domDocument: Document): HTMLElement;
    toDomElement(domDocument: Document): HTMLElement;
}

export function injectUiElementHandling(view: View): void;
