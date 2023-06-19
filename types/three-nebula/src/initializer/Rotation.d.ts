import Particle from '../core/Particle';
import Initializer from './Initializer';
import { JSONObject } from './Rate';

/**
 * Sets the rotation property on initialized particles.
 *
 */
export default class Rotation extends Initializer {
    /**
     * Constructs a Rotation property instance.
     *
     * @param {number?} x - X axis rotation
     * @param {number?} y - Y axis rotation
     * @param {number?} z - Z axis rotation
     * @param {boolean?} [useEmitterRotation=true] - Determines if we should use the emitter's rotation as the starting rotation
     * @param {boolean?} [isEnabled=true] - Determines if the initializer should be enabled or not
     * @return void
     */
    constructor(x?: number, y?: number, z?: number, useEmitterRotation?: boolean, isEnabled?: boolean);

    /**
     * Sets the particle's initial rotation.
     *
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize(particle: Particle): void;

    static fromJSON(json: JSONObject): Rotation;
}
