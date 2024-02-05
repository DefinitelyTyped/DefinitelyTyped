import { IUniform } from "../../../src/Three.js";

export const SepiaShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
