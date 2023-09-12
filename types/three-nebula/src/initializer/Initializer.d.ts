import Particle from "../core/Particle";
import { Emitter } from "../emitter";
import { INITIALIZER_TYPES } from "./types";
/**
 * The base Emitter / Particle property class.
 */
export default class Initializer {
    constructor(type: INITIALIZER_TYPES, isEnabled: boolean);
    /**
     * Initializes the property on the emitter or particle.
     *
     * @see {@link '../emitter/emitter.js'} setupParticle
     */
    init(emitter: Emitter, particle: Particle): void;
    /**
     * Determines if the initializer requires a Web GL API to be provided to its constructor.
     * If true, the WebGL API will need to be provided as the first argument to the constructor
     * and fromJSON methods.
     */
    static requiresWebGlApi(): boolean;
}
