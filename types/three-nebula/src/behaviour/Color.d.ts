import Particle from '../core/Particle';
import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import Behaviour from './Behaviour';

/**
 * A behaviour which mutates the color of a particle over time.
 *
 */
export default class Color extends Behaviour {
    /**
     * Constructs a Color behaviour instance.
     *
     * @param {THREE.Color} colorA - the starting color
     * @param {THREE.Color} colorB - the ending color
     * @param {?number} life - the life of the particle
     * @param {?function} easing - The behaviour's decaying trend
     * @param {?boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(colorA: THREE.Color, colorB: THREE.Color, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Gets the _same property which determines if the alpha are the same.
     *
     * @return {boolean}
     */
    get same(): boolean;

    /**
     * Sets the _same property which determines if the alpha are the same.
     *
     * @param {boolean} same
     * @return {boolean}
     */
    set same(same);
    /**
     * Resets the behaviour's parameters.
     *
     * @param {THREE.Color} colorA - the starting color
     * @param {THREE.Color} colorB - the ending color
     * @param {number?} life - the life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     * @return void
     */
    reset(colorA: THREE.Color, colorB: THREE.Color, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;
    /**
     * Initializes the behaviour's properties for a given particle.
     * @param {Particle} particle
     */
    initialize(particle: Particle): void;

    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Color initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.colorA - The starting color
     * @property {number} json.colorB - The ending color
     * @property {number} json.life - The life of the particle
     * @property {string} json.easing - The behaviour's decaying trend
     * @return {Color}
     */
    static fromJSON(json: JSONObject): Color;
}
