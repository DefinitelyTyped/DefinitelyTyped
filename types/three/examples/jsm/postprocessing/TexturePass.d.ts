import { IUniform, ShaderMaterial, Texture } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class TexturePass extends Pass {
    constructor(map?: Texture, opacity?: number);
    map: Texture | undefined;
    opacity: number;
    uniforms: Record<string, IUniform>;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
