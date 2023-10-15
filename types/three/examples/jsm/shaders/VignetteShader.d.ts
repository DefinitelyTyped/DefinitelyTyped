import { IUniform } from '../../../src/Three.js';

export const VignetteShader: {
    uniforms: {
        tDiffuse: IUniform;
        offset: IUniform;
        darkness: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
