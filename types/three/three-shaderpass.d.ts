import {
    OrthographicCamera,
    IUniform,
    Mesh,
    Scene,
    Shader,
    ShaderMaterial,
    WebGLRenderTarget,
    WebGLRenderer
} from "./three-core";
import { Pass } from "./three-effectcomposer";

export class ShaderPass extends Pass {
    constructor(shader: Shader, textureID?: string);

    textureID: string;
    uniforms: { [uniform: string]: IUniform };
    material: ShaderMaterial;
    camera: OrthographicCamera;
    scene: Scene;
    quad: Mesh;
}