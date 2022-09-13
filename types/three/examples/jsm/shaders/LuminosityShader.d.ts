import { IUniform } from '../../../src/Three';

export const LuminosityShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
