import { IUniform } from '../../../src/Three';

export const VerticalTiltShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
