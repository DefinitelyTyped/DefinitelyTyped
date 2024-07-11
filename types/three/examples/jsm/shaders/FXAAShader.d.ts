import { IUniform } from "three";

export const FXAAShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
