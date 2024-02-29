/* tslint:disable-next-line:no-unnecessary-class */
export class MathEx {
    static randomBetween(a: number, b: number): number;
    static clamp(value: number, min: number, max: number): number;
    static distance(x1: number, y1: number, x2: number, y2: number): number;
    static distanceSqr(x1: number, y1: number, x2: number, y2: number): number;
    static angleBetween(x1: number, y1: number, x2: number, y2: number): number;
    static mapRange(value: number, fromA: number, fromB: number, toA: number, toB: number): number;
    static lerp(a: number, b: number, t: number): number;
    static equals(a: number, b: number, epsilon?: number): boolean;
}
export namespace MathEx {
    const PI_Q: number;
    const PI2: number;
    const DEG2RAD: number;
    const RAD2DEG: number;
}
