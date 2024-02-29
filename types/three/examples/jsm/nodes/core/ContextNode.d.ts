import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";
import { NodeBuilderContext } from "./NodeBuilder.js";

export default class ContextNode extends Node {
    isContextNode: true;
    node: Node;
    context: NodeBuilderContext;

    constructor(node: Node, context: NodeBuilderContext);
}

export const context: (node: NodeRepresentation, context: NodeBuilderContext) => ShaderNodeObject<ContextNode>;
export const label: (node: NodeRepresentation, label: string) => ShaderNodeObject<ContextNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        context: typeof context;
        label: typeof label;
    }
}
