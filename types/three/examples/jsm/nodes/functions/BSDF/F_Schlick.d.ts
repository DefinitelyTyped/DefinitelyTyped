import { ShaderNode } from '../../shadernode/ShaderNodeBaseElements';
import Node from '../../core/Node';

declare const F_Schlick: ShaderNode<{ f0: Node; f90: Node; dotVH: Node }>;

export default F_Schlick;
