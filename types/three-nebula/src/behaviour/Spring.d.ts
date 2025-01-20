import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Behaviour from "./Behaviour";

/**
 * Behaviour that causes particles to spring.
 */
export default class Spring extends Behaviour {
    /**
     * Constructs a Spring behaviour instance.
     */
    constructor(
        x?: number,
        y?: number,
        z?: number,
        spring?: number,
        friction?: number,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );

    /**
     * Resets the behaviour properties.
     */
    reset(x?: number, y?: number, z?: number, spring?: number, friction?: number): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Applies the behaviour to the particle.
     * Mutates the particle's velocity according to this.pos and this.spring.
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     */
    static fromJSON(json: JSONObject): Spring;
}
