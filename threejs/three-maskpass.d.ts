// Type definitions for three.js (MaskPass.js)
// Project: https://github.com/mrdoob/three.js/blob/r68/examples/js/postprocessing/MaskPass.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
	export class MaskPass {
		constructor( scene: Scene, camera: Camera);

		scene: Scene;
		camera: Camera;
		enabled: boolean;
		clear: boolean;
		needsSwap: boolean;
		inverse: boolean;

        render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
	}
	
	export class ClearMaskPass {
		constructor();

		enabled: boolean;

        render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
	}
}
