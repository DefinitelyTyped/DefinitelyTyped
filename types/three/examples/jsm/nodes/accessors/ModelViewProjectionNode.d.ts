import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ModelViewProjectionNode extends Node {
    constructor(positionNode?: Node);
}

export const modelViewProjection: (position?: NodeRepresentation) => ShaderNodeObject<ModelViewProjectionNode>;
