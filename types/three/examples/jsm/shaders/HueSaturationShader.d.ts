import { IUniform } from '../../../src/Three';

export const HueSaturationShader: {
    uniforms: {
        tDiffuse: IUniform;
        hue: IUniform;
        saturation: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
