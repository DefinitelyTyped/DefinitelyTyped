import { IUniform } from '../../../src/Three';

export const FreiChenShader: {
    uniforms: {
        tDiffuse: IUniform;
        aspect: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
