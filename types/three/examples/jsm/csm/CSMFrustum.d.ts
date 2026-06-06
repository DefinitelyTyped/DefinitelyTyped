import { Matrix4, Vector3 } from "three";

export interface CSMFrustumVerticies {
    near: Vector3[];
    far: Vector3[];
}

export interface CSMFrustumParameters {
    webGL?: boolean;
    projectionMatrix?: Matrix4;
    maxFar?: number;
}

declare class CSMFrustum {
    zNear: number;
    vertices: CSMFrustumVerticies;

    constructor(data?: CSMFrustumParameters);

    setFromProjectionMatrix(projectionMatrix: Matrix4, maxFar: number): CSMFrustumVerticies;
    split(breaks: number[], target: CSMFrustum[]): void;
    toSpace(cameraMatrix: Matrix4, target: CSMFrustum): void;
}

export { CSMFrustum };
