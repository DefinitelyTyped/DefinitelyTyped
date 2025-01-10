import * as THREE from "three";
import Camera from "../../Renderer/Camera";
import OBB from "../../Renderer/OBB";
import C3DTExtensions from "./C3DTExtensions";
import { C3DTilesTypes } from "./C3DTilesEnums";

interface BoundingBox {
    box: [
        number,
        number,
        number, // x, y and z values of the center of the box
        number,
        number,
        number, // x axis direction and half-length
        number,
        number,
        number, // y axis direction and half-length
        number,
        number,
        number, // z axis direction and half-length
    ];
}

interface BoundingRegion {
    region: [
        /* west */ number,
        /* south */ number,
        /* east */ number,
        /* north */ number,
        /* minimum height */ number,
        /* maximum height */ number,
    ];
}

interface BoundingSphere {
    sphere: [
        /* x */ number,
        /* y */ number,
        /* z */ number,
        /* center */ number,
    ];
}

export type BoundingVolume = BoundingBox | BoundingRegion | BoundingSphere;

declare class C3DTBoundingVolume {
    constructor(
        json: BoundingVolume,
        inverseTileTransform: THREE.Matrix4,
        registeredExtensions: C3DTExtensions,
    );

    readonly type: "boundingvolume";
    readonly initialVolume: "region" | "box" | "sphere";
    volume: /* THREE.Sphere | THREE.Box3 */ any;
    extensions: unknown;

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
