import { IUniform, Matrix4, Vector2 } from "../../../src/Three.js";

export const PoissonDenoiseShader: {
    name: string;
    defines: {
        SAMPLES: number;
        SAMPLE_VECTORS: string;
        NORMAL_VECTOR_TYPE: number;
        DEPTH_VALUE_SOURCE: number;
    };
    uniforms: {
        tDiffuse: IUniform;
        tNormal: IUniform;
        tDepth: IUniform;
        tNoise: IUniform;
        resolution: IUniform<Vector2>;
        cameraProjectionMatrixInverse: IUniform<Matrix4>;
        lumaPhi: IUniform<number>;
        depthPhi: IUniform<number>;
        normalPhi: IUniform<number>;
        radius: IUniform<number>;
        index: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};

export function generatePdSamplePointInitializer(samples: number, rings: number, radiusExponent: number): string;
