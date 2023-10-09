import { IUniform } from '../../../src/Three.js';

export const FXAAShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
