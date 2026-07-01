import { Camera, Node, TempNode, Texture, TextureNode, UniformNode } from "three/webgpu";

export type TemporalReprojectMode = "diffuse" | "specular";

export interface TemporalReprojectNodeOptions {
    mode?: TemporalReprojectMode | undefined;
    hitPointReprojection?: boolean | undefined;
    accumulate?: boolean | undefined;
}

declare class TemporalReprojectNode extends TempNode<"vec4"> {
    readonly isTemporalReprojectNode: boolean;

    beautyNode: Node<"vec4">;
    depthNode: TextureNode;
    normalNode: TextureNode;
    velocityNode: TextureNode;
    camera: Camera;

    mode: TemporalReprojectMode;

    /**
     * When `true`, resolve output is copied into the internal history buffer each frame.
     * When `false`, history is supplied externally via {@link TemporalReprojectNode#setHistoryTexture}.
     *
     * @type {boolean}
     */
    accumulate: boolean;

    maxVelocityLength: number;

    maxFrames: UniformNode<"float", number>;
    hitPointReprojection: UniformNode<"bool", boolean>;
    clampIntensity: UniformNode<"float", number>;
    flickerSuppression: UniformNode<"float", number>;

    constructor(
        beautyNode: Node<"vec4">,
        depthNode: TextureNode,
        normalNode: TextureNode,
        velocityNode: TextureNode,
        camera: Camera,
        options?: TemporalReprojectNodeOptions,
    );

    /**
     * Supplies an external history source (e.g. a {@link RecurrentDenoiseNode} or its
     * texture). Only used when {@link TemporalReprojectNode#accumulate} is `false`.
     *
     * @param {?(Object|Texture)} source
     */
    setHistoryTexture(source: Texture | { getRenderTarget(): { texture: Texture } }): void;
}

export default TemporalReprojectNode;

export const temporalReproject: (
    beautyNode: Node<"vec4">,
    depthNode: TextureNode,
    normalNode: TextureNode,
    velocityNode: TextureNode,
    camera: Camera,
    options?: TemporalReprojectNodeOptions,
) => TemporalReprojectNode;
