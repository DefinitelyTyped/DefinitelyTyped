import Particle from "../core/Particle";
import { Easing, EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import { Vector3D } from "../math";
import Behaviour from "./Behaviour";
import { DEFAULT_BEHAVIOUR_EASING } from "./constants";

/**
 * Behaviour that causes particles to be attracted to a target position.
 */
export default class Attraction extends Behaviour {
    /**
     * Constructs an Attraction behaviour instance.
     */
    constructor(
        targetPosition: Vector3D,
        force?: number,
        radius?: number,
        life?: number,
        easing?: keyof Easing | typeof DEFAULT_BEHAVIOUR_EASING,
        isEnabled?: boolean,
    );

    /**
     * @description The position the particles will be attracted to
     */
    targetPosition: Vector3D;

    /**
     * @description The attraction radius
     */
    radius: number;

    /**
     * @description The attraction force scalar multiplier
     */
    force: number;

    /**
     * @description The radius of the attraction squared
     */
    radiusSq: number;

    /**
     * @description The attraction force in 3D space
     */
    attractionForce: Vector3D;

    /**
     * @description The linear attraction force
     */
    lengthSq: 0;

    /**
     * Resets the behaviour properties.
     */
    reset(targetPosition: Vector3D, force?: number, radius?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;
    /**
     * Mutates particle acceleration.
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Body initializer from JSON.
     */
    static fromJSON(json: JSONObject): Attraction;
}
