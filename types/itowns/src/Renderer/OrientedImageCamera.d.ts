import * as THREE from "three";

// declare class Distortion {
//     constructor(size: any);
//     size: any;
//     pps: THREE.Vector2 | null;
//     polynom: THREE.Vector4 | null;
//     l1l2: THREE.Vector3 | null;
//     setFromMicmacCalibration(distortion: any, imageYDown?: boolean): void;
//     clone(): Distortion;
// }

declare class OrientedImageCamera extends THREE.PerspectiveCamera {
    constructor(
        size?: number | THREE.Vector2,
        focal?: number | THREE.Vector2,
        center?: THREE.Vector2,
        near?: number,
        far?: number,
        skew?: number,
        aspect?: number,
    );

    size: THREE.Vector2;
    focal: THREE.Vector2;
    center: THREE.Vector2;
    skew: number;
    textureMatrixWorldInverse: THREE.Matrix4;
    fov: number;
    distortion: /* Distortion */ any; // TODO
    maskPath?: any;
    mask?: any;
}

export default OrientedImageCamera;
