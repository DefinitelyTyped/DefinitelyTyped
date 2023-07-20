import { ShaderNode } from '../../shadernode/ShaderNodeBaseElements.js';
import Node from '../../core/Node.js';

declare const BRDF_Lambert: ShaderNode<{ diffuseColor: Node }>;

export default BRDF_Lambert;
