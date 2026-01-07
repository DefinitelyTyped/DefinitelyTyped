import { ArrayCamera } from "../cameras/ArrayCamera.js";
import { CoordinateSystem } from "../constants.js";
import { Object3D } from "../core/Object3D.js";
import { Sprite } from "../objects/Sprite.js";
import { Box3 } from "./Box3.js";
import { Sphere } from "./Sphere.js";
import { Vector3 } from "./Vector3.js";

declare class FrustumArray {
    coordinateSystem: CoordinateSystem;

    constructor();

    intersectsObject(object: Object3D, cameraArray: ArrayCamera): boolean;

    intersectsSprite(sprite: Sprite, cameraArray: ArrayCamera): boolean;

    intersectsSprite(sphere: Sphere, cameraArray: ArrayCamera): boolean;

    intersectsBox(box: Box3, cameraArray: ArrayCamera): boolean;

    containsPoint(point: Vector3, cameraArray: ArrayCamera): boolean;

    clone(): FrustumArray;
}

export { FrustumArray };
