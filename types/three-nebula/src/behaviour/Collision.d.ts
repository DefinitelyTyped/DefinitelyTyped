import Particle from "../core/Particle";
import { Easing, EasingFunction } from "../ease";
import { Emitter } from "../emitter";
import { JSONObject } from "../initializer/Rate";
import Behaviour from "./Behaviour";

/**
 * Behaviour that causes particles to move away from other particles they collide with.
 */
export default class Collision extends Behaviour {
    /**
     * Constructs a Collision behaviour instance.
     */
    constructor(
        emitter: Emitter,
        useMass?: boolean,
        onCollide?: onCollideCallback,
        life?: number,
        easing?: keyof Easing,
        isEnabled?: boolean,
    );

    /**
     * Resets the behaviour properties.
     */
    reset(life?: number, easing?: EasingFunction): void;
    reset(
        emitter: Emitter,
        useMass?: boolean,
        onCollide?: onCollideCallback,
        life?: number,
        easing?: EasingFunction,
    ): void;

    /**
     * Detects collisions with other particles and calls the
     * onCollide function on colliding particles.
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Gets the average mass of both particles.
     */
    _getAverageMass(particleA: Particle, particleB: Particle): number;

    /**
     * TODO - Not Yet Implemented
     */
    fromJSON(json: JSONObject): Collision;
}

export type onCollideCallback = (any: any) => any;
