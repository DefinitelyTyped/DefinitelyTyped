import { IUniform } from '../../../src/Three.js';

export const MirrorShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        side: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
