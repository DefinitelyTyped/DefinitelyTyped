import { ShaderMaterial, WebGLRenderTarget } from "three";

import { Pass } from "./Pass.js";

export class SavePass extends Pass {
    constructor(renderTarget?: WebGLRenderTarget);
    textureID: string;
    renderTarget: WebGLRenderTarget;
    uniforms: object;
    material: ShaderMaterial;
}
