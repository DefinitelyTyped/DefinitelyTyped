import Element, { Node } from "./Element.js";

export default function createElement(
    name: string,
    attrs?: string | { [attrName: string]: any },
    ...children: Node[]
): Element;
