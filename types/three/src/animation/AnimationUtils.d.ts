import { TypedArray, TypedArrayConstructor } from "../core/BufferAttribute.js";
import { isTypedArray } from "../utils.js";
import { AnimationClip } from "./AnimationClip.js";

/**
 * Converts an array to a specific type.
 *
 * @param {TypedArray|Array} array - The array to convert.
 * @param {TypedArray.constructor} type - The constructor of a typed array that defines the new type.
 * @return {TypedArray} The converted array.
 */
export function convertArray(array: TypedArray | number[], type: TypedArrayConstructor): TypedArray;
/**
 * Returns an array by which times and values can be sorted.
 *
 * @param {Array<number>} times - The keyframe time values.
 * @return {Array<number>} The array.
 */
export function getKeyframeOrder(times: Array<number>): Array<number>;
/**
 * Sorts the given array by the previously computed order via `getKeyframeOrder()`.
 *
 * @param {Array<number>} values - The values to sort.
 * @param {number} stride - The stride.
 * @param {Array<number>} order - The sort order.
 * @return {Array<number>} The sorted values.
 */
export function sortedArray(values: Array<number>, stride: number, order: Array<number>): Array<number>;
/**
 * Used for parsing AOS keyframe formats.
 *
 * @param {Array<number>} jsonKeys - A list of JSON keyframes.
 * @param {Array<number>} times - This array will be filled with keyframe times by this function.
 * @param {Array<number>} values - This array will be filled with keyframe values by this function.
 * @param {string} valuePropertyName - The name of the property to use.
 */
export function flattenJSON(
    jsonKeys: Array<number>,
    times: Array<number>,
    values: Array<number>,
    valuePropertyName: string,
): void;
/**
 * Creates a new clip, containing only the segment of the original clip between the given frames.
 *
 * @param {AnimationClip} sourceClip - The values to sort.
 * @param {string} name - The name of the clip.
 * @param {number} startFrame - The start frame.
 * @param {number} endFrame - The end frame.
 * @param {number} [fps=30] - The FPS.
 * @return {AnimationClip} The new sub clip.
 */
export function subclip(
    sourceClip: AnimationClip,
    name: string,
    startFrame: number,
    endFrame: number,
    fps?: number,
): AnimationClip;
/**
 * Converts the keyframes of the given animation clip to an additive format.
 *
 * @param {AnimationClip} targetClip - The clip to make additive.
 * @param {number} [referenceFrame=0] - The reference frame.
 * @param {AnimationClip} [referenceClip=targetClip] - The reference clip.
 * @param {number} [fps=30] - The FPS.
 * @return {AnimationClip} The updated clip which is now additive.
 */
export function makeClipAdditive(
    targetClip: AnimationClip,
    referenceFrame?: number,
    referenceClip?: AnimationClip,
    fps?: number,
): AnimationClip;
/**
 * A class with various methods to assist with animations.
 *
 * @hideconstructor
 */
export class AnimationUtils {
    /**
     * Converts an array to a specific type
     *
     * @static
     * @param {TypedArray|Array} array - The array to convert.
     * @param {TypedArray.constructor} type - The constructor of a type array.
     * @return {TypedArray} The converted array
     */
    static convertArray(array: TypedArray | number[], type: TypedArrayConstructor): TypedArray | number[];
    /**
     * Returns `true` if the given object is a typed array.
     *
     * @static
     * @param {any} object - The object to check.
     * @return {boolean} Whether the given object is a typed array.
     */
    static isTypedArray(object: unknown): boolean;
    /**
     * Returns an array by which times and values can be sorted.
     *
     * @static
     * @param {Array<number>} times - The keyframe time values.
     * @return {Array<number>} The array.
     */
    static getKeyframeOrder(times: Array<number>): Array<number>;
    /**
     * Sorts the given array by the previously computed order via `getKeyframeOrder()`.
     *
     * @static
     * @param {Array<number>} values - The values to sort.
     * @param {number} stride - The stride.
     * @param {Array<number>} order - The sort order.
     * @return {Array<number>} The sorted values.
     */
    static sortedArray(values: Array<number>, stride: number, order: Array<number>): Array<number>;
    /**
     * Used for parsing AOS keyframe formats.
     *
     * @static
     * @param {Array<number>} jsonKeys - A list of JSON keyframes.
     * @param {Array<number>} times - This array will be filled with keyframe times by this method.
     * @param {Array<number>} values - This array will be filled with keyframe values by this method.
     * @param {string} valuePropertyName - The name of the property to use.
     */
    static flattenJSON(
        jsonKeys: Array<number>,
        times: Array<number>,
        values: Array<number>,
        valuePropertyName: string,
    ): void;
    /**
     * Creates a new clip, containing only the segment of the original clip between the given frames.
     *
     * @static
     * @param {AnimationClip} sourceClip - The values to sort.
     * @param {string} name - The name of the clip.
     * @param {number} startFrame - The start frame.
     * @param {number} endFrame - The end frame.
     * @param {number} [fps=30] - The FPS.
     * @return {AnimationClip} The new sub clip.
     */
    static subclip(
        sourceClip: AnimationClip,
        name: string,
        startFrame: number,
        endFrame: number,
        fps?: number,
    ): AnimationClip;
    /**
     * Converts the keyframes of the given animation clip to an additive format.
     *
     * @static
     * @param {AnimationClip} targetClip - The clip to make additive.
     * @param {number} [referenceFrame=0] - The reference frame.
     * @param {AnimationClip} [referenceClip=targetClip] - The reference clip.
     * @param {number} [fps=30] - The FPS.
     * @return {AnimationClip} The updated clip which is now additive.
     */
    static makeClipAdditive(
        targetClip: AnimationClip,
        referenceFrame?: number,
        referenceClip?: AnimationClip,
        fps?: number,
    ): AnimationClip;
}
export { isTypedArray };
