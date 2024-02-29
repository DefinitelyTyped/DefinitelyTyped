import * as THREE from "three";
import Extent from "../Core/Geographic/Extent";

declare class OBB extends THREE.Object3D {
    constructor(min?: THREE.Vector3, max?: THREE.Vector3);

    box3D: THREE.Box3;
    natBox: THREE.Box3;
    z: {
        min: number;
        max: number;
        scale: number;
    };

    clone(): this;
    copy(cOBB: this): this;
    updateZ(elevation?: {
        min?: number;
        max?: number;
        scale?: number;
        geoidHeight?: number;
    }): void;
    isSphereAboveXYBox(sphere: THREE.Sphere): boolean;
    setFromExtent(extent: Extent, minHeight?: number, maxHeight?: number): this;
}

export default OBB;
