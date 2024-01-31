import { IUniform } from "../../../src/Three.js";

export const BrightnessContrastShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        brightness: IUniform;
        contrast: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
