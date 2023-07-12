import { IUniform } from '../../../src/Three.js';

export const MirrorShader: {
    uniforms: {
        tDiffuse: IUniform;
        side: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
