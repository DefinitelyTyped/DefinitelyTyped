import { ShaderNode } from '../../shadernode/ShaderNode.js';
import Node from '../../core/Node.js';

declare const BRDF_GGX: ShaderNode<{ lightDirection: Node; f0: Node; f90: Node; roughness: Node }>;

export default BRDF_GGX;
