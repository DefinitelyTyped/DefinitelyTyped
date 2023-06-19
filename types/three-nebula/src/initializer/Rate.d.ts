import { Span } from '../math';
import Initializer from './Initializer';
import { DEFAULT_RATE_NUM_PAN, DEFAULT_RATE_TIME_PAN } from './constants';
/**
 * Calculates the rate of particle emission.
 *
 * NOTE This doesn't need to be an initializer, it doesn't have an initialize
 * method, it overrides the base init method and it is only relevent to the Emitter class.
 * It would be better to move this to the Emitter module itself as a standalone class.
 *
 */
export default class Rate extends Initializer {
    /**
     * Constructs a Rate instance.
     *
     * @param {number|array|Span?} numPan - The number of particles to emit
     * @param {number|array|Span?} timePan - The time between each particle emission
     * @return void
     */
    constructor(numPan?: RateNumPan, timePan?: RateTimePan);
    /**
     * @desc Sets the number of particles to emit.
     * @type {Span}
     */
    numPan: Span;
    /**
     * @desc Sets the time between each particle emission.
     * @type {Span}
     */
    timePan: Span;
    /**
     * @desc The rate's start time.
     * @type {number}
     */
    startTime: number;
    /**
     * @desc The rate's next time.
     * @type {number}
     */
    nextTime: number;
    /**
     * Sets the startTime and nextTime properties.
     *
     * @return void
     */
    init(): void;
    /**
     * Gets the number of particles to emit.
     *
     * @param {number} time - Current particle engine time
     * @return {number}
     */
    getValue(time: number): number;
    /**
     * Creates a Rate initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.particlesMin - The minimum number of particles to emit
     * @property {number} json.particlesMax - The maximum number of particles to emit
     * @property {number} json.perSecondMin - The minimum per second emit rate
     * @property {number} json.perSecondMax - The maximum per second emit rate
     * @return {Rate}
     */
    static fromJSON(json: JSONObject): Rate;
}

type RateNumPan = typeof DEFAULT_RATE_NUM_PAN | number | Span;
type RateTimePan = typeof DEFAULT_RATE_TIME_PAN | number | Span;

type JSONValue = string | number | boolean | JSONObject | JSONArray;

type JSONObject = object;

type JSONArray = Array<JSONValue>;
