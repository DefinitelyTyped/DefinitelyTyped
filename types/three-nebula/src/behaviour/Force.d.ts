import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Behaviour from './Behaviour';
/**
 * Behaviour that forces particles along a specific axis.
 *
 */
export default class Force extends Behaviour {
    /**
     * Constructs a Force behaviour instance.
     *
     * @param {number?} fx - the x axis force
     * @param {number?} fy - the y axis force
     * @param {number?} fz - the z axis force
     * @param {number?} life - the life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     * @param {boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(fx?: number, fy?: number, fz?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Resets the behaviour properties.
     *
     * @param {number} fx - the x axis force
     * @param {number} fy - the y axis force
     * @param {number} fz - the z axis force
     */
    reset(fx?: number, fy?: number, fz?: number): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Mutates the particle.acceleration property.
     *
     * @param {object} particle - the particle to apply the behaviour to
     * @param {number} time - engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Force initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @return {Force}
     */
    static fromJSON(json: JSONObject): Force;
}
