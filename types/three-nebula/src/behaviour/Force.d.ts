import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Behaviour from "./Behaviour";
/**
 * Behaviour that forces particles along a specific axis.
 */
export default class Force extends Behaviour {
    /**
     * Constructs a Force behaviour instance.
     */
    constructor(fx?: number, fy?: number, fz?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Resets the behaviour properties.
     */
    reset(fx?: number, fy?: number, fz?: number): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Mutates the particle.acceleration property.
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Force initializer from JSON.
     */
    static fromJSON(json: JSONObject): Force;
}
