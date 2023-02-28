import { ShaderNode } from '../../shadernode/ShaderNodeBaseElements';
import Node from '../../core/Node';

declare const BRDF_Lambert: ShaderNode<{ diffuseColor: Node }>;

export default BRDF_Lambert;
