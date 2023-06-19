import { Vector3D } from '../math';
import Zone from './Zone';

export default class PointZone extends Zone {
    /**
     * PointZone is a point zone
     * @param {Number|Vector3D?} x - the center's x value or a Vector3D Object
     * @param {Number?} y - the center's y value
     * @param {Number?} z - the center's z value
     * @example
     * var pointZone = new System.PointZone(0,30,10);
     * or
     * var pointZone = new System.PointZone(new System.Vector3D(0,30,10));
     * @extends {Zone}
     * @constructor
     */
    constructor(a?: NumberOrVector, b?: number, c?: number);
    /**
     * Returns true to indicate this is a PointZone.
     *
     * @return {boolean}
     */
    isPointZone(): boolean;
    getPosition(): Vector3D;
}

type NumberOrVector = number | Vector3D;
