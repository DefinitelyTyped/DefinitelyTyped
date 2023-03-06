export class Vector {
    static fromAngle(angle: number, outVector?: Vector): Vector;
    static randomRange(vectorMin: Vector, vectorMax: Vector, outVector?: Vector): Vector;
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    set(x?: number, y?: number): Vector;
    add(vector: Vector): Vector;
    subtract(vector: Vector): Vector;
    distance(vector: Vector): number;
    distanceSqr(vector: Vector): number;
    multiply(vector: Vector): Vector;
    multiplyScalar(scalar: number): Vector;
    dot(vector: Vector): number;
    length(): number;
    lengthSqr(): number;
    normalize(): Vector;
    clamp(min: number, max: number): Vector;
    clampLength(min: number, max: number): Vector;
    lerp(vector: Vector, t: number): Vector;
    copyTo(vector: Vector): Vector;
    copyFrom(vector: Vector): Vector;
    clone(): Vector;
    equals(vector: Vector, epsilon?: number): boolean;
    isEmpty(): boolean;
    setRotationFrom(vector: Vector, rotation: number): Vector;
    setRotation(rotation: number): Vector;
    angleBetween(vector: Vector): number;
    angle(): number;
    perp(): Vector;
    get random(): number;
    toString(digits?: number): string;
}
export namespace Vector {
    const __cache: Vector;
    const pool: ObjectPool;
}
import { ObjectPool } from '../utils/ObjectPool';
