import { Camera, Color, PassNode, RenderTarget, Scene, UniformNode } from "three/webgpu";

declare class SSAAPassNode extends PassNode {
    readonly isSSAAPassNode: boolean;

    sampleLevel: number;
    unbiased: boolean;
    clearColor: Color;
    clearAlpha: number;

    sampleWeight: UniformNode<"float", number>;

    sampleRenderTarget: RenderTarget | null;

    constructor(scene: Scene, camera: Camera);
}

export default SSAAPassNode;

export const ssaaPass: (scene: Scene, camera: Camera) => SSAAPassNode;
