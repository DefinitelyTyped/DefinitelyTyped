import { EasingFunction } from '../ease';
import { JSONObject } from '../initializer/Rate';
import { Vector3D } from '../math';
import Attraction from './Attraction';
/**
 * Behaviour that causes particles to be repelled from a target position.
 *
 */
export default class Repulsion extends Attraction {
    /**
     * Constructs an Repulsion behaviour instance.
     *
     * @param {Vector3D?} targetPosition - The position the particles will be repelled from
     * @param {number?} force - The repulsion force scalar multiplier
     * @param {number?} radius - The repulsion radius
     * @param {number?} life - The life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     * @return void
     */
    constructor(
        targetPosition?: Vector3D,
        force?: number,
        radius?: number,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );
    /**
     * @desc Repulsion is attraction with negative force.
     * @type {number}
     */
    force: number;

    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;

    /**
     * Resets the behaviour properties.
     *
     * @param {Vector3D?} targetPosition - the position the particles will be attracted to
     * @param {number?} force - the attraction force multiplier
     * @param {number?} radius - the attraction radius
     * @param {number?} life - the life of the particle
     * @param {function?} easing - The behaviour's decaying trend
     * @return void
     */
    reset(targetPosition?: Vector3D, force?: number, radius?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.x - The target position x value
     * @property {number} json.y - The target position y value
     * @property {number} json.z - The target position z value
     * @property {number} json.force - The attraction force scalar multiplier
     * @property {number} json.life - The life of the particle
     * @property {string} json.easing - The behaviour's decaying trend
     * @return {Body}
     */
    static fromJSON(json: JSONObject): Repulsion;
}
