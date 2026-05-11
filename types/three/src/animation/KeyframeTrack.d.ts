import { InterpolationModes } from "../constants.js";
import { TypedArray, TypedArrayConstructor } from "../core/BufferAttribute.js";
import { BezierInterpolant } from "../math/interpolants/BezierInterpolant.js";
import { CubicInterpolant } from "../math/interpolants/CubicInterpolant.js";
import { DiscreteInterpolant } from "../math/interpolants/DiscreteInterpolant.js";
import { LinearInterpolant } from "../math/interpolants/LinearInterpolant.js";

export interface KeyframeTrackJSON {
    name: string;
    times: number[];
    values: number[];
    interpolation?: InterpolationModes;
    type: string;
}

/**
 * Represents a timed sequence of keyframes, which are composed of lists of
 * times and related values, and which are used to animate a specific property
 * of an object.
 */
export class KeyframeTrack {
    /**
     * Converts the keyframe track to JSON.
     *
     * @static
     * @param {KeyframeTrack} track - The keyframe track to serialize.
     * @return {Object} The serialized keyframe track as JSON.
     */
    static toJSON(track: KeyframeTrack): KeyframeTrackJSON;
    /**
     * Constructs a new keyframe track.
     *
     * @param {string} name - The keyframe track's name.
     * @param {Array<number>} times - A list of keyframe times.
     * @param {Array<number|string|boolean>} values - A list of keyframe values.
     * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth|InterpolateBezier)} [interpolation] - The interpolation type.
     */
    constructor(
        name: string,
        times: ArrayLike<number>,
        values: ArrayLike<number | string | boolean>,
        interpolation?: InterpolationModes,
    );
    /**
     * The track's name can refer to morph targets or bones or
     * possibly other values within an animated object. See {@link PropertyBinding#parseTrackName}
     * for the forms of strings that can be parsed for property binding.
     */
    name: string;
    /**
     * The keyframe times.
     */
    times: Float32Array;
    /**
     * The keyframe values.
     */
    values: Float32Array;
    /**
     * Factory method for creating a new discrete interpolant.
     *
     * @static
     * @param {TypedArray} [result] - The result buffer.
     * @return {DiscreteInterpolant} The new interpolant.
     */
    InterpolantFactoryMethodDiscrete(result?: TypedArray): DiscreteInterpolant;
    /**
     * Factory method for creating a new linear interpolant.
     *
     * @static
     * @param {TypedArray} [result] - The result buffer.
     * @return {LinearInterpolant} The new interpolant.
     */
    InterpolantFactoryMethodLinear(result?: TypedArray): LinearInterpolant;
    /**
     * Factory method for creating a new smooth interpolant.
     *
     * @static
     * @param {TypedArray} [result] - The result buffer.
     * @return {CubicInterpolant} The new interpolant.
     */
    InterpolantFactoryMethodSmooth(result?: TypedArray): CubicInterpolant;
    /**
     * Factory method for creating a new Bezier interpolant.
     *
     * The Bezier interpolant requires tangent data to be set via the `settings` property
     * on the track before creating the interpolant. The settings should contain:
     * - `inTangents`: Float32Array with [time, value] pairs per keyframe per component
     * - `outTangents`: Float32Array with [time, value] pairs per keyframe per component
     *
     * @static
     * @param {TypedArray} [result] - The result buffer.
     * @return {BezierInterpolant} The new interpolant.
     */
    InterpolantFactoryMethodBezier(result?: TypedArray): BezierInterpolant;
    /**
     * Defines the interpolation factor method for this keyframe track.
     *
     * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth|InterpolateBezier)} interpolation - The interpolation type.
     * @return {KeyframeTrack} A reference to this keyframe track.
     */
    setInterpolation(interpolation: InterpolationModes): KeyframeTrack;
    /**
     * Returns the current interpolation type.
     *
     * @return {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth|InterpolateBezier)} The interpolation type.
     */
    getInterpolation(): InterpolationModes;
    /**
     * Returns the value size.
     *
     * @return {number} The value size.
     */
    getValueSize(): number;
    /**
     * Moves all keyframes either forward or backward in time.
     *
     * @param {number} timeOffset - The offset to move the time values.
     * @return {KeyframeTrack} A reference to this keyframe track.
     */
    shift(timeOffset: number): KeyframeTrack;
    /**
     * Scale all keyframe times by a factor (useful for frame - seconds conversions).
     *
     * @param {number} timeScale - The time scale.
     * @return {KeyframeTrack} A reference to this keyframe track.
     */
    scale(timeScale: number): KeyframeTrack;
    /**
     * Removes keyframes before and after animation without changing any values within the defined time range.
     *
     * Note: The method does not shift around keys to the start of the track time, because for interpolated
     * keys this will change their values
     *
     * @param {number} startTime - The start time.
     * @param {number} endTime - The end time.
     * @return {KeyframeTrack} A reference to this keyframe track.
     */
    trim(startTime: number, endTime: number): KeyframeTrack;
    /**
     * Performs minimal validation on the keyframe track. Returns `true` if the values
     * are valid.
     *
     * @return {boolean} Whether the keyframes are valid or not.
     */
    validate(): boolean;
    /**
     * Optimizes this keyframe track by removing equivalent sequential keys (which are
     * common in morph target sequences).
     *
     * @return {KeyframeTrack} A reference to this keyframe track.
     */
    optimize(): this;
    /**
     * Returns a new keyframe track with copied values from this instance.
     *
     * @return {KeyframeTrack} A clone of this instance.
     */
    clone(): this;
    /**
     * The value type name.
     *
     * @default ''
     */
    ValueTypeName: string;
    /**
     * The time buffer type of this keyframe track.
     *
     * @default Float32Array.constructor
     */
    TimeBufferType: TypedArrayConstructor | ArrayConstructor;
    /**
     * The value buffer type of this keyframe track.
     *
     * @default Float32Array.constructor
     */
    ValueBufferType: TypedArrayConstructor | ArrayConstructor;
    /**
     * The default interpolation type of this keyframe track.
     *
     * @default InterpolateLinear
     */
    DefaultInterpolation: InterpolationModes;
}
