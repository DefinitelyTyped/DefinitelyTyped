import Particle from "../../core/Particle";
import Initializer from "../Initializer";
/**
 * Abstract class for Velocity initializers.
 */
export default class Velocity extends Initializer {
    /**
     * Constructs a Velocity intitializer instance.
     */
    constructor(type?: string, isEnabled?: boolean);
    normailize(vr: number): number;
    /**
     * Sets the particle's initial velocity.
     */
    initialize(particle: Particle): Velocity;
}
