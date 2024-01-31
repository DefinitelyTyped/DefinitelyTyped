import { ShaderNodeObject } from '../../shadernode/ShaderNode.js';
import Node from '../../core/Node.js';
import OperatorNode from '../../math/OperatorNode.js';

declare const BRDF_GGX: (args: {
    lightDirection: Node;
    f0: Node;
    f90: Node;
    roughness: Node;
    iridescenceFresnel?: Node;
}) => ShaderNodeObject<OperatorNode>;

export default BRDF_GGX;
