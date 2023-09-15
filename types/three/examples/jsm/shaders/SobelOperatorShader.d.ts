import { IUniform } from '../../../src/Three.js';

export const SobelOperatorShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
