/**
 * Class for representing a timer.
 */
export class Time {
    /**
     * Constructs a new time object.
     */
    constructor();

    /**
     * Disables the usage of a fixed delta value.
     */
    disableFixedDelta(): this;

    /**
     * Frees all internal resources.
     */
    dispose(): this;

    /**
     * Enables the usage of a fixed delta value. Can be useful for debugging and testing.
     */
    enableFixedDelta(): this;

    /**
     * Returns the delta time in seconds. Represents the completion time in seconds since
     * the last simulation step.
     *
     * @return The delta time in seconds.
     */
    getDelta(): number;

    /**
     * Returns the elapsed time in seconds. It's the accumulated
     * value of all previous time deltas.
     *
     * @return The elapsed time in seconds.
     */
    getElapsed(): number;

    /**
     * Returns the fixed delta time in seconds.
     *
     * @return The fixed delta time in seconds.
     */
    getFixedDelta(): number;

    /**
     * Returns the timescale value.
     *
     * @return The timescale value.
     */
    getTimescale(): number;

    /**
     * Resets this time object.
     */
    reset(): this;

    /**
     * Sets a fixed time delta value.
     *
     * @param fixedDelta - Fixed time delta in seconds.
     */
    setFixedDelta(fixedDelta: number): this;

    /**
     * Sets a timescale value. This value represents the scale at which time passes.
     * Can be used for slow down or  accelerate the simulation.
     *
     * @param timescale - The timescale value.
     */
    setTimescale(timescale: number): this;

    /**
     * Updates the internal state of this time object.
     */
    update(): this;
}
