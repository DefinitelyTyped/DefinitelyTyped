import { IUniform } from '../../../src/Three.js';

export const OutputShader: {
    uniforms: {
        tDiffuse: IUniform;
        toneMappingExposure: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
