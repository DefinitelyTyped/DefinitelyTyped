import Particle from '../core/Particle';
import Zone from '../zone/Zone';
import Initializer from './Initializer';
import { JSONObject } from './Rate';

export default class Position extends Initializer {
    /**
     * Constructs a Position initializer instance.
     *  Sets the starting position property for initialized particles.
     * This is derived from a zone randomly chosen from those supplied to the constructor.
     * @param {Zone|array<Zone>?}
     * @return void
     */
    constructor(zone?: Zone | Array<Zone>);
    /**
     * Resets the initializer properties.
     * Clears all previously set zones and resets the zones according to args passed.
     *
     * @param {Zone|array<Zone>?}
     * @return void
     */
    reset(zone: Zone | Array<Zone>): void;
    /**
     * Adds a zone or zones to this.zones.
     *
     * @param {Zone|array<Zone>}
     * @return void
     */
    addZone(zone: Zone | Array<Zone>): void;
    /**
     * Creates a Position initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {string} json.zoneType - The type of zone to use for initial position
     * @return {Position}
     */
    static fromJSON(json: JSONObject): Position;
    /**
     * On the Particle.prototype.initialize call, this sets the particle's position.
     * Sets the particle's initial position.
     *
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize(particle: Particle): void;
}
