import { IUniform } from "../../../src/Three.js";

export const VerticalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
