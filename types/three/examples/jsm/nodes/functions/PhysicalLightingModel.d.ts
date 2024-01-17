import { ShaderNode } from '../shadernode/ShaderNode.js';
import Node from '../core/Node.js';

declare const PhysicalLightingModel: {
    direct: ShaderNode<{ lightDirection: Node; lightColor: Node; reflectedLight: Node }>;
    indirectDiffuse: ShaderNode<{ irradiance: Node; reflectedLight: Node }>;
    indirectSpecular: ShaderNode<{ radiance: Node; iblIrradiance: Node; reflectedLight: Node }>;
    ambientOcclusion: ShaderNode<{ ambientOcclusion: Node; reflectedLight: Node }>;
};

export default PhysicalLightingModel;
