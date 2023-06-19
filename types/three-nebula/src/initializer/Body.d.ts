import Particle from '../core/Particle';
import Initializer from './Initializer';
import { JSONObject } from './Rate';
/**
 * Sets the body property on initialized particles.
 *
 */
export default class Body extends Initializer {
    /**
     * Constructs a Body initalizer instance.
     *
     * @param {string|number|object} body - The content for the particle body, can
     * be a color or an object (mesh) or sprite (texture)
     * @param {?number} w - The width of the particle body
     * @param {?number} h - The height of the particle body
     * @param {?boolean} [isEnabled=true] - Determines if the initializer is enabled or not
     * @return void
     */
    constructor(body: BodyParam, w?: number, h?: number, isEnabled?: boolean);
    /**
     * Sets the particle's initial body.
     *
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.body - The color for the particle body
     * @property {number} json.width - The width of the particle body
     * @property {number} json.height - The height of the particle body
     * @return {Body}
     */
    static fromJSON(json: JSONObject): Body;
}

type BodyParam = string | number | object;
