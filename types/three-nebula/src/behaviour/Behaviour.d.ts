import Particle from "../core/Particle";
import type { EasingFunction } from "../ease";
import { Emitter } from "../emitter";
import { JSONObject } from "../initializer/Rate";
import { Vector3D } from "../math";
import { BEHAVIOUR_TYPES } from "./types";

export default class Behaviour {
    /**
     * Constructs a Behaviour instance.
     */
    constructor(life?: number, easing?: EasingFunction, type?: BEHAVIOUR_TYPES, isEnabled?: boolean);

    id: string;
    age: number;
    energy: number;
    dead: boolean;
    /**
     * Reset this behaviour's parameters
     */
    reset(life?: number, easing?: EasingFunction): void;
    /**
     * Ensures that life is infinity if an invalid value is supplied.
     */
    set life(life: number);
    /**
     * Gets the behaviour's life.
     */
    get life(): number;
    /**
     * Normalize a force by 1:100;
     */
    normalizeForce(force: THREE.Vector3): Vector3D;
    /**
     * Normalize a value by 1:100;
     */
    normalizeValue(value: number): number;
    /**
     * Set the behaviour's initial properties on the particle.
     */
    initialize(particle: Particle): void;
    /**
     * Apply behaviour to the target as a factor of time.
     * Internally calls the mutate method to change properties on the target
     * Will not do so if the behaviour is disabled
     */
    applyBehaviour(target: Particle | Emitter, time: number, index: number): void;
    /**
     * Change the target's properties according to specific behaviour logic.
     */
    mutate(target: Particle | Emitter, time: number, index: number): void;
    /**
     * Compares the age of the behaviour vs integration time and determines
     * if the behaviour should be set to dead or not.
     * Sets the behaviour energy as a factor of particle age and life.
     */
    energize(particle: Particle, time: number): void;
    /**
     * Destory this behaviour.
     */
    destroy(): void;
    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     */
    fromJSON(json: JSONObject): Behaviour;
}
