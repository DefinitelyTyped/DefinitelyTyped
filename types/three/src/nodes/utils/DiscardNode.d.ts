import Node from "../core/Node.js";
import CondNode from "../math/CondNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class DiscardNode extends CondNode {
    constructor(condNode: Node);
}

export const inlineDiscard: (condNode: NodeRepresentation) => ShaderNodeObject<DiscardNode>;
export const discard: (condNode: NodeRepresentation) => ShaderNodeObject<Node>;
export const Return: (condNode: NodeRepresentation) => ShaderNodeObject<Node>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        discard: typeof discard;
    }
}
