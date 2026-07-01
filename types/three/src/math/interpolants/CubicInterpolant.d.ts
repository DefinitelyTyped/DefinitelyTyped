import { InterpolationEndingModes } from "../../constants.js";
import { TypedArray } from "../../core/BufferAttribute.js";
import { Interpolant } from "../Interpolant.js";

export interface CubicInterpolantSettings {
    endingStart: InterpolationEndingModes;
    endingEnd: InterpolationEndingModes;
}

/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 *
 * @augments Interpolant
 */
export class CubicInterpolant extends Interpolant<CubicInterpolantSettings> {
    intervalChanged_(i1: number, t0: number, t1: number): void;
    interpolate_(i1: number, t0: number, t: number, t1: number): TypedArray;
}
