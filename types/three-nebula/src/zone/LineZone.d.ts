import Vector3D from '../math/Vector3D';
import Zone from './Zone';

export default class LineZone extends Zone {
    /**
     * LineZone is a 3d line zone
     * @param {Number|Vector3D} x1 - the line's start point of x value or a Vector3D Object
     * @param {Number|Vector3D} y1 - the line's start point of y value or a Vector3D Object
     * @param {Number?} z1 - the line's start point of z value
     * @param {Number?} x2 - the line's end point of x value
     * @param {Number?} y2 - the line's end point of y value
     * @param {Number?} z2 - the line's end point of z value
     * @example
     * var lineZone = new System.LineZone(0,0,0,100,100,0);
     * or
     * var lineZone = new System.LineZone(new System.Vector3D(0,0,0),new System.Vector3D(100,100,0));
     * @extends {Zone}
     * @constructor
     */
    constructor(x1: VectorOrNumber, y1: VectorOrNumber, z1?: number, x2?: number, y2?: number, z2?: number);
    /**
     * Returns true to indicate this is a LineZone.
     *
     * @return {boolean}
     */
    isLineZone(): boolean;
    getPosition(): Vector3D;
}

type VectorOrNumber = Vector3D | number;
