import {
    Camera,
    Color,
    Material,
    Scene,
    WebGLRenderTarget,
    WebGLRenderer
} from "./three-core";

export class RenderPass {
    constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color | string | number, clearAlpha?: number);

    scene: Scene;
    camera: Camera;
    overrideMaterial: Material;
    clearColor: Color | string | number;
    clearAlpha: number;
    oldClearColor: Color;
    oldClearAlpha: number;
    enabled: boolean;
    clear: boolean;
    needsSwap: boolean;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
}
