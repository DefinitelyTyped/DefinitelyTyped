import { IUniform } from '../../../src/Three';

export const VerticalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        v: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
