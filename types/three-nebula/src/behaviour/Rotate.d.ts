import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import { Vector3D } from '../math';
import Behaviour from './Behaviour';

/**
 * Behaviour that rotates particles.
 */
export default class Rotate extends Behaviour {
    /**
     * Constructs a Rotate behaviour instance.
     *
     * @param {number?} x - X axis rotation
     * @param {number?} y - Y axis rotation
     * @param {number?} z - Z axis rotation
     * @param {number?} life - The life of the behaviour
     * @param {function?} easing - The easing equation to use for transforms
     * @param {boolean?} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(
        x?: number | Random,
        y?: number | Random,
        z?: number | Random,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );
    /**
     * Gets the rotation type.
     *
     * @return {string}
     */
    get rotationType(): string;

    /**
     * Sets the rotation type.
     * @description The rotation type. ENUM of ['same', 'set', 'to', 'add'].
     * @type {string}
     * @param {string}
     * @return void
     */
    set rotationType(rotationType);

    /**
     * Resets the behaviour properties.
     *
     * @param {number} x - X axis rotation
     * @param {number} y - Y axis rotation
     * @param {number} z - Z axis rotation
     * @param {number?} life - the life of the behaviour
     * @param {function?} easing - the easing equation to use for transforms
     * @return void
     */
    reset(x?: number, y?: number, z?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Initializes the behaviour on a particle.
     *
     * @param {object} particle - the particle to initialize the behaviour on
     * @return void
     */
    initialize(particle: Particle): void;

    /**
     * Sets the particle's rotation prior to the behaviour being applied.
     *
     * NOTE It's hard to see here, but this is mutating the particle's rotation
     * even though the particle is not being passed in directly.
     *
     * NOTE the else if below will never be reached because the value being passed in
     * will never be of type Vector3D.
     *
     * @param {Vector3D} particleRotation - the particle's rotation vector
     * @param {string|number} value - the value to set the rotation value to, if 'random'
     * rotation is randomised
     * @return void
     */
    protected _setRotation(particleRotation: Vector3D, value: string | number): void;

    /**
     * Mutates the particle.rotation property.
     *
     * @see http://stackoverflow.com/questions/21622956/how-to-convert-direction-vector-to-euler-angles
     * @param {object} particle - the particle to apply the behaviour to
     * @param {number} time - engine time
     * @param {integer} index - the particle index
     * @return void
     */
    mutate(particle: Particle, time: number, index: number): void;

    static fromJSON(json: JSONObject): Rotate;
}

type Random = 'random';
