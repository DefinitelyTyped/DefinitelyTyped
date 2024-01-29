import { IUniform } from '../../../src/Three.js';

export const RGBShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        amount: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
