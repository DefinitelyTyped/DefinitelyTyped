import { IUniform } from '../../../src/Three';

export const FXAAShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
