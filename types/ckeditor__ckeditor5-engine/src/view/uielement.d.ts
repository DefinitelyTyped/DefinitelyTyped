import Document from "./document";
import Element from "./element";
import View from "./view";
import Node from "./node";

export default class UIElement extends Element {
    render(domDocument: Document): HTMLElement;
    toDomElement(domDocument: Document): HTMLElement;

    protected constructor(
        document: Document,
        name: string,
        attributes?: Record<string, string> | [string, string],
        children?: Node | Iterable<Node>,
    );
}

export function injectUiElementHandling(view: View): void;
