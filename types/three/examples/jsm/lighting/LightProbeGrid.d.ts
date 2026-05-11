import { Box3, Data3DTexture, Object3D, Scene, Vector3, WebGLRenderer } from "three";

export interface LightProbeGridBakeOptions {
    cubemapSize?: number | undefined;
    near?: number | undefined;
    far?: number | undefined;
}

declare class LightProbeGrid extends Object3D {
    readonly isLightProbeGrid: boolean;

    width: number;
    height: number;
    depth: number;
    resolution: Vector3;
    boundingBox: Box3;
    texture: Data3DTexture | null;

    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthProbes?: number,
        heightProbes?: number,
        depthProbes?: number,
    );

    getProbePosition(ix: number, iy: number, iz: number, target: Vector3): Vector3;
    updateBoundingBox(): void;
    bake(renderer: WebGLRenderer, scene: Scene, options?: LightProbeGridBakeOptions): void;
    dispose(): void;
}

export { LightProbeGrid };
