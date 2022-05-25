export class Matrix {
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    private data;
    set(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix;
    translate(dx: number, dy: number): Matrix;
    setTranslation(x: number, y: number): Matrix;
    setRotation(theta: number, scale?: number): Matrix;
    rotate(angle: number): Matrix;
    scale(sx: number, sy: number): Matrix;
    skew(sx: any, sy: any): void;
    identity(): Matrix;
    get isIdentity(): boolean;
    prepend(b: Matrix): Matrix;
    append(b: Matrix): Matrix;
    transformXY(x: number, y: number, outVector?: Vector): Vector;
    transformDirectionXY(x: number, y: number, outVector?: Vector): Vector;
    transformVector(vector: Vector, outVector?: Vector): Vector;
    transformRect(rect: Rectangle, outRect: Rectangle | null): Rectangle;
    invert(): Matrix;
    __decompose(): number[];
    clone(): Matrix;
    copyTo(matrix: Matrix): Matrix;
    copyFrom(matrix: Matrix): Matrix;
    exactEquals(matrix: Matrix): boolean;
    equals(matrix: Matrix, epsilon?: number): boolean;
    get value(): Float32Array;
    toString(digits?: number): string;
}
export namespace Matrix {
    const __cache: Matrix;
    const __identity: Matrix;
    const pool: ObjectPool;
}
import { Vector } from './Vector';
import { Rectangle } from './Rectangle';
import { ObjectPool } from '../utils/ObjectPool';
