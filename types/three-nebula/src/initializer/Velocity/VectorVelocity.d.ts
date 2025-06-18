import { createSpan, Vector3D } from "../../math";
import { JSONObject } from "../Rate";
import Velocity from "./Velocity";
/**
 * Sets the velocity property on initialized particles.
 */
export default class VectorVelocity extends Velocity {
    /**
     * Constructs a VectorVelocity initializer.
     */
    constructor(vector3d?: Vector3D, theta?: number, isEnabled?: boolean);
    /**
     * @description Velocity radius span.
     */
    radiusPan: ReturnType<typeof createSpan>;
    /**
     * @description Direction vector.
     */
    dir: Vector3D;
    /**
     * @description Theta.
     */
    tha: number;
    /**
     * @description Determines whether to use the directional vector or not.
     */
    protected _useV: boolean;
    /**
     * Creates a VectorVelocity initializer from JSON.
     */
    static fromJSON(json: JSONObject): VectorVelocity;
}
