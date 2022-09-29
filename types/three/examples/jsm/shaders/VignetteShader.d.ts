import { IUniform } from '../../../src/Three';

export const VignetteShader: {
    uniforms: {
        tDiffuse: IUniform;
        offset: IUniform;
        darkness: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
