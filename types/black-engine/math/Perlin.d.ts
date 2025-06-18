export class Perlin {
    constructor(repeat?: number);
    mRepeat: number;
    mPerm: number[];
    __perlin(x: any, y: any, z: any): number;
    perlin(x: any, y: any, z: any, octaves?: number, persistence?: number): number;
    inc(num: any): any;
    grad(hash: any, x: any, y: any, z: any): any;
    lerp(a: any, b: any, t: any): any;
}
