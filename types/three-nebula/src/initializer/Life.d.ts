import Particle from '../core/Particle';
import Initializer from './Initializer';
import { JSONObject } from './Rate';
/**
 * Sets the life property on initialized particles.
 *
 */
export default class Life extends Initializer {
    /**
     * Constructs a Life property instance.
     *
     * @param {number?} min - The minimum life
     * @param {number?} max - The maximum life
     * @param {boolean?} [center] - Determines whether to average the life value
     * @param {boolean?} [isEnabled=true] - Determines if the initializer should be enabled or not
     * @return void
     */
    constructor(min?: number, max?: number, center?: boolean, isEnabled?: boolean);
    /**
     * Sets the particle's initial life.
     *
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Life initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {number} json.min - The minimum life time
     * @param {number} json.max - The maximum life time
     * @param {number} json.center - The center of the life time
     * @param {boolean} [json.isEnabled=true] - Determines if the initializer should be enabled or not
     * @return {Life}
     */
    static fromJSON(json: JSONObject): Life;
}
