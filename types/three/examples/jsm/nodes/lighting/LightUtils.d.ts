import Node from "../core/Node.js";
import { ShaderNode } from "../shadernode/ShaderNode.js";

export const getDistanceAttenuation: ShaderNode<{ lightDistance: Node; cutoffDistance: Node; decayExponent: Node }>;
