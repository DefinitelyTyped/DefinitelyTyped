import { IUniform } from '../../../src/Three.js';

export const FreiChenShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        aspect: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
