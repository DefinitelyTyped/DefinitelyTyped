import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class AttributeNode extends Node {
    constructor(attributeName: string, nodeType?: string | null);

    setAttributeName(attributeName: string): this;

    getAttributeName(builder: NodeBuilder): string;
}

export const attribute: (
    name: string,
    nodeType?: string | null,
) => ShaderNodeObject<AttributeNode>;
