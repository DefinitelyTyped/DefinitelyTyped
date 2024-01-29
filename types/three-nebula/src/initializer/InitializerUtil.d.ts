import Particle from "../core/Particle";
import { Emitter } from "../emitter";
import Initializer from "./Initializer";

export namespace InitializerUtil {
    const particleEuler: THREE.Euler | null;

    /**
     * Loops through the initializers array and calls each initializer's initialize method
     * on the supplied particle. This sets the particle's initial properties.
     *
     * @see {@link '../emitter/Emitter'} setupParticle
     */
    function initialize(emitter: Emitter, particle: Particle, initializers: Initializer[]): void;

    /**
     * Ensures that the emitter's position, velocity and accleration are added
     * to each created particle.
     */
    function bindEmitter(emitter: Emitter, particle: Particle): void;
}

export default InitializerUtil;
