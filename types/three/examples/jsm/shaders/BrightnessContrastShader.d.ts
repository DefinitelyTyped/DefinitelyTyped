import { IUniform } from "three";

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
