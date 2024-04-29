import { Camera, Color, Material, Scene } from "three";

import { Pass } from "./Pass.js";

export class RenderPass extends Pass {
    constructor(
        scene: Scene,
        camera: Camera,
        overrideMaterial?: Material | null,
        clearColor?: Color | null,
        clearAlpha?: number | null,
    );

    scene: Scene;
    camera: Camera;

    overrideMaterial: Material | null;

    clearColor: Color | null;
    clearAlpha: number | null;

    clearDepth: boolean;
}
