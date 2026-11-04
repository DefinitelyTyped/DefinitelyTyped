import { Camera, Object3D, ShaderMaterial, Texture, WebGLRenderer, WebGLRenderTarget } from "three";
import { Pass } from "./Pass.js";

export class RenderTransitionPass extends Pass {
    material: ShaderMaterial;

    sceneA: Object3D;
    cameraA: Camera;
    sceneB: Object3D;
    cameraB: Camera;

    constructor(sceneA: Object3D, cameraA: Camera, sceneB: Object3D, cameraB: Camera);

    setTransition(value: number): void;

    useTexture(value: boolean): void;

    setTexture(value: Texture | null): void;

    setTextureThreshold(value: number): void;

    setSize(width: number, height: number): void;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget): void;

    dispose(): void;
}
