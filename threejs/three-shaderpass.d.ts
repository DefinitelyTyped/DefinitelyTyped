// Type definitions for three.js (ShaderPass.js)
// Project: https://github.com/mrdoob/three.js/blob/r68/examples/js/postprocessing/ShaderPass.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
	export class ShaderPass {
		constructor( shader: Shader, textureID?: string );

		textureID: string;
		uniforms: any;
		material: ShaderMaterial;
		renderToScreen: boolean;
		enabled: boolean;
		needsSwap: boolean;
		clear: boolean;
		camera: Camera;
		scene: Scene;
		quad: Mesh;

		render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
	}
}
