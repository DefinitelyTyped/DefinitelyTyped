import Particle from "../core/Particle";
import Initializer from "./Initializer";
import { JSONObject } from "./Rate";
/**
 * Sets the body property on initialized particles.
 */
export default class Body extends Initializer {
    /**
     * Constructs a Body initalizer instance.
     */
    constructor(body: BodyParam, w?: number, h?: number, isEnabled?: boolean);
    /**
     * Sets the particle's initial body.
     */
    initialize(particle: Particle): void;
    /**
     * Creates a Body initializer from JSON.
     */
    static fromJSON(json: JSONObject): Body;
}

export type BodyParam = string | number | object;
