import { ShaderNode } from '../shadernode/ShaderNode.js';
import Node from '../core/Node.js';

export const getDistanceAttenuation: ShaderNode<{ lightDistance: Node; cutoffDistance: Node; decayExponent: Node }>;
