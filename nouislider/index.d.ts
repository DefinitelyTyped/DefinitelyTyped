// Type definitions for nouislider v8.0.2
// Project: https://github.com/leongersen/noUiSlider
// Definitions by: Patrick Davies <https://github.com/bleuarg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="wnumb"/>

declare namespace noUiSlider {
    /**
     * To create a slider, call noUiSlider.create() with an element and your options.
     */
    function create(target: HTMLElement, options: Options): void;

    interface Options {
        /**
         * The start option sets the number of handles and their start positions, relative to range.
         */
        start: number | number[] | number[][];
        /**
        * The connect setting can be used to control the bar between the handles,
        * or the edges of the slider. Use "lower" to connect to the lower side,
        * or "upper" to connect to the upper side. Setting true sets the bar between the handles.
        */
        range: Object;
        /**
         * noUiSlider offers several ways to handle user interaction.
         * The range can be set to drag, and handles can move to taps.
         * All these effects are optional, and can be enable by adding their keyword to the behaviour option.
         * This option accepts a "-" separated list of "drag", "tap", "fixed", "snap" or "none".
         */
        connect?: string | boolean;
        /**
        * When using two handles, the minimum distance between the handles can be set using the margin option.
        * The margin value is relative to the value set in 'range'.
        * This option is only available on standard linear sliders.
        */
        margin?: number;
        /**
         * The limit option is the oposite of the margin option,
         * limiting the maximum distance between two handles.
         * As with the margin option, the limit option can only be used on linear sliders.
         */
        limit?: number;
        /**
         * By default, the slider slides fluently.
         * In order to make the handles jump between intervals, you can use this option.
         * The step option is relative to the values provided to range.
         */
        step?: number;
        /**
         * The orientation setting can be used to set the slider to "vertical" or "horizontal".
         * Set dimensions! Vertical sliders don't assume a default height, so you'll need to set one.
         * You can use any unit you want, including % or px.
         */
        orientation?: string;
        /**
         * By default the sliders are top-to-bottom and left-to-right,
         * but you can change this using the direction option,
         * which decides where the upper side of the slider is.
         */
        direction?: string;
        /**
         * Set the animate option to false to prevent the slider from animating to a new value with when calling .val().
         */
        animate?: boolean;
        /**
         * All values on the slider are part of a range. The range has a minimum and maximum value.
         */
        behaviour?: string;
        /**
         * To format the slider output, noUiSlider offers a format option.
         * Simply specify to and from functions to encode and decode the values.
         * See manual formatting to the right for usage information.
         * By default, noUiSlider will format output with 2 decimals.
         */
        format?: Object | ((...args:any[]) => any);

        /**
         * Allows you to generate points along the slider.
         */
        pips?: PipsOptions;
    }

    interface PipsOptions {
        /**
         * The 'range' mode uses the slider range to determine where the pips should be. A pip is generated for every percentage specified.
         *
         * The 'steps', like 'range', uses the slider range. In steps mode, a pip is generated for every step.
         * The 'filter' option can be used to filter the generated pips from the 'steps' options'
         * The filter function must return 0 (no value), 1 (large value) or 2 (small value).
         *
         * In 'positions' mode, pips are generated at percentage-based positions on the slider.
         * Optionally, the stepped option can be set to true to match the pips to the slider steps.
         *
         * The 'count' mode can be used to generate a fixed number of pips. As with positions mode, the stepped option can be used.
         *
         * The 'values' mode is similar to positions, but it accepts values instead of percentages. The stepped option can be used for this mode.
         *
         */
        mode: string; // "range" | "steps" | "positions" | "count" | "values"
        /**
         * Range Mode: percentage for range mode
         * Step Mode: step number for steps
         * Positions Mode: percentage-based positions on the slider
         * Count Mode: positions between pips
         */
        density?: number;
        /**
         * Step Mode: The filter option can be used to filter the generated pips.
         * The filter function must return 0 (no value), 1 (large value) or 2 (small value).
         */
        filter?: (...args: any[]) => PipFilterResult;
        /**
         * format for step mode
         * see noUiSlider format
         */
        format?: Object;
        /**
         *
         * values for positions and values mode
         * number pips for count mode
         */
        values?: number | number[];
        /**
         * stepped option for positions, values and count mode
         */
        stepped?: boolean;
    }

    const enum PipFilterResult {
        NoValue,
        LargeValue,
        SmallValue,
    }

    interface Callback {
        /**
         * Array for both one-handle and two-handle sliders. It contains the current slider values,
         * with formatting applied.
         */
        (values: any[], handle: number, unencoded: number): void
    }


    interface noUiSlider {
        /**
         * Bind event to the slider.
         */
        on(eventName: string, callback: Callback): void;
        /**
         * Unbind event to the slider.
         */
        off(eventName: string): void;
        /**
         * Destroy's the slider.
         */
        destroy(): void;

        /**
         * To get the current slider value. For one-handle sliders, calling .get() will return the value.
         * For two-handle sliders, an array[value, value] will be returned.
         */
        get(): number | number[];
        /**
         * noUiSlider will keep your values within the slider range, which saves you a bunch of validation.
         * If you have configured the slider to use one handle, you can change the current value by passing
         * a number to the .set() method. If you have two handles, pass an array. One-handled sliders
         * will also accept arrays. Within an array, you can set one position to null
         * if you want to leave a handle unchanged.
         */
        set(value: number | number[]): void;
    }

    interface Instance extends HTMLElement {
        noUiSlider: noUiSlider
    }
}

declare module "nouislider" {
    export = noUiSlider;
}
