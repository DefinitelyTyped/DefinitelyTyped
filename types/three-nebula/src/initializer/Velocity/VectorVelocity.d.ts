import { Vector3D, createSpan } from '../../math';
import { JSONObject } from '../Rate';
import Velocity from './Velocity';
/**
 * Sets the velocity property on initialized particles.
 *
 */
export default class VectorVelocity extends Velocity {
    /**
     * Constructs a VectorVelocity initializer.
     *
     * @param {Vector3D?} vector3d - The directional vector for the velocity
     * @param {number?} theta - The theta angle to use
     * @param {boolean?} isEnabled - If the Velocity will be applied to newly emitted particles
     * @return void
     */
    constructor(vector3d?: Vector3D, theta?: number, isEnabled?: boolean);
    /**
     * @description Velocity radius span.
     * @type {Span}
     */
    radiusPan: ReturnType<typeof createSpan>;
    /**
     * @description Direction vector.
     * @type {Vector3D}
     */
    dir: Vector3D;
    /**
     * @description Theta.
     * @type {number}
     */
    tha: number;
    /**
     * @description Determines whether to use the directional vector or not.
     * @type {boolean}
     */
    protected _useV: boolean;
    /**
     * Creates a VectorVelocity initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {number} json.x - The velocity x axis direction
     * @param {number} json.y - The velocity y axis direction
     * @param {number} json.z - The velocity z axis direction
     * @param {number} json.theta - The velocity theta
     * @return {VectorVelocity}
     */
    static fromJSON(json: JSONObject): VectorVelocity;
}
