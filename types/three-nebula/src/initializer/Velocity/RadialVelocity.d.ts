import { createSpan, Vector3D } from "../../math";
import { JSONObject } from "../Rate";
import Velocity from "./Velocity";
/**
 * Sets the velocity property on initialized particles.
 */
export default class RadialVelocity extends Velocity {
    /**
     * Constructs a RadialVelocity initializer.
     */
    constructor(radius?: number, vector3d?: Vector3D, theta?: number, isEnabled?: boolean);
    /**
     * @description Velocity radius span.
     */
    radiusSpan: ReturnType<typeof createSpan>;
    /**
     * @description Theta.
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
     * Creates a RadialVelocity initializer from JSON.
     */
    static fromJSON(json: JSONObject): RadialVelocity;
}
