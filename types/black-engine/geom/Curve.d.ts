export class Curve {
    static lerp(
        t: number,
        startX: number,
        startY: number,
        cpStartX: number,
        cpStartY: number,
        cpEndX: number,
        cpEndY: number,
        endX: number,
        endY: number,
        outVector?: Vector,
    ): Vector;
    static getLength(...points: number[]): number;
    private mPoints;
    private mLookup;
    private mBaked;
    private mStep;
    private mEachT;
    set(...points: number[]): Curve;
    set baked(arg: boolean);
    get baked(): boolean;
    private __initPoints;
    private __refreshCache;
    private __refreshEachT;
    interpolate(t: number, outVector?: Vector): Vector;
    getFullLength(): number;
}
export namespace Curve {
    const __cache: Curve;
}
import { Vector } from './Vector';
