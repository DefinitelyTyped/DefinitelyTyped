import { IUniform } from '../../../src/Three';

export const TriangleBlurShader: {
    uniforms: {
        texture: IUniform;
        delta: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
