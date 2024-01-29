import { IUniform } from '../../../src/Three.js';

export const UnpackDepthRGBAShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
