// Type definitions for three.js (EffectComposer.js)
// Project: https://github.com/mrdoob/three.js/blob/r68/examples/js/postprocessing/EffectComposer.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace THREE {
    export class EffectComposer {
        constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

        renderTarget1: WebGLRenderTarget;
        renderTarget2: WebGLRenderTarget;
        writeBuffer: WebGLRenderTarget;
        readBuffer: WebGLRenderTarget;
        passes: any[];
        copyPass: ShaderPass;

        swapBuffers(): void;

        addPass(pass: any): void;

        insertPass(pass: any, index: number): void;

        render(delta?: number): void;

        reset(renderTarget?: WebGLRenderTarget): void;

        setSize(width: number, height: number): void;
    }
}
