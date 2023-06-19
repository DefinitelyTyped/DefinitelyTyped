import type { Euler } from 'three';
import Particle from '../core/Particle';
import { Emitter } from '../emitter';
import Initializer from './Initializer';

export namespace InitializerUtil {
    const particleEuler: Euler | null;

    /**
     * Loops through the initializers array and calls each initializer's initialize method
     * on the supplied particle. This sets the particle's initial properties.
     *
     * @see {@link '../emitter/Emitter'} setupParticle
     * @param {Emitter} emitter - The emitter that has called this method
     * @param {Particle} particle - The particle that has just been created
     * @param {array<Initializer>} initializers - All of the emitter's initializers
     * @return void
     */
    function initialize(emitter: Emitter, particle: Particle, initializers: Initializer[]): void;

    /**
     * Ensures that the emitter's position, velocity and accleration are added
     * to each created particle.
     *
     * @param {Emitter} emitter - The emitter that is emitting the particles
     * @param {Particle} particle - The newly created particle
     * @return void
     */
    function bindEmitter(emitter: Emitter, particle: Particle): void;
}

export default InitializerUtil;
