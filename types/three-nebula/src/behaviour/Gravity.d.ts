import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Force from './Force';

/**
 * Behaviour that forces particles down the y axis.
 *
 */
export default class Gravity extends Force {
    /**
     * Constructs a Gravity behaviour instance.
     *
     * @param {number} gravity - the force to pull the particle down the y axis
     * @param {number} life - the life of the particle
     * @param {string} easing - the easing equation to use
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(gravity?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);
    /**
     * @description The class type.
     * @type {string}
     */
    type: string;
    static fromJSON(json: JSONObject): Gravity;
}
