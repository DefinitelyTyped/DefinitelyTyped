import { IUniform } from '../../../src/Three.js';

export const ColorifyShader: {
    uniforms: {
        tDiffuse: IUniform;
        color: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
