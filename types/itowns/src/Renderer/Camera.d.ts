import * as THREE from "three";
import Coordinates from "../Core/Geographic/Coordinates";

type CameraLike = THREE.OrthographicCamera | THREE.PerspectiveCamera;

export type CameraOptions =
    | { cameraThree: CameraLike }
    | { type: CAMERA_TYPE };

export enum CAMERA_TYPE {
    PERSPECTIVE = 0,
    ORTHOGRAPHIC = 1,
}

// type Camera3DType<T> =
//     T extends Camera ? T :
//     T extends CAMERA_TYPE.ORTHOGRAPHIC ? THREE.PerspectiveCamera :
//     T extends CAMERA_TYPE.PERSPECTIVE ? THREE.OrthographicCamera :
//     never

declare class Camera {
    constructor(
        crs: string,
        width: number,
        height: number,
        options?: CameraOptions,
    );

    crs: string;
    camera3D: CameraLike; // TODO: type wizardry =P
    width: number;
    height: number;

    resize(width: number, height: number): void;

    update(): void;

    position(crs?: string): Coordinates;

    setPosition(position: Coordinates): void;

    isBox3Visible(box3: THREE.Box3, matrixWorld: THREE.Matrix4): boolean;

    isSphereVisible(sphere: THREE.Sphere, matrixWorld: THREE.Matrix4): boolean;

    box3SizeOnScreen(box3: THREE.Box3, matrixWorld: THREE.Matrix4): THREE.Box3;

    // TODO adjustAltitudeToAvoidCollisionWithLayer(view: View, elevationLayer: ElevationLayer, minDistanceCollision: number): void;
}

export default Camera;
