import { Polar3D, Vector3D } from '../../math';
import { JSONObject } from '../Rate';
import Velocity from './Velocity';
/**
 * Sets the velocity property on initialized particles.
 *
 */
export default class PolarVelocity extends Velocity {
    /**
     * Constructs a PolarVelocity initializer.
     *
     * @param {Polar3D?} polar3d - The polar vector for the velocity
     * @param {number?} theta - The theta angle to use
     * @param {boolean?} isEnabled - If the PolarVelocity will be applied to newly emitted particles
     * @return void
     */
    constructor(polar3d?: Polar3D, theta?: number, isEnabled?: boolean);
    /**
     * @description Theta.
     * @type {number}
     */
    tha: number;
    /**
     * @description Directional vector
     * @type {Vector3D}
     */
    dirVec: Vector3D;
    /**
     * @description Determines whether to use the directional vector or not.
     * @type {boolean}
     */
    protected _useV: boolean;
    /**
     * Creates a PolarVelocity initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {Polar3D} json.polar3d - The polar vector for the velocity
     * @param {number} json.theta - The theta angle to use
     * @return {PolarVelocity}
     */
    static fromJSON(json: JSONObject): PolarVelocity;
}
