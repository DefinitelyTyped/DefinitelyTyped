import { Node, TempNode, TextureNode } from "three/webgpu";

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

    ghostTintNode: Node<"vec3">;
    thresholdNode: Node<"float">;
    ghostSamplesNode: Node<"float">;
    ghostSpacingNode: Node<"float">;
    ghostAttenuationFactorNode: Node<"float">;
    downSampleRatio: number;

    constructor(textureNode: TextureNode, params?: LensflareNodeParams);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export default LensflareNode;

export const lensflare: (
    inputNode: Node,
    params?: LensflareNodeParams,
) => LensflareNode;
