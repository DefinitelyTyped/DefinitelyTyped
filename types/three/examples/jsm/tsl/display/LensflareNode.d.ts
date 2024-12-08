import { Vector3 } from "three";
import { NodeRepresentation, ShaderNodeObject, TempNode, TextureNode, UniformNode } from "three/tsl";

interface LensflareNodeParams {
    ghostTint?: NodeRepresentation | undefined;
    threshold?: NodeRepresentation | undefined;
    ghostSamples?: NodeRepresentation | undefined;
    ghostSpacing?: NodeRepresentation | undefined;
    ghostAttenuationFactor?: NodeRepresentation | undefined;
    downSampleRatio?: number | undefined;
}

declare class LensflareNode extends TempNode {
    textureNode: TextureNode;

    ghostTintNode: ShaderNodeObject<UniformNode<Vector3>>;
    thresholdNode: ShaderNodeObject<UniformNode<number>>;
    ghostSamplesNode: ShaderNodeObject<UniformNode<number>>;
    ghostSpacingNode: ShaderNodeObject<UniformNode<number>>;
    ghostAttenuationFactorNode: ShaderNodeObject<UniformNode<number>>;
    downSampleRatio: number;

    constructor(textureNode: TextureNode, params?: LensflareNodeParams);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export default LensflareNode;

export const lensflare: (
    inputNode: NodeRepresentation,
    params?: LensflareNodeParams,
) => ShaderNodeObject<LensflareNode>;
