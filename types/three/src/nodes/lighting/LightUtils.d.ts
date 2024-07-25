import Node from "../core/Node.js";
import CondNode from "../math/CondNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export const getDistanceAttenuation: (args: {
    lightDistance: Node;
    cutoffDistance: Node;
    decayExponent: Node;
}) => ShaderNodeObject<CondNode>;
