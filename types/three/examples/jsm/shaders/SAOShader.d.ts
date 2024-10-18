import { IUniform } from "three";

export const SAOShader: {
    name: string;
    defines: {
        NUM_SAMPLES: number;
        NUM_RINGS: number;
        DIFFUSE_TEXTURE: number;
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
