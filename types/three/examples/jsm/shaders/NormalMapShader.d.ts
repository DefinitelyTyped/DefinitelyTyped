import { IUniform } from '../../../src/Three.js';

export const NormalMapShader: {
    uniforms: {
        heightMap: IUniform;
        resolution: IUniform;
        scale: IUniform;
        height: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
