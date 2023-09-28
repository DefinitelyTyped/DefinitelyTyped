import { IUniform } from '../../../src/Three.js';

export const KaleidoShader: {
    uniforms: {
        tDiffuse: IUniform;
        sides: IUniform;
        angle: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
