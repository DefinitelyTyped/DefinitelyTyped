import { ShaderMaterial } from "./ShaderMaterial.js";

/**
 * This class works just like {@link ShaderMaterial}, except that definitions
 * of built-in uniforms and attributes are not automatically prepended to the
 * GLSL shader code.
 *
 * `RawShaderMaterial` can only be used with {@link WebGLRenderer}.
 */
export class RawShaderMaterial extends ShaderMaterial {
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isRawShaderMaterial: boolean;
}
