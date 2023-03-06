import { IUniform } from '../../../src/Three';

export const HorizontalTiltShiftShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
        r: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
