/**
 * This class is an alternative to {@link THREE.Clock} with a different API design and behavior
 * The goal is to avoid the conceptual flaws that became apparent in {@link THREE.Clock} over time.
 *
 * - {@link Timer} has an {@link .update()} method that updates its internal state. That makes it possible to call
 *   {@link .getDelta()} and {@link .getElapsed()} multiple times per simulation step without getting different values.
 * - The class uses the Page Visibility API to avoid large time delta values when the app is inactive (e.g. tab switched
 *   or browser hidden).
 * - It's possible to configure a fixed time delta and a time scale value (similar to Unity's Time interface).
 *
 * @example
 * const timer = new Timer();
 *
 * function animate() {
 *   requestAnimationFrame(animate);
 *   timer.update();
 *   const delta = timer.getDelta();
 *   // do something with delta
 *   renderer.render(scene, camera);
 * }
 *
 * @see https://threejs.org/examples/#webgl_morphtargets_sphere
 */
export class Timer {
    constructor();

    /**
     * Disables the usage of a fixed delta time.
     */
    disableFixedDelta(): this;

    /**
     * Can be used to free all internal resources. Usually called when the timer instance isn't required anymore.
     */
    dispose(): this;

    /**
     * Enables the usage of a fixed delta time.
     */
    enableFixedDelta(): this;

    /**
     * Returns the time delta in seconds.
     */
    getDelta(): number;

    /**
     * Returns the elapsed time in seconds.
     */
    getElapsed(): number;

    /**
     * Returns the fixed time delta that has been previously configured via {@link .setFixedDelta()}.
     */
    getFixedDelta(): number;

    getTimescale(): number;

    /**
     * Resets the time computation for the current simulation step.
     */
    reset(): this;

    /**
     * Defines a fixed time delta value which is used to update the timer per simulation step.
     */
    setFixedDelta(fixedDelta: number): this;

    /**
     * Sets a time scale that scales the time delta in {@link .update()}.
     * @param timescale
     */
    setTimescale(timescale: number): this;

    /**
     * Updates the internal state of the timer. This method should be called once per simulation step and before you
     * perform queries against the timer (e.g. via {@link .getDelta()}).
     */
    update(): this;
}
