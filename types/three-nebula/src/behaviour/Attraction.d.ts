import Particle from '../core/Particle';
import { Easing, EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import { Vector3D } from '../math';
import Behaviour from './Behaviour';
import { DEFAULT_BEHAVIOUR_EASING } from './constants';

/**
 * Behaviour that causes particles to be attracted to a target position.
 *
 */
export default class Attraction extends Behaviour {
    /**
     * Constructs an Attraction behaviour instance.
     *
     * @param {Vector3D} targetPosition - The position the particles will be attracted to
     * @param {?number} force - The attraction force scalar multiplier
     * @param {?number} radius - The attraction radius
     * @param {?number} [life=DEFAULT_LIFE] - The life of the particle
     * @param {?function} [easing=DEFAULT_BEHAVIOUR_EASING] - The behaviour's decaying trend
     * @param {?boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(
        targetPosition: Vector3D,
        force?: number,
        radius?: number,
        life?: number,
        easing?: keyof Easing | typeof DEFAULT_BEHAVIOUR_EASING,
        isEnabled?: boolean,
    );

    /**
     * @description The position the particles will be attracted to
     * @type {Vector3D}
     */
    targetPosition: Vector3D;

    /**
     * @description The attraction radius
     * @type {number} - the attraction radius
     */
    radius: number;

    /**
     * @description The attraction force scalar multiplier
     * @type {number}
     */
    force: number;

    /**
     * @description The radius of the attraction squared
     * @type {number}
     */
    radiusSq: number;

    /**
     * @description The attraction force in 3D space
     * @type {Vector3D}
     */
    attractionForce: Vector3D;

    /**
     * @description The linear attraction force
     * @type {number}
     */
    lengthSq: 0;

    /**
     * Resets the behaviour properties.
     *
     * @param {Vector3D} targetPosition - the position the particles will be attracted to
     * @param {?number} force - the attraction force multiplier
     * @param {?number} radius - the attraction radius
     * @param {?number} life - the life of the particle
     * @param {?function} easing - The behaviour's decaying trend
     * @return void
     */
    reset(targetPosition: Vector3D, force?: number, radius?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;
    /**
     * Mutates particle acceleration.
     *
     * @param {Particle} particle - the particle to apply the behaviour to
     * @param {number} time - particle engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.x - The target position x value
     * @property {number} json.y - The target position y value
     * @property {number} json.z - The target position z value
     * @property {number} json.force - The attraction force scalar multiplier
     * @property {number} json.life - The life of the particle
     * @property {string} json.easing - The behaviour's decaying trend
     * @return {Body}
     */
    static fromJSON(json: JSONObject): Attraction;
}
