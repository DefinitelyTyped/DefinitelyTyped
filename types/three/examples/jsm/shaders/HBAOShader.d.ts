import { IUniform, Matrix4, Vector2 } from '../../../src/Three.js';

export const HBAOShader: {
    name: string;
    defines: {
        PERSPECTIVE_CAMERA: number;
        SAMPLES: number;
        SAMPLE_VECTORS: string;
        NORMAL_VECTOR_TYPE: number;
        DEPTH_VALUE_SOURCE: number;
        SAMPLING_FROM_NOISE: number;
    };
    uniforms: {
        tNormal: IUniform;
        tDepth: IUniform;
        tNoise: IUniform;
        resolution: IUniform<Vector2>;
        cameraNear: IUniform;
        cameraFar: IUniform;
        cameraProjectionMatrix: IUniform<Matrix4>;
        cameraProjectionMatrixInverse: IUniform<Matrix4>;
        radius: IUniform<number>;
        distanceExponent: IUniform<number>;
        bias: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const HBAODepthShader: {
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

export function generateHaboSampleKernelInitializer(samples: number): string;
