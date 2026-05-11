import Particle from "../core/Particle";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";

/**
 * Sets the rotation property on initialized particles.
 */
export default class Rotation extends Initializer {
    /**
     * Constructs a Rotation property instance.
     */
    constructor(x?: number, y?: number, z?: number, useEmitterRotation?: boolean, isEnabled?: boolean);

    /**
     * Sets the particle's initial rotation.
     */
    initialize(particle: Particle): void;

    static fromJSON(json: JSONObject): Rotation;
}
