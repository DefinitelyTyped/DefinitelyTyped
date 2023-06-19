import { Vector3D, createSpan } from '../../math';
import { JSONObject } from '../Rate';
import Velocity from './Velocity';
/**
 * Sets the velocity property on initialized particles.
 *
 */
export default class RadialVelocity extends Velocity {
    /**
     * Constructs a RadialVelocity initializer.
     *
     * @param {number|Span?} radius - The velocity radius
     * @param {Vector3D?} vector3d - The directional vector for the velocity
     * @param {number?} theta - The theta angle to use
     * @return void
     */
    constructor(radius?: number, vector3d?: Vector3D, theta?: number, isEnabled?: boolean);
    /**
     * @desc Velocity radius span.
     * @type {Span}
     */
    radiusSpan: ReturnType<typeof createSpan>;
    /**
     * @desc Theta.
     * @type {number}
     */
    dir: Vector3D;
    /**
     * @desc Theta.
     * @type {number}
     */
    tha: number;
    /**
     * @desc Determines whether to use the directional vector or not.
     * @type {boolean}
     */
    protected _useV: boolean;
    /**
     * Creates a RadialVelocity initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {number} json.radius - The velocity radius
     * @param {number} json.x - The velocity x axis direction
     * @param {number} json.y - The velocity y axis direction
     * @param {number} json.z - The velocity z axis direction
     * @param {number} json.theta - The velocity theta
     * @return {RadialVelocity}
     */
    static fromJSON(json: JSONObject): RadialVelocity;
}
