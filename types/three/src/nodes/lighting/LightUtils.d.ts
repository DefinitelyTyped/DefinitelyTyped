import Node from "../core/Node.js";
import ConditionalNode from "../math/ConditionalNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const getDistanceAttenuation: (args: {
    lightDistance: Node;
    cutoffDistance: Node;
    decayExponent: Node;
}) => ShaderNodeObject<ConditionalNode>;
