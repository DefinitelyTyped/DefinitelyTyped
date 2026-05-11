/// <reference types= "node" />

import BigInteger = require("bigi");

export class Curve {
    p: BigInteger;
    a: BigInteger;
    b: BigInteger;
    G: Point;
    n: BigInteger;
    h: BigInteger;
    constructor(
        p: BigInteger,
        a: BigInteger,
        b: BigInteger,
        Gx: BigInteger,
        Gy: BigInteger,
        n: BigInteger,
        h: BigInteger,
    );
    isInfinity(Q: any): boolean;
    isOnCurve(Q: any): boolean;
    pointFromX(isOdd: boolean, x: Point): Point;
    validate(Q: any): boolean;
}
export class Point {
    x: BigInteger;
    y: BigInteger;
    z: BigInteger;
    affineX: BigInteger;
    affineY: BigInteger;
    constructor(curve: Curve, x: BigInteger, y: BigInteger, z: BigInteger);
    add(b: Point): Point;
    equals(other: Point): boolean;
    getEncoded(compressed?: boolean): Buffer;
    multiply(k: any): Point;
    multiplyTwo(j: any, x: any, k: any): Point;
    negate(): Point;
    toString(): string;
    twice(): Point;
    static decodeFrom(curve: Curve, buffer: Buffer): any;
    static fromAffine(curve: Curve, x: BigInteger, y: BigInteger): Point;
}
export function getCurveByName(name: string): Curve;
