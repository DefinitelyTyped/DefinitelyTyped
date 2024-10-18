import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class FogNode extends Node {
    isFogNode: true;
    colorNode: Node | null;
    factorNode: Node | null;

    constructor(colorNode: Node | null, factorNode: Node | null);

    getViewZNode(builder: NodeBuilder): Node;
}

export default FogNode;

export const fog: (
    colorNode: NodeRepresentation | null,
    factorNode: NodeRepresentation | null,
) => ShaderNodeObject<FogNode>;
