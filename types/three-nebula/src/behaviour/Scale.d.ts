import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Behaviour from './Behaviour';

/**
 * Behaviour that scales particles.
 *
 */
export default class Scale extends Behaviour {
    /**
     * Constructs a Scale behaviour instance.
     *
     * @param {?number} scaleA - the starting scale value
     * @param {?number} scaleB - the ending scale value
     * @param {?number} life - the life of the behaviour
     * @param {?function} easing - the easing equation to use for transforms
     * @param {?boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(scaleA?: number, scaleB?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Gets the _same property which determines if the scale props are the same.
     *
     * @return {boolean}
     */
    get same(): boolean;

    /**
     * Sets the _same property which determines if the scale props are the same.
     *
     * @param {boolean} same
     * @return {boolean}
     */
    set same(same);

    /**
     * Resets the behaviour properties.
     *
     * @param {number?} scaleA - the starting scale value
     * @param {number?} scaleB - the ending scale value
     * @param {number?} life - the life of the behaviour
     * @param {function?} easing - the easing equation to use for transforms
     * @return void
     */
    reset(scaleA?: number, scaleB?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Initializes the behaviour on a particle.
     * Stores initial values for comparison and mutation in the applyBehaviour method.
     *
     * @param {object} particle - the particle to initialize the behaviour on
     * @return void
     */
    initialize(particle: Particle): void;

    /**
     * Applies the behaviour to the particle.
     * Mutates the particle's scale and its radius according to this scale.
     *
     * @param {object} particle - the particle to apply the behaviour to
     * @param {number} time - engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     *
     * @param {object} json - JSON object containing the required constructor properties
     * @return {Spring}
     */
    static fromJSON(json: JSONObject): Scale;
}
