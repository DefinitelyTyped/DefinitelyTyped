import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import Zone from "../zone/Zone";
import Behaviour from "./Behaviour";

/**
 * Behaviour that allows for specific functions to be called on particles when
 * they interact with a zone.
 */
export default class CrossZone extends Behaviour {
    /**
     * Constructs a CrossZone behaviour instance.
     */
    constructor(zone: Zone, crossType?: string, life?: number, easing?: EasingFunction, isEnabled?: boolean);

    /**
     * Resets the behaviour properties.
     */
    reset(zone: Zone, crossType?: EasingFunction, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Applies the behaviour to the particle.
     *
     * @see {@link '../zone/Zone.js'} crossing
     */
    mutate(particle: Particle, time: number, index: number): void;

    /**
     * Creates a CrossZone initializer from JSON.
     */
    static fromJSON(json: JSONObject): CrossZone;
}
