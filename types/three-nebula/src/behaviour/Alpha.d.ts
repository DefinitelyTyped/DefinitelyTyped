import Particle from "../core/Particle";
import { Easing, EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import { Span } from "../math";
import Behaviour from "./Behaviour";

/**
 * Behaviour that applies an alpha transition effect to particles.
 */
export default class Alpha extends Behaviour {
    /**
     * @description Constructs an Alpha behaviour instance.
     */
    constructor(alphaA: number, alphaB?: number, life?: number, easing?: EasingFunction, isEnabled?: boolean);
    /**
     * @description The starting alpha value
     */
    alphaA: number | Span;

    /**
     * @description The ending alpha value
     */
    alphaB: number | Span;

    /**
     * Gets the _same property which determines if the alpha are the same.
     */
    get same(): boolean;

    /**
     * Sets the _same property which determines if the alpha are the same.
     */
    set same(same);

    /**
     * Resets the behaviour properties.
     */
    reset(alphaA: number, alphaB?: number, life?: number, easing?: keyof Easing): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Initializes the behaviour on a particle.
     */
    initialize(particle: Particle): void;

    /**
     * Mutates the target's alpha/opacity property.
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Body initializer from JSON.
     */
    static fromJSON(json: JSONObject): Alpha;
}
