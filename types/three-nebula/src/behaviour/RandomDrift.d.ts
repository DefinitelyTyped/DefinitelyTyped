import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Behaviour from './Behaviour';

/**
 * Behaviour that causes particles to drift to random coordinates in 3D space.
 *
 */
export default class RandomDrift extends Behaviour {
    /**
     * Constructs a RandomDrift behaviour instance.
     *
     * @param {number?} driftX - x axis drift
     * @param {number?} driftY - y axis drift
     * @param {number?} driftZ - z axis drift
     * @param {number?} [delay=DEFAULT_RANDOM_DRIFT_DELAY] - drift delay
     * @param {number?} life - The life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     * @param {boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(
        driftX?: number,
        driftY?: number,
        driftZ?: number,
        delay?: number,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );
    /**
     * @desc Internal time used for calculating drift vs internal delay.
     * @type {number}
     */
    time: number;
    /**
     * Resets the behaviour properties.
     *
     * @param {number?} driftX - x axis drift
     * @param {number?} driftY - y axis drift
     * @param {number?} driftZ - z axis drift
     * @param {number?} [delay=DEFAULT_RANDOM_DRIFT_DELAY] - drift delay
     * @param {number?} life - The life of the particle
     * @param {string?} easing - The behaviour's decaying trend
     */
    reset(
        life?: number,
        easing?: EasingFunction,
        driftX?: number,
        driftY?: number,
        driftZ?: number,
        delay?: number,
    ): void;
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

    static fromJSON(json: JSONObject): RandomDrift;
}
