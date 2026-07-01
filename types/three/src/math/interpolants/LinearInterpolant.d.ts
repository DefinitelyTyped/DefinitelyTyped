import { TypedArray } from "../../core/BufferAttribute.js";
import { Interpolant } from "../Interpolant.js";

/**
 * A basic linear interpolant.
 *
 * @augments Interpolant
 */
export class LinearInterpolant extends Interpolant {
    interpolate_(i1: number, t0: number, t: number, t1: number): TypedArray;
}
