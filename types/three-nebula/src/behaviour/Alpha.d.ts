import Particle from '../core/Particle';
import { Easing, EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import { Span } from '../math';
import Behaviour from './Behaviour';

/**
 * Behaviour that applies an alpha transition effect to particles.
 *
 */
export default class Alpha extends Behaviour {
    /**
     * Constructs an Alpha behaviour instance.
     *
     * @param {number} alphaA - The starting alpha value
     * @param {?number} alphaB - The ending alpha value
     * @param {?number} life - The life of the behaviour
     * @param {?function} easing - The easing equation to use for transforms
     * @param {?boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(
        alphaA: number,
        alphaB?: number | undefined,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );
    /**
     * @descriptionription The starting alpha value
     */
    alphaA: number | Span;

    /**
     * @descriptionription The ending alpha value
     */
    alphaB: number | Span;

    /**
     * Gets the _same property which determines if the alpha are the same.
     *
     * @return {boolean}
     */
    get same(): boolean;

    /**
     * Sets the _same property which determines if the alpha are the same.
     *
     * @param {boolean} same
     * @return {boolean}
     */
    set same(same);

    /**
     * Resets the behaviour properties.
     *
     * @param {number} alphaA - the starting alpha value
     * @param {?number} alphaB - the ending alpha value
     * @param {?number} life - the life of the behaviour
     * @param {?function} easing - the easing equation to use for transforms
     * @return void
     */
    reset(
        alphaA: number | undefined,
        alphaB?: number | undefined,
        life?: number | undefined,
        easing?: keyof Easing,
    ): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Initializes the behaviour on a particle.
     *
     * @param {object} particle - the particle to initialize the behaviour on
     * @return void
     */
    initialize(particle: Particle): void;

    /**
     * Mutates the target's alpha/opacity property.
     *
     * @param {object} particle - the particle to apply the behaviour to
     * @param {number} time - engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @return {Body}
     */
    static fromJSON(json: JSONObject): Alpha;
}
