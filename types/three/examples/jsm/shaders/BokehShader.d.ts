import { IUniform } from '../../../src/Three.js';

export const BokehShader: {
    defines: {
        DEPTH_PACKING: number;
        PERSPECTIVE_CAMERA: number;
    };
    uniforms: {
        tColor: IUniform;
        tDepth: IUniform;
        focus: IUniform;
        aspect: IUniform;
        aperture: IUniform;
        maxblur: IUniform;
        nearClip: IUniform;
        farClip: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
