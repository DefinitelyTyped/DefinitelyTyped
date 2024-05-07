import { Vector3D } from "../math";
import Zone from "./Zone";

export default class PointZone extends Zone {
    /**
     * PointZone is a point zone
     * @example
     * var pointZone = new System.PointZone(0,30,10);
     * or
     * var pointZone = new System.PointZone(new System.Vector3D(0,30,10));
     */
    constructor(a?: NumberOrVector, b?: number, c?: number);
    /**
     * Returns true to indicate this is a PointZone.
     */
    isPointZone(): boolean;
    getPosition(): Vector3D;
}

export type NumberOrVector = number | Vector3D;
