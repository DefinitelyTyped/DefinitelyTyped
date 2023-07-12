import { IUniform } from '../../../src/Three.js';

export const TriangleBlurShader: {
    uniforms: {
        texture: IUniform;
        delta: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
