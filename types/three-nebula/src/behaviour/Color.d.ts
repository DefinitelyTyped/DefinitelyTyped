import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Behaviour from "./Behaviour";

/**
 * A behaviour which mutates the color of a particle over time.
 */
export default class Color extends Behaviour {
    /**
     * Constructs a Color behaviour instance.
     */
    constructor(colorA: THREE.Color, colorB: THREE.Color, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Gets the _same property which determines if the alpha are the same.
     */
    get same(): boolean;

    /**
     * Sets the _same property which determines if the alpha are the same.
     */
    set same(same);
    /**
     * Resets the behaviour's parameters.
     */
    reset(colorA: THREE.Color, colorB: THREE.Color, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;
    /**
     * Initializes the behaviour's properties for a given particle.
     */
    initialize(particle: Particle): void;

    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a Color initializer from JSON.
     */
    static fromJSON(json: JSONObject): Color;
}
