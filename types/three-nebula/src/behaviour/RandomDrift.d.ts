import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Behaviour from "./Behaviour";

/**
 * Behaviour that causes particles to drift to random coordinates in 3D space.
 */
export default class RandomDrift extends Behaviour {
    /**
     * Constructs a RandomDrift behaviour instance.
     */
    constructor(
        driftX?: number,
        driftY?: number,
        driftZ?: number,
        delay?: number,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );
    /**
     * @description Internal time used for calculating drift vs internal delay.
     */
    time: number;
    /**
     * Resets the behaviour properties.
     */
    reset(
        life?: number,
        easing?: EasingFunction,
        driftX?: number,
        driftY?: number,
        driftZ?: number,
        delay?: number,
    ): void;

    /**
     * Mutates the particle.acceleration property.
     */
    mutate(particle: Particle, time: number, index: number): void;

    static fromJSON(json: JSONObject): RandomDrift;
}
