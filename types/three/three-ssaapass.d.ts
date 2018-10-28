import { Pass } from "./three-effectcomposer";
import { Scene, Camera, Color, IUniform, ShaderMaterial, OrthographicCamera, Mesh } from "./three-core";

export class SSAARenderPass extends Pass {
	constructor(scene: Scene, camera: Camera, clearColor?: Color | string | number, clearAlpha?: number);
	scene: Scene;
	camera: Camera;
	sampleLevel: number;
	unbiased: boolean;
	clearColor: Color | string | number;
	clearAlpha: number;
	copyUniforms: { [uniform: string]: IUniform };
	copyMaterial: ShaderMaterial;
	camera2: OrthographicCamera;
	scene2: Scene;
	quad2: Mesh;
	dispose(): void;
	static readonly JitterVectors: number[][][];
}