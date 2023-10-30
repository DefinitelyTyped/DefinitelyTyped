import { IUniform } from '../../../src/Three.js';

export const SMAAEdgesShader: {
    name: string;
    defines: {
        SMAA_THRESHOLD: string;
    };
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const SMAAWeightsShader: {
    name: string;
    defines: {
        SMAA_MAX_SEARCH_STEPS: string;
        SMAA_AREATEX_MAX_DISTANCE: string;
        SMAA_AREATEX_PIXEL_SIZE: string;
        SMAA_AREATEX_SUBTEX_SIZE: string;
    };
    uniforms: {
        tDiffuse: IUniform;
        tArea: IUniform;
        tSearch: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const SMAABlendShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        tColor: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
