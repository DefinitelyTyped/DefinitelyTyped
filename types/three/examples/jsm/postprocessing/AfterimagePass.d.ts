import { IUniform, ShaderMaterial, WebGLRenderTarget } from "../../../src/Three.js";

import { FullScreenQuad, Pass } from "./Pass.js";

export class AfterimagePass extends Pass {
    constructor(damp?: number);
    shader: object;
    uniforms: Record<string, IUniform>;
    textureComp: WebGLRenderTarget;
    textureOld: WebGLRenderTarget;
    shaderMaterial: ShaderMaterial;
    compFsQuad: FullScreenQuad;
    copyFsQuad: FullScreenQuad;
}
