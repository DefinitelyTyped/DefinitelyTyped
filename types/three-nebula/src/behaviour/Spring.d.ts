import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Behaviour from './Behaviour';

/**
 * Behaviour that causes particles to spring.
 *
 */
export default class Spring extends Behaviour {
    /**
     * Constructs a Spring behaviour instance.
     *
     * @param {number?} x - X axis spring
     * @param {number?} y - Y axis spring
     * @param {number?} z - Z axis spring
     * @param {number?} spring - Spring factor
     * @param {number?} friction - Spring friction
     * @param {number?} life - The life of the behaviour
     * @param {function?} easing - The easing equation to use for transforms
     * @param {boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(
        x?: number,
        y?: number,
        z?: number,
        spring?: number,
        friction?: number,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );

    /**
     * Resets the behaviour properties.
     *
     * @param {number} x - X axis spring
     * @param {number} y - Y axis spring
     * @param {number} z - Z axis spring
     * @param {number} spring - Spring factor
     * @param {number} friction - Spring friction
     * @return void
     */
    reset(x?: number, y?: number, z?: number, spring?: number, friction?: number): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Applies the behaviour to the particle.
     * Mutates the particle's velocity according to this.pos and this.spring.
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
    static fromJSON(json: JSONObject): Spring;
}
