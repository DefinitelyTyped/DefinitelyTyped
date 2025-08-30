import Element = require("./Element.js");

export function isNode(el: any): el is Element.Node;
export function isElement(el: any): el is Element;
export function isText(el: any): el is string;
