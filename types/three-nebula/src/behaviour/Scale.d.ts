import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Behaviour from "./Behaviour";

/**
 * Behaviour that scales particles.
 */
export default class Scale extends Behaviour {
    /**
     * Constructs a Scale behaviour instance.
     */
    constructor(scaleA?: number, scaleB?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Gets the _same property which determines if the scale props are the same.
     */
    get same(): boolean;

    /**
     * Sets the _same property which determines if the scale props are the same.
     */
    set same(same);

    /**
     * Resets the behaviour properties.
     */
    reset(scaleA?: number, scaleB?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Initializes the behaviour on a particle.
     * Stores initial values for comparison and mutation in the applyBehaviour method.
     */
    initialize(particle: Particle): void;

    /**
     * Applies the behaviour to the particle.
     * Mutates the particle's scale and its radius according to this scale.
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     */
    static fromJSON(json: JSONObject): Scale;
}
