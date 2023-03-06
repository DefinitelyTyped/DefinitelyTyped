import { IUniform } from '../../../src/Three';

export const UnpackDepthRGBAShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
