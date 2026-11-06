import { Camera, Scene, ShaderMaterial } from "three";

import { Pass } from "./Pass.js";

export interface RenderPixelatedPassParameters {
    normalEdgeStrength?: number;
    depthEdgeStrength?: number;
}

export class RenderPixelatedPass extends Pass {
    constructor(pixelSize: number, scene: Scene, camera: Camera, options?: RenderPixelatedPassParameters);
    pixelSize: number;

    pixelatedMaterial: ShaderMaterial;

    scene: Scene;
    camera: Camera;

    normalEdgeStrength: RenderPixelatedPassParameters["normalEdgeStrength"];
    depthEdgeStrength: RenderPixelatedPassParameters["depthEdgeStrength"];

    setPixelSize(pixelSize: number): void;
}
