import { IUniform } from "three";

export const NormalMapShader: {
    name: string;
    uniforms: {
        heightMap: IUniform;
        resolution: IUniform;
        scale: IUniform;
        height: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
