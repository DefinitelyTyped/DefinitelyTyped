import { IUniform } from '../../../src/Three';

export const RGBShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
