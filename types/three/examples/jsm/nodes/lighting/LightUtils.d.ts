import { ShaderNode } from '../shadernode/ShaderNode';
import Node from '../core/Node';

export const getDistanceAttenuation: ShaderNode<{ lightDistance: Node; cutoffDistance: Node; decayExponent: Node }>;
