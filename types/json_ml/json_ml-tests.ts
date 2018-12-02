/// <reference types="node" />
import { Attributes, Element, Node, parse, stringify } from "json_ml";

const nodes: Node[] = parse("<ul><li>hello</li></ul>");
const node1: Node = nodes[0];
if (typeof node1 !== "string") {
    const el: Element = node1;
    const attrs = el[1] as Attributes;
    console.log(el[0], attrs);
}

console.log(stringify(nodes, el => (el.is("li") ? null : el), 2));
