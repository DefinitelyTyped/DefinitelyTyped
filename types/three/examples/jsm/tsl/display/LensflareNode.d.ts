import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode, UniformNode, Vector3 } from "three/webgpu";

interface LensflareNodeParams {
    ghostTint?: Node | undefined;
    threshold?: Node | undefined;
    ghostSamples?: Node | undefined;
    ghostSpacing?: Node | undefined;
    ghostAttenuationFactor?: Node | undefined;
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
    inputNode: Node,
    params?: LensflareNodeParams,
) => ShaderNodeObject<LensflareNode>;
