type Matrix4_2D = [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
];
type Matrix4 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
];

type Matrix3_2D = [[number, number, number], [number, number, number], [number, number, number]];
type Matrix3 = [number, number, number, number, number, number, number, number, number];

type QuaternionRecord =
    & { w?: number; x?: number; y?: number; z?: number }
    & (
        | { w: number }
        | { x: number }
        | { y: number }
        | { z: number }
    );
interface QuaternionComplexRecord {
    re: number;
    im: number;
}
type QuaternionArray = [number, number, number, number];
type QuaternionAugmentedArray = [number, number, number];

type AnyQuaternionArray = QuaternionArray | QuaternionAugmentedArray;

declare class Quaternion {
    constructor(w?: number, x?: number, y?: number, z?: number);
    constructor(quaternion: string | AnyQuaternionArray | QuaternionRecord);
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    constructor(quaternion: QuaternionComplexRecord);

    w: number;
    x: number;
    y: number;
    z: number;

    add(w: number, x?: number, y?: number, z?: number): Quaternion;
    add(quaternion: string | AnyQuaternionArray | QuaternionRecord): Quaternion;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    add(quaternion: QuaternionComplexRecord): Quaternion;

    sub(w: number, x?: number, y?: number, z?: number): Quaternion;
    sub(quaternion: string | AnyQuaternionArray | QuaternionRecord): Quaternion;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    sub(quaternion: QuaternionComplexRecord): Quaternion;

    neg: () => Quaternion;
    norm: () => number;
    normSq: () => number;
    normalize: () => Quaternion;

    mul(w: number, x?: number, y?: number, z?: number): Quaternion;
    mul(quaternion: string | AnyQuaternionArray | QuaternionRecord): Quaternion;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    mul(quaternion: QuaternionComplexRecord): Quaternion;

    scale: (s: number) => Quaternion;

    dot(w: number, x?: number, y?: number, z?: number): number;
    dot(quaternion: string | AnyQuaternionArray | QuaternionRecord): number;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    dot(quaternion: QuaternionComplexRecord): number;

    inverse: () => Quaternion;

    div(w: number, x?: number, y?: number, z?: number): Quaternion;
    div(quaternion: string | AnyQuaternionArray | QuaternionRecord): Quaternion;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    div(quaternion: QuaternionComplexRecord): Quaternion;

    conjugate: () => Quaternion;
    exp: () => Quaternion;
    log: () => Quaternion;

    pow(w: number, x?: number, y?: number, z?: number): Quaternion;
    pow(quaternion: string | AnyQuaternionArray | QuaternionRecord): Quaternion;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    pow(quaternion: QuaternionComplexRecord): Quaternion;

    equals(w: number, x?: number, y?: number, z?: number): boolean;
    equals(quaternion: string | AnyQuaternionArray | QuaternionRecord): boolean;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord  and QuaternionComplexRecord fields
    equals(quaternion: QuaternionComplexRecord): boolean;

    isFinite: () => boolean;
    isNaN: () => boolean;
    toString: () => string;
    real: () => number;
    imag: () => [number, number, number];
    toVector: () => [number, number, number, number];
    toMatrix: <T extends boolean>(twoD: T) => T extends true ? Matrix3_2D : Matrix3;
    toMatrix4: <T extends boolean>(twoD: T) => T extends true ? Matrix4_2D : Matrix4;
    toEuler: () => {
        roll: number;
        pitch: number;
        yaw: number;
    };
    clone: () => Quaternion;
    rotateVector: (v: [number, number, number]) => [number, number, number];

    slerp(w: number, x?: number, y?: number, z?: number): (pct: number) => Quaternion;
    slerp(quaternion: string | AnyQuaternionArray | QuaternionRecord): (pct: number) => Quaternion;
    // tslint:disable-next-line:unified-signatures Avoid union of QuaternionRecord and QuaternionComplexRecord fields
    slerp(quaternion: QuaternionComplexRecord): (pct: number) => Quaternion;
}

declare namespace Quaternion {
    const Quaternion: Quaternion;

    const ZERO: Quaternion;
    const ONE: Quaternion;
    const I: Quaternion;
    const J: Quaternion;
    const K: Quaternion;
    const EPSILON: number;

    function fromAxisAngle(axis: [number, number, number], angle: number): Quaternion;
    function fromBetweenVectors(u: [number, number, number], v: [number, number, number]): Quaternion;
    function random(): Quaternion;
    function fromEuler(phi: number, theta: number, psi: number, order?: string): Quaternion;
}

export = Quaternion;
