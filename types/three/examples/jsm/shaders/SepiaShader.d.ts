import { IUniform } from '../../../src/Three';

export const SepiaShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
