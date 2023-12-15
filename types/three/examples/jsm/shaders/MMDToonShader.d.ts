import { IUniform } from '../../../src/Three.js';

export const MMDToonShader: {
    name: string;
    defines: {
        TOON: boolean;
        MATCAP: boolean;
        MATCAP_BLENDING_ADD: boolean;
    };
    uniforms: {
        [key: string]: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
