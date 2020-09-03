// Type definitions for Vivus 0.4.0
// Project: http://maxwellito.github.io/vivus/
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>, Ruslan Lekhman <https://github.com/lekhmanrus>, Shuta Hirai <https://github.com/shuta13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Vivus;
export as namespace Vivus;

declare class Vivus {
    static LINEAR: Vivus.TimingFunction;
    static EASE: Vivus.TimingFunction;
    static EASE_OUT: Vivus.TimingFunction;
    static EASE_IN: Vivus.TimingFunction;
    static EASE_OUT_BOUNCE: Vivus.TimingFunction;

    /**
     * @param element The DOM element, or the ID of a DOM element, to interact with.
     * @param options
     * @param callback Callback to call at the end of the animation
     */
    constructor(element: string | HTMLElement, options?: Vivus.VivusOptions, callback?: (vivusInstance: Vivus) => void);

    /**
     * Plays the animation with the speed given in parameter.
     * A speed of `1` is the normal speed.
     * This value can be negative to go reverse, between 0 and 1 to play slowly, or greater than 1 to go faster.
     * Callback executed after the animation is finished (optional).
     *
     * (default: `1`)
     */
    play(speed?: number, callback?: () => void): this;

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
    getStatus(): 'start' | 'progress' | 'end';

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
    export type TimingFunction = (input: number) => number;

    export interface VivusOptions {
        /**
         * Determines if the item must be drawn asynchronously or not.
         * Can be `'delayed'`, `'sync'`, `'oneByOne'`, `'script'`, `'scenario'`, or `'scenario-sync'`.
         * (default: `'delayed'`)
         */
        type?: 'delayed' | 'sync' | 'oneByOne' | 'script' | 'scenario' | 'scenario-sync';
        /**
         * Link to the SVG to animate.
         * If set, Vivus will create an object tag and append it to the DOM element given to the constructor.
         * Be careful, use the `onReady` callback before playing with the Vivus instance.
         */
        file?: string;
        /**
         * Animation duration, in frames.
         * (default: `200`)
         */
        duration?: number;
        /**
         * Automatically starts the animation.
         * Can be `'inViewport'`, `'manual'`, or `'autostart'`
         * (default: `'inViewport'`)
         */
        start?: 'inViewport' | 'manual' | 'autostart';
        /**
         *     Time between the drawing of first and last path, in frames (only for `delayed` animations).
         */
        delay?: number;
        /**
         * Function called when the instance is ready to play.
         */
        onReady?: (vivusInstance: Vivus) => void;
        /**
         * Timing animation function for each path element of the SVG.
         * It must accept a `number` as a parameter (between 0 to 1), and return a `number` (also between 0 and 1) as a result.
         *
         * See the [timing function documentation](https://github.com/maxwellito/vivus#timing-function).
         */
        pathTimingFunction?: Vivus.TimingFunction;
        /**
         * Timing animation function for the complete SVG.
         * It must accept a `number` as a parameter (between 0 to 1), and return a `number` (also between 0 and 1) as a result.
         *
         * See the [timing function documentation](https://github.com/maxwellito/vivus#timing-function).
         */
        animTimingFunction?: Vivus.TimingFunction;
        /**
         * Whitespace extra margin between dashes.
         * Increase it in case of glitches at the initial state of the animation.
         *
         * (default: `2`)
         */
        dashGap?: number;
        /**
         * Force the browser to re-render all updated path items.
         * By default, the value is `true` on IE only.
         *
         * See [the troubleshooting documentation for more details](https://github.com/maxwellito/vivus#troubleshoot).
         */
        forceRender?: boolean;
        /**
         * Reverse the order of execution.
         * The default behaviour is to render from the first 'path' in the SVG to the last one.
         * This option allow you to reverse the order.
         *
         * (default: `false`)
         */
        reverseStack?: boolean;
        /**
         * Removes all extra styling on the SVG, and leaves it as original.
         */
        selfDestroy?: boolean;
    }
}
