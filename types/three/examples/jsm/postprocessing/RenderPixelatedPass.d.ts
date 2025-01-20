import { Camera, MeshNormalMaterial, Scene, ShaderMaterial, Vector2, WebGLRenderTarget } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export interface RenderPixelatedPassParameters {
    normalEdgeStrength?: number;
    depthEdgeStrength?: number;
}

export class RenderPixelatedPass extends Pass {
    constructor(pixelSize: number, scene: Scene, camera: Camera, options?: RenderPixelatedPassParameters);
    pixelSize: number;
    resolution: Vector2;
    renderResolution: Vector2;

    pixelatedMaterial: ShaderMaterial;
    normalMaterial: MeshNormalMaterial;

    fsQuad: FullScreenQuad;
    scene: Scene;
    camera: Camera;

    normalEdgeStrength: RenderPixelatedPassParameters["normalEdgeStrength"];
    depthEdgeStrength: RenderPixelatedPassParameters["depthEdgeStrength"];

    beautyRenderTarget: WebGLRenderTarget;
    normalRenderTarget: WebGLRenderTarget;

    setPixelSize(pixelSize: number): void;
}
