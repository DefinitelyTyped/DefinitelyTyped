import { IUniform } from '../../../src/Three.js';

export const FreiChenShader: {
    uniforms: {
        tDiffuse: IUniform;
        aspect: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
