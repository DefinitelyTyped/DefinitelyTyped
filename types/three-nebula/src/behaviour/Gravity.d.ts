import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Force from "./Force";

/**
 * Behaviour that forces particles down the y axis.
 */
export default class Gravity extends Force {
    /**
     * Constructs a Gravity behaviour instance.
     */
    constructor(gravity?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);
    /**
     * @description The class type.
     */
    type: string;
    static fromJSON(json: JSONObject): Gravity;
}
