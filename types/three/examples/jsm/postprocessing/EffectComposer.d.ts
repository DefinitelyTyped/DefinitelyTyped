import { Timer, WebGLRenderer, WebGLRenderTarget } from "three";
import { Pass } from "./Pass.js";
import { ShaderPass } from "./ShaderPass.js";

declare class EffectComposer {
    renderer: WebGLRenderer;
    renderTarget1: WebGLRenderTarget;
    renderTarget2: WebGLRenderTarget;
    writeBuffer: WebGLRenderTarget;
    readBuffer: WebGLRenderTarget;
    renderToScreen: boolean;
    passes: Pass[];
    copyPass: ShaderPass;
    timer: Timer;

    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

    swapBuffers(): void;
    addPass(pass: Pass): void;
    insertPass(pass: Pass, index: number): void;
    removePass(pass: Pass): void;
    isLastEnabledPass(passIndex: number): boolean;
    render(deltaTime?: number): void;
    reset(renderTarget?: WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
    setPixelRatio(pixelRatio: number): void;
    dispose(): void;
}

export { EffectComposer };
