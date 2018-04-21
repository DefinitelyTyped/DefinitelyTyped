// Type definitions for gl-shader
// Project: https://github.com/stackgl/gl-shader
// Definitions by: Mathias Paumgarten <https://github.com/MathiasPaumgarten>
// Definitions: https://github.com/MathiasPaumgarten/DefinitelyTyped

interface Attribute {
    type: string;
    name: string;
}

declare class Shader {
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    vertShader: WebGLShader;
    fragShader: WebGLShader;

    readonly uniforms: { [key: string]: any }
    readonly attributes: { [key: string]: any }

    constructor( gl: WebGLRenderingContext );

    bind(): void;
    dispose(): void;
    update( vertex: string, fragment: string ): void;
    update( vertex: string, fragment: string, uniforms: Attribute[] ): void;
    update( vertex: string, fragment: string, uniforms: Attribute[], attributes: Attribute[] ): void;
}

declare function createShader(
    gl: WebGLRenderingContext,
    vertex: string,
    fragment: string,
    uniforms?: Attribute[],
    attributes?: Attribute[] ): Shader;

declare module "gl-shader" {
    export = createShader;
}
