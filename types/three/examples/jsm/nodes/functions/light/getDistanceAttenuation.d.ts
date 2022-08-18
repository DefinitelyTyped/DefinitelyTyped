import { ShaderNode } from '../../shadernode/ShaderNodeBaseElements';
import Node from '../../core/Node';
declare const getDistanceAttenuation: ShaderNode<{ lightDistance: Node; cutoffDistance: Node; decayExponent: Node }>;

export default getDistanceAttenuation;
