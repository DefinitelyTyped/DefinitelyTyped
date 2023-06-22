import { IUniform } from '../../../src/Three';

export const ColorifyShader: {
    uniforms: {
        tDiffuse: IUniform;
        color: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
