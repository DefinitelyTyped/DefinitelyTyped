import { MATH_TYPE_POLAR_3D } from "./types";
import Vector3D from "./Vector3D";

export default class Polar3D {
    constructor(radius?: number, theta?: number, phi?: number);
    /**
     * @description The class type.
     */
    type: typeof MATH_TYPE_POLAR_3D;
    radius: number;
    phi: number;
    theta: number;
    set(radius: number, theta: number, phi: number): Polar3D;
    setRadius(radius: number): Polar3D;
    setPhi(phi: number): Polar3D;
    setTheta(theta: number): Polar3D;
    copy(p: Polar3D): Polar3D;
    toVector3D(): Vector3D;
    getX(): number;
    getY(): number;
    getZ(): number;
    normalize(): Polar3D;
    equals(v: number): boolean;
    clear(): Polar3D;
    clone(): Polar3D;
}
