import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class PosterizeNode extends Node {
    sourceNode: Node;
    stepsNode: Node;

    constructor(sourceNode: Node, stepsNode: Node);
}

export const posterize: (
    sourceNode: Node,
    stepsNode: Node | number,
) => ShaderNodeObject<PosterizeNode>;
