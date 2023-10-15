import * as THREE from "three";
import Camera from "../../Renderer/Camera";
import OBB from "../../Renderer/OBB";
import C3DTilesTypes from "./C3DTilesTypes";

declare class C3DTBoundingVolume {
    constructor(json: any, inverseTileTransform: any, registeredExtensions: any); // TODO

    type: C3DTilesTypes;
    region?: OBB;
    box?: THREE.Box3;
    sphere?: THREE.Sphere;
    extensions: any; // TODO

    initBoundingRegion(
        region: number[],
        inverseTileTransform: THREE.Matrix4,
    ): void;
    initBoundingBox(box: number[]): void;
    initBoundingSphere(sphere: number[]): void;
    boundingVolumeCulling(
        camera: Camera,
        tileMatrixWorld: THREE.Matrix4,
    ): boolean;
    viewerRequestVolumeCulling(
        camera: Camera,
        tileMatrixWorld: THREE.Matrix4,
    ): boolean;
}

export default C3DTBoundingVolume;
