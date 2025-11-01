import Node from "../core/Node.js";
import ConditionalNode from "../math/ConditionalNode.js";

export const getDistanceAttenuation: (args: {
    lightDistance: Node;
    cutoffDistance: Node;
    decayExponent: Node;
}) => ConditionalNode;
