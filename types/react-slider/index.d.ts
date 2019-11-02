// Type definitions for react-slider 1.0
// Project: https://github.com/mpowaga/react-slider
// Definitions by: Jason Unger <https://github.com/jsonunger>
//                 Wayne Van Son <https://github.com/waynevanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare namespace ReactSlider {
    interface ReactSliderProps<S extends number | number[]> {
        /** The minimum value of the slider. */
        min?: number;
        /** The maximum value of the slider. */
        max?: number;
        /**
         * Value to be added or subtracted on each step the slider makes.
         * Must be greater than zero.
         * `max - min` should be evenly divisible by the step value.
         */
        step?: number;
        /**
         * The result of the function is the value to be added or subtracted
         * when the `Page Up` or `Page Down` keys are pressed.
         *
         * The current `step` value will be passed as the only argument.
         * By default, paging will modify `step` by a factor of 10.
         */
        pageFn?: (step: number) => number;
        /**
         * The minimal distance between any pair of thumbs.
         *
         * Must be positive, but zero means they can sit on top of each other.
         */
        minDistance?: number;
        /**
         * Determines the initial positions of the thumbs and the number of thumbs.
         *
         * If a number is passed a slider with one thumb will be rendered.
         * If an array is passed each value will determine the position of one thumb.
         * The values in the array must be sorted.
         */
        defaultValue?: S;
        /**
         * Like `defaultValue` but for
         * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
         */
        value?: S;
        /**
         * Determines whether the slider moves horizontally (from left to right)
         * or vertically (from top to bottom).
         */
        orientation?: 'horizontal' | 'vertical';
        /** The css class set on the slider node. */
        className?: string;
        /**
         * The css class set on each thumb node.
         *
         * In addition each thumb will receive a numbered css class of the form
         * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
         */
        thumbClassName?: string;
        /**
         * The css class set on the thumb that is currently being moved.
         */
        thumbActiveClassName?: string;
        /**  If `true` tracks between the thumbs will be rendered. */
        withTracks?: boolean;
        /**
         * The css class set on the tracks between the thumbs.
         * In addition track fragment will receive a numbered css class of the form
         * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
         */
        trackClassName?: string;
        /**
         * If `true` the active thumb will push other thumbs
         * within the constraints of `min`, `max`, `step` and `minDistance`.
         */
        pearling?: boolean;
        /** If `true` the thumbs can't be moved. */
        disabled?: boolean;
        /** Disables thumb move when clicking the slider track. */
        snapDragDisabled?: boolean;
        /** Inverts he slider. */
        invert?: boolean;
        /** Callback called before starting to move a thumb. */
        onBeforeChange?: (value: S) => void;
        /** Callback called on every value change. */
        onChange?: (value: S) => void;
        /** Callback called only after moving a thumb has ended. */
        onAfterChange?: (value: S) => void;
        /**
         * Callback called when the the slider is clicked (thumb or tracks).
         * Receives the value at the clicked position as argument.
         */
        onSliderClick?: (value: number) => void;
        /**
         * aria-label for screen-readers to apply to the thumbs.
         * Use an array for more than one thumb.
         * The length of the array must match the number of thumbs in the value array.
         */
        ariaLabel?: ConvertToString<S>;
        /**
         * aria-valuetext for screen-readers.
         * Can be a static string, or a function that returns a string.
         * The function will be passed a single argument,
         * an object with the following properties:
         *
         *     state => `Value: ${state.value}`
         *
         * - `state.index` {`number`} the index of the thumb
         * - `state.value` {`number` | `array`} the current value state
         * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
         */
        ariaValueText?: string | ((state: State<S>) => string);
        /**
         * Provide a custom render function for the track node.
         * The render function will be passed two arguments,
         * an object with props that should be added to your handle node,
         * and an object with track and slider state:
         *
         *     (props, state) => <div {...props} />
         *
         * - `props` {`object`} props to be spread into your track node
         * - `state.index` {`number`} the index of the track
         * - `state.value` {`number` | `array`} the current value state
         */
        renderTrack?: (props: ReactSliderProps<S>, state: StateNoValueNow<S>) => React.ReactElement;
        /**
         * Provide a custom render function for dynamic thumb content.
         * The render function will be passed two arguments,
         * an object with props that should be added to your thumb node,
         * and an object with thumb and slider state:
         *
         *     (props, state) => <div {...props} />
         *
         * - `props` {`object`} props to be spread into your thumb node
         * - `state.index` {`number`} the index of the thumb
         * - `state.value` {`number` | `array`} the current value state
         * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
         */
        renderThumb?: (props: ReactSliderProps<S>, state: State<S>) => React.ReactElement;
    }
}

interface State<S extends number | number[]> extends StateNoValueNow<S> {
    /**  the value of the thumb (i.e. aria-valuenow) */
    valueNow: number;
}

interface StateNoValueNow<S extends number | number[]> {
    /** the index of the thumb. */
    index: number;
    /** the current value state. */
    value: S;
}

declare const ReactSlider: React.ComponentClass<ReactSlider.ReactSliderProps<any>>;

export = ReactSlider;

type ConvertToString<T extends number | number[]> = T extends number[] ? string[] : string;
