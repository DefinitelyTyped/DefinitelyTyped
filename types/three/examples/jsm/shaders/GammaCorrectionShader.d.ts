import { IUniform } from "../../../src/Three.js";

export const GammaCorrectionShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
