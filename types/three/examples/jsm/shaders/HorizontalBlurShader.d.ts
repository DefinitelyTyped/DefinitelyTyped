import { IUniform } from '../../../src/Three';

export const HorizontalBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        h: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
