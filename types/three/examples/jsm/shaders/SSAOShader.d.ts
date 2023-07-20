import { IUniform } from '../../../src/Three.js';

export const SSAOShader: {
    defines: {
        PERSPECTIVE_CAMERA: number;
        KERNEL_SIZE: number;
    };
    uniforms: {
        tDiffuse: IUniform;
        tNormal: IUniform;
        tDepth: IUniform;
        tNoise: IUniform;
        kernel: IUniform;
        cameraNear: IUniform;
        cameraFar: IUniform;
        resolution: IUniform;
        cameraProjectionMatrix: IUniform;
        cameraInverseProjectionMatrix: IUniform;
        kernelRadius: IUniform;
        minDistance: IUniform;
        maxDistance: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const SSAODepthShader: {
    defines: {
        PERSPECTIVE_CAMERA: number;
    };
    uniforms: {
        tDepth: IUniform;
        cameraNear: IUniform;
        cameraFar: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const SSAOBlurShader: {
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
