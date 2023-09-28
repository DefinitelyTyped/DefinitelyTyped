import { IUniform } from '../../../src/Three.js';

export const HueSaturationShader: {
    uniforms: {
        tDiffuse: IUniform;
        hue: IUniform;
        saturation: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
