import { DataTexture, IUniform, Matrix4, Vector2, Vector3 } from "../../../src/Three.js";

export const GTAOShader: {
    name: string;
    defines: {
        PERSPECTIVE_CAMERA: number;
        SAMPLES: number;
        NORMAL_VECTOR_TYPE: number;
        DEPTH_SWIZZLING: string;
        SCREEN_SPACE_RADIUS: number;
        SCREEN_SPACE_RADIUS_SCALE: number;
        SCENE_CLIP_BOX: number;
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
        thickness: IUniform<number>;
        distanceFallOff: IUniform<number>;
        scale: IUniform<number>;
        sceneBoxMin: IUniform<Vector3>;
        sceneBoxMax: IUniform<Vector3>;
    };
    vertexShader: string;
    fragmentShader: string;
};

export const GTAODepthShader: {
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

export const GTAOBlendShader: {
    name: string;
    uniforms: {
        tDiffuse: IUniform;
        intensity: IUniform<number>;
    };
    vertexShader: string;
    fragmentShader: string;
};

export function generateMagicSquareNoise(samples?: number): DataTexture;
