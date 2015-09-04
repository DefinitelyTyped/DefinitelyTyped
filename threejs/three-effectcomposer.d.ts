// Type definitions for three.js (EffectComposer.js)
// Project: https://github.com/mrdoob/three.js/blob/r68/examples/js/postprocessing/EffectComposer.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />
/// <reference path="./three-shaderpass.d.ts" />
/// <reference path="./three-copyshader.d.ts" />

declare module THREE {
	export class EffectComposer {
		constructor( renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

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
		setSize( width: number, height: number ): void;
	}
}
