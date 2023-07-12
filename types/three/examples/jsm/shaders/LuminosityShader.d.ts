import { IUniform } from '../../../src/Three.js';

export const LuminosityShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
