import { Pass } from "./three-effectcomposer";
import { Vector2, ShaderMaterial, WebGLRenderTarget, IUniform, Color, Scene, Mesh, OrthographicCamera } from "./three-core";

export class UnrealBloomPass extends Pass {
	constructor(resolution?: Vector2, strength?: number, radius?: number, threshold?: number);
	strength: number;
	resolution: Vector2;
	nMips: number;
	renderTargetBright: WebGLRenderTarget;
	highPassUniforms: { [uniform: string]: IUniform };
	renderTargetsHorizontal: WebGLRenderTarget[];
	renderTargetsVertical: WebGLRenderTarget[];
	materialHighPassFilter: ShaderMaterial;
	separableBlurMaterials: ShaderMaterial[];
	compositeMaterial: ShaderMaterial;
	bloomTintColors: Color[];
	copyUniforms: { [uniform: string]: IUniform };
	materialCopy: ShaderMaterial;
	needsSwap: false;
	oldClearAlpha: number;
	oldClearColor: Color;
	camera: OrthographicCamera;
	scene: Scene;
	quad: Mesh;
	radius: number;
	threshold: number;
	dispose(): void;
	getSeparableBlurMaterial(): ShaderMaterial;
	getCompositeMaterial(): ShaderMaterial;
	static BlurDirectionX: Vector2;
	static BlurDirectionY: Vector2;
}