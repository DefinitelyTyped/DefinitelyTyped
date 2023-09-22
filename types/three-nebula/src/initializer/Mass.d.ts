import Particle from "../core/Particle";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";

export default class Mass extends Initializer {
    /**
     * Constructs a Mass initializer instance.
     */
    constructor(min?: number, max?: number, center?: boolean, isEnabled?: boolean);
    /**
     * Sets the particle's initial mass.
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Mass initializer from JSON.
     */
    static fromJSON(json: JSONObject): Mass;
}
