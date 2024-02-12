import { IUniform } from "./UniformsLib.js";

export interface ShaderLibShader {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
}

export let ShaderLib: {
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
    distanceRGBA: ShaderLibShader;
    shadow: ShaderLibShader;
    physical: ShaderLibShader;
};
