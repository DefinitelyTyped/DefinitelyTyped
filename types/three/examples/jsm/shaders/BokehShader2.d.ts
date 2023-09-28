import { IUniform } from '../../../src/Three.js';

export interface BokehShaderUniforms {
    textureWidth: IUniform;
    textureHeight: IUniform;
    focalDepth: IUniform;
    focalLength: IUniform;
    fstop: IUniform;
    tColor: IUniform;
    tDepth: IUniform;
    maxblur: IUniform;
    showFocus: IUniform;
    manualdof: IUniform;
    vignetting: IUniform;
    depthblur: IUniform;
    threshold: IUniform;
    gain: IUniform;
    bias: IUniform;
    fringe: IUniform;
    znear: IUniform;
    zfar: IUniform;
    noise: IUniform;
    dithering: IUniform;
    pentagon: IUniform;
    shaderFocus: IUniform;
    focusCoords: IUniform;
}

export const BokehShader: {
    uniforms: BokehShaderUniforms;
    vertexShader: string;
    fragmentShader: string;
};

export const BokehDepthShader: {
    uniforms: {
        mNear: IUniform;
        mFar: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
