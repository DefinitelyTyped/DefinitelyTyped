import { IUniform } from '../../../src/Three.js';

export const TechnicolorShader: {
    uniforms: {
        tDiffuse: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
