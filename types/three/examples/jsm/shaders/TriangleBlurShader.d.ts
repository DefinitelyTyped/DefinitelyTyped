import { IUniform } from '../../../src/Three.js';

export const TriangleBlurShader: {
    name: string;
    uniforms: {
        texture: IUniform;
        delta: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
