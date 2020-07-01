// Type definitions for rc-slider 8.6
// Project: http://github.com/react-component/slider
// Definitions by: Marcinkus Mantas <https://github.com/mantasmarcinkus>
//                 Alexander Mattoni <https://github.com/mattoni>
//                 Austin Turner <https://github.com/paustint>
//                 Jacob Froman <https://github.com/j-fro>
//                 Deanna Veale <https://github.com/Deanna2>
//                 Nick Maddren <https://github.com/nicholasmaddren>
//                 Roman Nevolin <https://github.com/nulladdict>
//                 Mojtaba Izadmehr <https://github.com/m-izadmehr>
//                 Andrey Yankovsky <https://github.com/yankovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { RCTooltip } from "rc-tooltip";

export interface Marks {
    [number: number]:
        | JSX.Element
        | string
        | { style: any; label: string | JSX.Element };
}

export interface CommonApiProps {
    /**
     * Additional CSS class for the root DOM node
     *  @default ''
     */
    className?: string;
    /**
     * The minimum value of the slider
     *  @default 0
     */
    min?: number;
    /**
     * The maximum value of the slider
     *  @default 100
     */
    max?: number;
    /**
     * Marks on the slider. The key determines the position, and the value determines what will show.
     * If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.
     *  @default '{}' | {number: { style, label }}
     */
    marks?: Marks;
    /**
     * Value to be added or subtracted on each step the slider makes. Must be greater than zero, and max - min should be evenly divisible by the step value.
     *  @default 1
     */
    step?: number | null;
    /**
     * If vertical is true, the slider will be vertical.
     * @default false
     */
    vertical?: boolean;
    /**
     * A handle generator which could be used to customized handle.
     */
    handle?(props: any): React.ReactNode;
    /**
     * If the value is true, it means a continuous value interval, otherwise, it is a independent value.
     *  @default true
     */
    included?: boolean;
    /**
     * If true, handles can't be moved.
     *  @default false
     */
    disabled?: boolean;
    /**
     * When the step value is greater than 1, you can set the dots to true if you want to render the slider with dots.
     *  @default false
     */
    dots?: boolean;

    /**
     * @deprecated in version ^6.0.0. Use rc-tooltip
     * Tooltip transition class name
     */
    tipTransitionName?: string;

    /**
     * @deprecated in version ^6.0.0. Use rc-tooltip
     * Tooltip formatter
     */
    tipFormatter?: ((value: any) => any | undefined) | null;

    /**
     * The style used for the background and container. (both for slider(Object) and range(Array of Object), the array will be used for mutli handle follow element order)
     */
    style?: React.CSSProperties[] | React.CSSProperties;

    /**
     * The style used for handle. (both for slider(Object) and range(Array of Object), the array will be used for mutli handle follow element order)
     */
    handleStyle?: React.CSSProperties[] | React.CSSProperties;

    /**
     * The style used for track. (both for slider(Object) and range(Array of Object), the array will be used for mutli track follow element order)
     */
    trackStyle?: React.CSSProperties[] | React.CSSProperties;

    /**
     * The style used for the track base color.
     */
    railStyle?: React.CSSProperties;

    /**
     * The style used for the dots.
     */
    dotStyle?: React.CSSProperties;

    /**
     * The style used for the active dots.
     */
    activeDotStyle?: React.CSSProperties;
    /**
     * Reverse the direction of the slider.
     * From Left to Right To Right to Left
     * @default false
     */
    reverse?: boolean;
}

export interface SliderProps extends CommonApiProps {
    /**
     * onBeforeChange will be triggered when ontouchstart or onmousedown is triggered.
     */
    onBeforeChange?(value: number): void;
    /**
     * onChange will be triggered while the value of Slider changing.
     */
    onChange?(value: number): void;
    /**
     * onAfterChange will be triggered when ontouchend or onmouseup is triggered.
     */
    onAfterChange?(value: number): void;
    /**
     * Handle blur event on the control
     */
    onBlur?: React.FocusEventHandler;
    /**
     * Set initial value of slider.
     *  @default 0
     */
    defaultValue?: number;
    /**
     * Set current value of slider.
     */
    value?: number;
    /**
     * Track starts from this value. If `undefined`, `min` is used.
     * @default undefined
     */
    startPoint?: number;
    /**
     * Set the tabIndex of the slider handle.
     * @default 0
     */
    tabIndex?: number;
}

export interface RangeProps extends CommonApiProps {
    /**
     * onBeforeChange will be triggered when ontouchstart or onmousedown is triggered.
     * For prop (count = -1) type returned is [number, undefined]. Bug raised in rc-slider https://github.com/react-component/slider/issues/457
     */
    onBeforeChange?(value: number[]): void;
    /**
     * onChange will be triggered while the value of Slider changing.
     * For prop (count = -1) type returned is [number, undefined]. Bug raised in rc-slider https://github.com/react-component/slider/issues/457
     */
    onChange?(value: number[]): void;
    /**
     * onAfterChange will be triggered when ontouchend or onmouseup is triggered.
     * For prop (count = -1) type returned is [number, undefined]. Bug raised in rc-slider https://github.com/react-component/slider/issues/457
     */
    onAfterChange?(value: number[]): void;
    /**
     * Set initial positions of handles.
     *  @default [0,0]
     */
    defaultValue?: number[];
    /**
     * Set current positions of handles.
     */
    value?: number[];
    /**
     * Set the tabIndex of each handle.
     * @default [0,0]
     */
    tabIndex?: number[];
    /**
     * Determine how many ranges to render, and multiple handles will be rendered (number + 1).
     *  @default 1
     */
    count?: number;
    /**
     * allowCross could be set as true to allow those handles to cross.
     *  @default true
     */
    allowCross?: boolean;
    /**
     * pushable could be set as true to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles.
     *  @default true
     */
    pushable?: boolean | number;
}

export interface HandleProps extends CommonApiProps {
    /**
     * Class name
     */
    className: string;
    /**
     * Styling if true, then bottom: {offset} else left: {offset}
     * @default False
     */
    vertical: boolean;
    /**
     * Styling option offset
     */
    offset: number;
   /**
    * Set the tabIndex of the slider handle.
    * @default 0
    */
    tabIndex?: number;
}

export interface WithTooltipProps {
    tipFormatter?: (value: number) => React.ReactNode;
    tipProps?: Partial<RCTooltip.Props>;
}

export default class Slider extends React.Component<SliderProps> {}
export class Range extends React.Component<RangeProps> {}
export class Handle extends React.Component<HandleProps> {}

export function createSliderWithTooltip(
    slider: typeof Slider
): new () => React.Component<WithTooltipProps & SliderProps>;
export function createSliderWithTooltip(
    range: typeof Range
): new () => React.Component<WithTooltipProps & RangeProps>;
