import { Interpolant } from '../Interpolant.js';

export class LinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}
