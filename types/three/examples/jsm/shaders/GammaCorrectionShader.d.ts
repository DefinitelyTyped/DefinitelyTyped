import { IUniform } from '../../../src/Three';

export const GammaCorrectionShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
