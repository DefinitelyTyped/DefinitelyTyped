import Particle from "../core/Particle";
import Zone from "../zone/Zone";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";

export default class Position extends Initializer {
    /**
     * Constructs a Position initializer instance.
     *  Sets the starting position property for initialized particles.
     * This is derived from a zone randomly chosen from those supplied to the constructor.
     */
    constructor(zone?: Zone | Zone[]);
    /**
     * Resets the initializer properties.
     * Clears all previously set zones and resets the zones according to args passed.
     */
    reset(zone: Zone | Zone[]): void;
    /**
     * Adds a zone or zones to this.zones.
     */
    addZone(zone: Zone | Zone[]): void;
    /**
     * Creates a Position initializer from JSON.
     */
    static fromJSON(json: JSONObject): Position;
    /**
     * On the Particle.prototype.initialize call, this sets the particle's position.
     * Sets the particle's initial position.
     */
    initialize(particle: Particle): void;
}
