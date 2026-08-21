/*
 * @format
 */

declare class Vector3d {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    get length(): number;
    plus(v: Vector3d): Vector3d;
    minus(v: Vector3d): Vector3d;
    times(x: number): Vector3d;
    dividedBy(x: number): Vector3d;
    dot(v: Vector3d): number;
    cross(v: Vector3d): Vector3d;
    negate(): Vector3d;
    unit(): Vector3d;
    angleTo(v: Vector3d, n?: Vector3d): number;
    rotateAround(axis: Vector3d, angle: number): Vector3d;
    toString(dp?: number): string;
}

export default Vector3d;
