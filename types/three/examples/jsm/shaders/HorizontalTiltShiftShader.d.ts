import { IUniform } from '../../../src/Three.js';

export const HorizontalTiltShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
