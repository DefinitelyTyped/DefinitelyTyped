import { TypedArray } from "../../core/BufferAttribute.js";
import { Interpolant } from "../Interpolant.js";

/**
 * Spherical linear unit quaternion interpolant.
 *
 * @augments Interpolant
 */
export class QuaternionLinearInterpolant extends Interpolant {
    interpolate_(i1: number, t0: number, t: number, t1: number): TypedArray;
}
