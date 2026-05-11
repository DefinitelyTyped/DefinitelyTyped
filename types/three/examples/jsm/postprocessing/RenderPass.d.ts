import { Camera, Color, Material, Scene } from "three";

import { Pass } from "./Pass.js";

declare class RenderPass extends Pass {
    scene: Scene;
    camera: Camera;

    overrideMaterial: Material | null;

    clearColor: Color | null;
    clearAlpha: number | null;
    clear: boolean;
    clearDepth: boolean;
    needsSwap: boolean;

    readonly isRenderPass: true;

    constructor(
        scene: Scene,
        camera: Camera,
        overrideMaterial?: Material | null,
        clearColor?: Color | null,
        clearAlpha?: number | null,
    );
}

export { RenderPass };
