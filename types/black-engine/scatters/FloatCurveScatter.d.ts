export class FloatCurveScatter extends FloatScatterBase {
    constructor(...points: number[]);
    private mCurve;
    private mPointsCache;
    private mCache;
    set points(arg: number[]);
    get points(): number[];
    getValueAt(t: number): number;
    value: number;
}
import { FloatScatterBase } from './FloatScatterBase';
