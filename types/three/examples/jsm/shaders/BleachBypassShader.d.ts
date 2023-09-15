import { IUniform } from '../../../src/Three.js';

export const BleachBypassShader: {
    uniforms: {
        tDiffuse: IUniform;
        opacity: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
