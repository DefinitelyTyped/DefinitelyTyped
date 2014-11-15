// Type definitions for three.js (RenderPass.js)
// Project: https://github.com/mrdoob/three.js/blob/r68/examples/js/postprocessing/RenderPass.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
	export class RenderPass {
		constructor( scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number );
		constructor( scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: string, clearAlpha?: number );
		constructor( scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: number, clearAlpha?: number );

		scene: Scene;
		camera: Camera;
		overrideMaterial: Material;
		clearColor: any; // Color or string or number
		clearAlpha: number;
		oldClearColor: Color;
		oldClearAlpha: number;
		enabled: boolean;
		clear: boolean;
		needsSwap: boolean;

        render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
	}
}
