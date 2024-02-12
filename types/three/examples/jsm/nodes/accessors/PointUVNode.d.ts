import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class PointUVNode extends Node {
    isPointUVNode: true;

    constructor();
}

export const pointUV: ShaderNodeObject<PointUVNode>;
