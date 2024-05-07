import { Polar3D, Vector3D } from "../../math";
import { JSONObject } from "../Rate";
import Velocity from "./Velocity";
/**
 * Sets the velocity property on initialized particles.
 */
export default class PolarVelocity extends Velocity {
    /**
     * Constructs a PolarVelocity initializer.
     */
    constructor(polar3d?: Polar3D, theta?: number, isEnabled?: boolean);
    /**
     * @description Theta.
     */
    tha: number;
    /**
     * @description Directional vector
     */
    dirVec: Vector3D;
    /**
     * @description Determines whether to use the directional vector or not.
     */
    protected _useV: boolean;
    /**
     * Creates a PolarVelocity initializer from JSON.
     */
    static fromJSON(json: JSONObject): PolarVelocity;
}
