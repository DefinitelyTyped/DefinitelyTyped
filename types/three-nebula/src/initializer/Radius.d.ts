import Particle from "../core/Particle";
import { Span } from "../math";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";
/**
 * Sets the radius property on initialized particles.
 */
export default class Radius extends Initializer {
    /**
     * Constructs a Radius initializer instance.
     */
    constructor(width?: number, height?: number, center?: boolean, isEnabled?: boolean);
    /**
     * @description The radius span which is used to set the particle radius value.
     */
    radius: Span;
    /**
     * Resets the initializer properties.
     * Clears all previously set zones and resets the zones according to args passed.
     */
    reset(width?: number, height?: number, center?: boolean): void;
    /**
     * Sets the particle's initial radius.
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Radius initializer from JSON.
     */
    static fromJSON(json: JSONObject): Radius;
}
