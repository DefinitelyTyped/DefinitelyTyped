import { IUniform } from '../../../src/Three.js';

export const BrightnessContrastShader: {
    uniforms: {
        tDiffuse: IUniform;
        brightness: IUniform;
        contrast: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
