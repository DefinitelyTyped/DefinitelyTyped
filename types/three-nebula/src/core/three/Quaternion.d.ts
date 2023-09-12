import { Euler } from "./Euler";
import { Matrix4 } from "./Matrix4";
import { Vector3 } from "./Vector3";

/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
export class Quaternion {
    constructor(x?: number, y?: number, z?: number, w?: number);
    isQuaternion: boolean;
    set(x: number, y: number, z: number, w: number): Quaternion;
    clone(): Quaternion;
    copy(quaternion: Quaternion): Quaternion;
    setFromEuler(euler: Euler, update?: boolean): Quaternion;
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
    setFromRotationMatrix(m: Matrix4): Quaternion;
    setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
    angleTo(q: Quaternion): number;
    rotateTowards(q: Quaternion, step: number): Quaternion;
    inverse(): Quaternion;
    conjugate(): Quaternion;
    dot(v: Quaternion): number;
    lengthSq(): number;
    length(): number;
    normalize(): Quaternion;
    multiply(q: Quaternion): Quaternion;
    premultiply(q: Quaternion): Quaternion;
    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;
    slerp(qb: Quaternion, t: number): Quaternion;
    slerpQuaternions(qa: Quaternion, qb: Quaternion, t: number): Quaternion;
    equals(quaternion: Quaternion): boolean;
    fromArray(array: number[], offset?: number): Quaternion;
    toArray(array?: number[], offset?: number): number[];
    onChange(): void;
    _onChangeCallback(): void;
}
