import {
    Camera,
    Color,
    Material,
    Scene,
    WebGLRenderTarget,
    WebGLRenderer
} from "./three-core";
import { Pass } from "./three-effectcomposer";

export class RenderPass extends Pass{
    constructor(scene: Scene, camera: Camera, overrideMaterial?: Material | null, clearColor?: Color | string | number, clearAlpha?: number);

    scene: Scene;
    camera: Camera;
    overrideMaterial: Material | null | undefined;
    clearColor: Color | string | number | undefined;
    clearAlpha: number | undefined;
    clear: boolean;
    needsSwap: false;
    clearDepth: false;
}
