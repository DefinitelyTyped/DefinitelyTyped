import { IUniform } from '../../../src/Three.js';

export const UnpackDepthRGBAShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
