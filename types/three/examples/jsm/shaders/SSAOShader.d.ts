import { IUniform } from "three";

export const SSAOShader: {
    name: string;
    defines: {
        PERSPECTIVE_CAMERA: number;
        KERNEL_SIZE: number;
    };
    uniforms: {
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
    name: string;
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
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        resolution: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
