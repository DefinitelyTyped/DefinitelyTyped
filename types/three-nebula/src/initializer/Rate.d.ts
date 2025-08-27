import { Span } from "../math";
import { DEFAULT_RATE_NUM_PAN, DEFAULT_RATE_TIME_PAN } from "./constants";
import Initializer from "./Initializer";
/**
 * Calculates the rate of particle emission.
 *
 * NOTE This doesn't need to be an initializer, it doesn't have an initialize
 * method, it overrides the base init method and it is only relevent to the Emitter class.
 * It would be better to move this to the Emitter module itself as a standalone class.
 */
export default class Rate extends Initializer {
    /**
     * Constructs a Rate instance.
     */
    constructor(numPan?: RateNumPan, timePan?: RateTimePan);
    /**
     * @description Sets the number of particles to emit.
     */
    numPan: Span;
    /**
     * @description Sets the time between each particle emission.
     */
    timePan: Span;
    /**
     * @description The rate's start time.
     */
    startTime: number;
    /**
     * @description The rate's next time.
     */
    nextTime: number;
    /**
     * Sets the startTime and nextTime properties.
     */
    init(): void;
    /**
     * Gets the number of particles to emit.
     */
    getValue(time: number): number;
    /**
     * Creates a Rate initializer from JSON.
     */
    static fromJSON(json: JSONObject): Rate;
}

export type RateNumPan = typeof DEFAULT_RATE_NUM_PAN | number | Span;
export type RateTimePan = typeof DEFAULT_RATE_TIME_PAN | number | Span;

export type JSONValue = string | number | boolean | JSONObject | JSONArray;

export type JSONObject = object;

export type JSONArray = JSONValue[];
