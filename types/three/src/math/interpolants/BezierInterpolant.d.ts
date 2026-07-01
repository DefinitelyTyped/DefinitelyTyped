import { TypedArray } from "../../core/BufferAttribute.js";
import { Interpolant } from "../Interpolant.js";

/**
 * A Bezier interpolant using cubic Bezier curves with 2D control points.
 *
 * This interpolant supports the COLLADA/Maya style of Bezier animation where
 * each keyframe has explicit in/out tangent control points specified as
 * 2D coordinates (time, value).
 *
 * Tangent data is read from `inTangents` and `outTangents` on the interpolant
 * (populated by `KeyframeTrack.InterpolantFactoryMethodBezier`).
 *
 * For a track with N keyframes and stride S:
 * - Each tangent array has N * S * 2 values
 * - Layout: [k0_c0_time, k0_c0_value, k0_c1_time, k0_c1_value, ..., k0_cS_time, k0_cS_value,
 *            k1_c0_time, k1_c0_value, ...]
 *
 * @augments Interpolant
 */
export class BezierInterpolant extends Interpolant {
    interpolate_(i1: number, t0: number, t: number, t1: number): TypedArray;
}
