import { IUniform } from "three";

export const SepiaShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
