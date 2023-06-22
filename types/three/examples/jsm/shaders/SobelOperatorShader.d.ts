import { IUniform } from '../../../src/Three';

export const SobelOperatorShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
