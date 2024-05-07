import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import { NodeTypeOption } from "./constants.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class AttributeNode extends Node {
    constructor(attributeName: string, nodeType?: NodeTypeOption | null);
    setAttributeName(attributeName: string): this;
    getAttributeName(builder: NodeBuilder): string;
}

export const attribute: (name: string, nodeType: NodeTypeOption) => ShaderNodeObject<Node>;
