import Vector3D from "../math/Vector3D";
import Zone from "./Zone";

export default class LineZone extends Zone {
    /**
     * LineZone is a 3d line zone
     * @example
     * var lineZone = new System.LineZone(0,0,0,100,100,0);
     * or
     * var lineZone = new System.LineZone(new System.Vector3D(0,0,0),new System.Vector3D(100,100,0));
     */
    constructor(x1: VectorOrNumber, y1: VectorOrNumber, z1?: number, x2?: number, y2?: number, z2?: number);
    /**
     * Returns true to indicate this is a LineZone.
     */
    isLineZone(): boolean;

    getPosition(): Vector3D;
}

export type VectorOrNumber = Vector3D | number;
