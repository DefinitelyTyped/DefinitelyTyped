import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class PosterizeNode extends Node {
    sourceNode: Node;
    stepsNode: Node;

    constructor(sourceNode: Node, stepsNode: Node);
}

export const posterize: (
    sourceNode: NodeRepresentation,
    stepsNode: NodeRepresentation,
) => ShaderNodeObject<PosterizeNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        posterize: typeof posterize;
    }
}
