import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class AttributeNode extends Node {
    defaultNode: Node | null;

    constructor(attributeName: string, nodeType?: string | null, defaultNode?: Node | null);

    setAttributeName(attributeName: string): this;

    getAttributeName(builder: NodeBuilder): string;
}

export const attribute: (
    name: string,
    nodeType?: string | null,
    defaultNode?: NodeRepresentation,
) => ShaderNodeObject<AttributeNode>;
