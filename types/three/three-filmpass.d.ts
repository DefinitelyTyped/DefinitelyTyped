import { Camera, Scene, WebGLRenderTarget, WebGLRenderer, Material, Mesh, IUniform } from "./three-core";

export class FilmPass  {
    constructor(noiseIntensity: number, scanlinesIntensity: number, scanlinesCount: number, grayscale: boolean);
    
    renderToScreen: boolean;
    scene: Scene;
    camera: Camera;
    uniforms: IUniform;
    material: Material;
    quad: Mesh;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number, maskActive: boolean): void;
}
