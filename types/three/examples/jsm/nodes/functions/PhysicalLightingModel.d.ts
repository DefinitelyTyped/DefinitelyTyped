import { ShaderNode } from '../shadernode/ShaderNodeElements';
import Node from '../core/Node';

declare const PhysicalLightingModel: {
    direct: ShaderNode<{ lightDirection: Node; lightColor: Node; reflectedLight: Node }>;
    indirectDiffuse: ShaderNode<{ irradiance: Node; reflectedLight: Node }>;
    indirectSpecular: ShaderNode<{ radiance: Node; iblIrradiance: Node; reflectedLight: Node }>;
    ambientOcclusion: ShaderNode<{ ambientOcclusion: Node; reflectedLight: Node }>;
};

export default PhysicalLightingModel;
