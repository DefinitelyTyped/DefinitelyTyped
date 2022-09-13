export class VectorCurveScatter extends VectorScatterBase {
    constructor(...points: number[]);
    private mCurve;
    private mPointsCache;
    private mCache;
    set points(arg: number[]);
    get points(): number[];
    getValueAt(t: number): Vector;
}
import { VectorScatterBase } from './VectorScatterBase';
import { Vector } from '../geom/Vector';
