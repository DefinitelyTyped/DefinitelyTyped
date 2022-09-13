import { IUniform } from '../../../src/Three';

export const MirrorShader: {
    uniforms: {
        tDiffuse: IUniform;
        side: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
