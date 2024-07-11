import { IUniform } from "three";

export const GammaCorrectionShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
