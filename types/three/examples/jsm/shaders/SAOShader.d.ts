import { IUniform } from '../../../src/Three';

export const SAOShader: {
    defines: {
        NUM_SAMPLES: number;
        NUM_RINGS: number;
        NORMAL_TEXTURE: number;
        DIFFUSE_TEXTURE: number;
        DEPTH_PACKING: number;
        PERSPECTIVE_CAMERA: number;
    };
    uniforms: {
        tDepth: IUniform;
        tDiffuse: IUniform;
        tNormal: IUniform;
        size: IUniform;
        cameraNear: IUniform;
        cameraFar: IUniform;
        cameraProjectionMatrix: IUniform;
        cameraInverseProjectionMatrix: IUniform;
        scale: IUniform;
        intensity: IUniform;
        bias: IUniform;
        minResolution: IUniform;
        kernelRadius: IUniform;
        randomSeed: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
