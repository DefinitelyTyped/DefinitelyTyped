import { WebGLRenderTarget, Texture, IUniform, ShaderMaterial, OrthographicCamera, Scene, Mesh } from "./three-core";
import { Pass } from "./three-effectcomposer";

export class SMAAPass extends Pass {
    constructor(width: number, height: number);
    edgesRT: WebGLRenderTarget;
    weightsRT: WebGLRenderTarget;
    areaTexture: Texture;
    searchTexture: Texture;
    uniformsEdges: { [uniform: string]: IUniform };
    materialEdges: ShaderMaterial;
    uniformsWeights: { [uniform: string]: IUniform };
    materialWeights: ShaderMaterial;
    uniformsBlend: { [uniform: string]: IUniform };
    materialBlend: ShaderMaterial;
    needsSwap: false;
    camera: OrthographicCamera;
    scene: Scene;
    quad: Mesh;

    getAreaTexture(): string;
    getSearchTexture(): string;
}

