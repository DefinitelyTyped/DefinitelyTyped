import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import { Vector3D } from "../math";
import Attraction from "./Attraction";
/**
 * Behaviour that causes particles to be repelled from a target position.
 */
export default class Repulsion extends Attraction {
    /**
     * Constructs an Repulsion behaviour instance.
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
     * @description Repulsion is attraction with negative force.
     */
    force: number;

    /**
     * @description The class type.
     */
    type: string;

    /**
     * Resets the behaviour properties.
     */
    reset(targetPosition?: Vector3D, force?: number, radius?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Creates a Body initializer from JSON.
     */
    static fromJSON(json: JSONObject): Repulsion;
}
