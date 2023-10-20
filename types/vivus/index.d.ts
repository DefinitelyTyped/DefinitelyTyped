export = Vivus;
export as namespace Vivus;

/**
 * Take any SVG and make the animation
 * to give give the impression of live drawing
 */
declare class Vivus {
    static LINEAR: Vivus.TimingFunction;
    static EASE: Vivus.TimingFunction;
    static EASE_OUT: Vivus.TimingFunction;
    static EASE_IN: Vivus.TimingFunction;
    static EASE_OUT_BOUNCE: Vivus.TimingFunction;

    /**
     * @param element Dom element of the SVG or id of it
     * @param options Options about the animation
     * @param callback Callback for the end of the animation
     */
    constructor(element: string | HTMLElement, options?: Vivus.VivusOptions, callback?: (vivusInstance: Vivus) => void);

    /**
     * Plays the animation with the speed given in parameter.
     * A speed of `1` is the normal speed.
     * This value can be negative to go reverse, between 0 and 1 to play slowly, or greater than 1 to go faster.
     * Callback executed after the animation is finished (optional).
     *
     * @param [speed=1] Animation speed
     * @param [callback]
     */
    play(speed?: number, callback?: () => void): this;
    /**
     * @param callback
     */
    play(callback: () => void): this;

    /**
     * Stops the animation.
     */
    stop(): this;

    /**
     * Reinitialises the SVG to the original undrawn state.
     */
    reset(): this;

    /**
     * Completely draws the SVG at its final state.
     */
    finish(): this;

    /**
     * Set the progress of the animation.
     * Progress must be a `number` between `0` and `1`.
     */
    setFrameProgress(progress: number): this;

    /**
     * Get the status of the animation between start, progress, end.
     */
    getStatus(): "start" | "progress" | "end";

    /**
     * Reset the SVG but make the instance out of order.
     */
    destroy(): void;

    /**
     * for types of HTMLElement
     */
    el: HTMLElement;
}

declare namespace Vivus {
    type TimingFunction = (input: number) => number;

    interface VivusOptions {
        /**
         * Determines if the item must be drawn asynchronously or not.
         * Can be `'delayed'`, `'sync'`, `'oneByOne'`, `'script'`, `'scenario'`, or `'scenario-sync'`.
         * (default: `'delayed'`)
         */
        type?: "delayed" | "sync" | "oneByOne" | "script" | "scenario" | "scenario-sync" | undefined;
        /**
         * Link to the SVG to animate.
         * If set, Vivus will create an object tag and append it to the DOM element given to the constructor.
         * Be careful, use the `onReady` callback before playing with the Vivus instance.
         */
        file?: string | undefined;
        /**
         * Animation duration, in frames.
         * (default: `200`)
         */
        duration?: number | undefined;
        /**
         * Automatically starts the animation.
         * Can be `'inViewport'`, `'manual'`, or `'autostart'`
         * (default: `'inViewport'`)
         */
        start?: "inViewport" | "manual" | "autostart" | undefined;
        /**
         *     Time between the drawing of first and last path, in frames (only for `delayed` animations).
         */
        delay?: number | undefined;
        /**
         * Function called when the instance is ready to play.
         */
        onReady?: ((vivusInstance: Vivus) => void) | undefined;
        /**
         * Timing animation function for each path element of the SVG.
         * It must accept a `number` as a parameter (between 0 to 1), and return a `number` (also between 0 and 1) as a result.
         *
         * See the [timing function documentation](https://github.com/maxwellito/vivus#timing-function).
         */
        pathTimingFunction?: TimingFunction | undefined;
        /**
         * Timing animation function for the complete SVG.
         * It must accept a `number` as a parameter (between 0 to 1), and return a `number` (also between 0 and 1) as a result.
         *
         * See the [timing function documentation](https://github.com/maxwellito/vivus#timing-function).
         */
        animTimingFunction?: TimingFunction | undefined;
        /**
         * Whitespace extra margin between dashes.
         * Increase it in case of glitches at the initial state of the animation.
         *
         * (default: `2`)
         */
        dashGap?: number | undefined;
        /**
         * Force the browser to re-render all updated path items.
         * By default, the value is `true` on IE only.
         *
         * See [the troubleshooting documentation for more details](https://github.com/maxwellito/vivus#troubleshoot).
         */
        forceRender?: boolean | undefined;
        /**
         * Reverse the order of execution.
         * The default behaviour is to render from the first 'path' in the SVG to the last one.
         * This option allow you to reverse the order.
         *
         * (default: `false`)
         */
        reverseStack?: boolean | undefined;
        /**
         * Removes all extra styling on the SVG, and leaves it as original.
         */
        selfDestroy?: boolean | undefined;
    }
}
