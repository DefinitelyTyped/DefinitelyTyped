import { WebGLRenderTarget, WebGLRenderer } from "./three-core";
import { ShaderPass } from "./three-shaderpass";

export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

    renderTarget1: WebGLRenderTarget;
    renderTarget2: WebGLRenderTarget;
    writeBuffer: WebGLRenderTarget;
    readBuffer: WebGLRenderTarget;
    passes: Pass[];
    copyPass: ShaderPass;

    swapBuffers(): void;

    addPass(pass: any): void;

    insertPass(pass: any, index: number): void;

    render(delta?: number): void;

    reset(renderTarget?: WebGLRenderTarget): void;

    setSize(width: number, height: number): void;
}


export class Pass{
    // if set to true, the pass is processed by the composer
	enabled: boolean;

	// if set to true, the pass indicates to swap read and write buffer after rendering
	needsSwap: boolean;

	// if set to true, the pass clears its buffer before rendering
	clear: boolean;

	// if set to true, the result of the pass is rendered to screen
    renderToScreen: boolean;
    
    setSize(width: number, height:number ): void;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number, maskActive?: boolean): void;
}