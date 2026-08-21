import { TypedArray } from "../../core/BufferAttribute.js";
import { Interpolant } from "../Interpolant.js";

/**
 * Interpolant that evaluates to the sample value at the position preceding
 * the parameter.
 *
 * @augments Interpolant
 */
export class DiscreteInterpolant extends Interpolant {
    interpolate_(i1: number): TypedArray;
}
