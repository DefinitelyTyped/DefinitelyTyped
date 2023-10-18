import type { SvelteComponentTyped } from "svelte";

declare namespace RangeSlider {
    interface OnStart {
        value: number;
        values: number[];
        activeHandle: number;
    }

    interface OnStop extends OnStart {
        startValue: number;
    }

    interface OnChange extends OnStop {
        previousValue: number;
    }

    type Formater = (v: number, i?: number, p?: number) => string;

    interface SpringValues {
        stiffness: number;
        damping: number;
    }

    interface RangeSliderProps {
        // dom references
        /**
         * DOM reference for binding to the main <div /> of the component (bind:slider='ref')
         */
        slider?: HTMLDivElement | null;

        // range slider props
        /**
         * Whether to style as a range picker.
         * Use range='min' or range='max' for min/max variants
         */
        range?: boolean | string;
        /**
         * If range is true, then this boolean decides if one handle will push the other along
         */
        pushy?: boolean;
        /**
         * Minimum value for the slider (should be < max)
         */
        min?: number;
        /**
         * Maximum value for the slider (should be > min)
         */
        max?: number;
        /**
         * Every nth value to allow handle to stop at (should be a positive value)
         */
        step?: number;
        /**
         * Array of values to apply on the slider.
         * Multiple values creates multiple handles.
         * (note: A slider with range property set can only have two values max)
         */
        values?: number[];
        /**
         * Make the slider render vertically (lower value on bottom)
         */
        vertical?: boolean;
        /**
         * Set true to add a floating label above focussed handles
         */
        float?: boolean;
        /**
         * Reverse the orientation of min/max
         */
        reversed?: boolean;
        /**
         * Whether hover styles are enabled for both handles and pips/values
         */
        hoverable?: boolean;
        /**
         * Determine if the slider is disabled, or enabled
         * (only disables interactions, and events)
         */
        disabled?: boolean;

        // range pips / values props
        /**
         * Whether to show pips/notches on the slider
         */
        pips?: boolean;
        /**
         * Every nth step to show a pip for.
         * This has multiple defaults depending on values property
         */
        pipstep?: number;
        /**
         * Whether to show a pip or label for all values.
         * Same as combining first, last and rest. Use all='label' to show a label value
         */
        all?: boolean | string;
        /**
         * Whether to show a pip or label for the first value on slider.
         * Use first='label' to show a label value
         */
        first?: boolean | string;
        /**
         * Whether to show a pip or label for the last value on slider.
         * Use last='label' to show a label value
         */
        last?: boolean | string;
        /**
         * Whether to show a pip or label for all other values.
         * Use rest='label' to show a label value
         */
        rest?: boolean | string;

        // formatting props
        /**
         * Give the slider a unique ID for use in styling
         */
        id?: string;
        /**
         * A string to prefix to all displayed values
         */
        prefix?: string;
        /**
         * A string to suffix to all displayed values
         */
        suffix?: string;
        /**
         * A function to re-format values before they are displayed (v = value, i = pip index, p = percent)
         */
        formatter?: Formater;
        /**
         * A function to re-format values on the handle/float before they are displayed. Defaults to the same function given to the formatter property (v = value, i = handle index, p = percent)
         */
        handleFormatter?: Formater;

        // stylistic props
        precision?: number;
        /**
         * Svelte spring physics object to change the behaviour of the handle when moving
         */
        springValues?: SpringValues;
    }

    interface RangeSliderEvents {
        /**
         * Event fired when the user begins interaction with the slider
         */
        start: CustomEvent<OnStart>;
        /**
         * Event fired when the user changes the value; returns the previous value, also
         */
        change: CustomEvent<OnChange>;
        /**
         * Event fired when the user stops interacting with slider; returns the beginning value, also
         */
        stop: CustomEvent<OnStop>;
    }

    type RangeSliderSlots = never;
}

type Props = RangeSlider.RangeSliderProps;
type Events = RangeSlider.RangeSliderEvents;
type Slots = RangeSlider.RangeSliderSlots;

declare class RangeSlider extends SvelteComponentTyped<Props, Events, Slots> {}
export = RangeSlider;
