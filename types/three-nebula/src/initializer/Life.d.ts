import Particle from "../core/Particle";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";
/**
 * Sets the life property on initialized particles.
 */
export default class Life extends Initializer {
    /**
     * Constructs a Life property instance.
     */
    constructor(min?: number, max?: number, center?: boolean, isEnabled?: boolean);
    /**
     * Sets the particle's initial life.
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Life initializer from JSON.
     */
    static fromJSON(json: JSONObject): Life;
}
