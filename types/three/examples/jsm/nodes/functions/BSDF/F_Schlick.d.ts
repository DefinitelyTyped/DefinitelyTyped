import { ShaderNode } from '../../shadernode/ShaderNode.js';
import Node from '../../core/Node.js';

declare const F_Schlick: ShaderNode<{ f0: Node; f90: Node; dotVH: Node }>;

export default F_Schlick;
