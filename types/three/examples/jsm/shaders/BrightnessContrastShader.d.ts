import { IUniform } from '../../../src/Three';

export const BrightnessContrastShader: {
    uniforms: {
        tDiffuse: IUniform;
        brightness: IUniform;
        contrast: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
