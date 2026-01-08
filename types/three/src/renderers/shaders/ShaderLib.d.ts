import { IUniform } from "./UniformsLib.js";

export interface ShaderLibShader {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
}

declare const ShaderLib: {
    [name: string]: ShaderLibShader;
    basic: ShaderLibShader;
    lambert: ShaderLibShader;
    phong: ShaderLibShader;
    standard: ShaderLibShader;
    matcap: ShaderLibShader;
    points: ShaderLibShader;
    dashed: ShaderLibShader;
    depth: ShaderLibShader;
    normal: ShaderLibShader;
    sprite: ShaderLibShader;
    background: ShaderLibShader;
    cube: ShaderLibShader;
    equirect: ShaderLibShader;
    distance: ShaderLibShader;
    shadow: ShaderLibShader;
    physical: ShaderLibShader;
};

export { ShaderLib };
