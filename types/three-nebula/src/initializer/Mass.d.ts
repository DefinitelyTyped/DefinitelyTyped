import Particle from '../core/Particle';
import Initializer from './Initializer';
import { JSONObject } from './Rate';

export default class Mass extends Initializer {
    /**
     * Constructs a Mass initializer instance.
     *
     * @param {number?} min - The minumum mass for the particle
     * @param {number?} max - The maximum mass for the particle
     * @param {boolean?} [center] - Determines whether to average the mass value
     * @param {boolean?} [isEnabled=true] - Determines if the initializer is enabled or not
     * @return void
     */
    constructor(min?: number, max?: number, center?: boolean, isEnabled?: boolean);
    /**
     * Sets the particle's initial mass.
     *
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Mass initializer from JSON.
     *
     * @param {object?} json - The JSON to construct the instance from.
     * @property {number?} json.min - The minimum mass
     * @property {number?} json.max - The maximum mass
     * @property {number?} json.center - The center of the mass
     * @return {Mass}
     */
    static fromJSON(json: JSONObject): Mass;
}
