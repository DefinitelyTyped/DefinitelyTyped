import { IUniform } from '../../../src/Three.js';

export const KaleidoShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        sides: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
