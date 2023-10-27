import { IUniform } from '../../../src/Three.js';

export const LuminosityShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
