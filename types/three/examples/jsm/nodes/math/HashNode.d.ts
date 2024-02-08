import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class HashNode extends Node {
    seedNode: Node;

    constructor(seedNode: Node);
}

export const hash: (seedNode: NodeRepresentation) => ShaderNodeObject<HashNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        hash: typeof hash;
    }
}
