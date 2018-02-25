import { Camera, Scene, WebGLRenderTarget, WebGLRenderer, Material, Mesh, IUniform } from "./three-core";
import {Pass} from "./three-effectcomposer";

export class FilmPass extends Pass {
    constructor(noiseIntensity: number, scanlinesIntensity: number, scanlinesCount: number, grayscale: boolean);
    
    scene: Scene;
    camera: Camera;
    uniforms: IUniform;
    material: Material;
    quad: Mesh;

}
