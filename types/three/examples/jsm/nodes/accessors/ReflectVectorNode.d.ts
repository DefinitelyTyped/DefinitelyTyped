import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ReflectVectorNode extends Node {
    constructor();

    getHash(): "reflectVector";
    setup(): Node;
}

export const reflectVector: ShaderNodeObject<ReflectVectorNode>;
