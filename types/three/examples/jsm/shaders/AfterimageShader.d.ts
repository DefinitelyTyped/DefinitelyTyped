import { IUniform } from '../../../src/Three.js';

export const AfterimageShader: {
    uniforms: {
        damp: IUniform;
        tOld: IUniform;
        tNew: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
