import { IUniform } from '../../../src/Three';

export const TechnicolorShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
