import Element = require("./Element.js");

declare function createElement(
    name: string,
    attrs?: string | { [attrName: string]: any },
    ...children: Element.Node[]
): Element;
export = createElement;
