import Particle from '../../core/Particle';
import Initializer from '../Initializer';
/**
 * Abstract class for Velocity initializers.
 *
 */
export default class Velocity extends Initializer {
    /**
     * Constructs a Velocity intitializer instance.
     * @param {string?} type - The type of the Velocity initializer
     * @param {boolean?} isEnabled - If the Velocity will be applied to newly emitted particles
     * @return void
     */
    constructor(type?: string, isEnabled?: boolean);
    normailize(vr: number): number;
    /**
     * Sets the particle's initial velocity.
     *
     * @singleton
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize(particle: Particle): Velocity;
}
