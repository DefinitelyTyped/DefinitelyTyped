// Type definitions for react-gauge-chart 0.3
// Project: https://github.com/Martin36/react-gauge-chart
// Definitions by: Meir Keller <https://github.com/meirkl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface GaugeChartProps {
    /**
     * Used for the identification of the div surrounding the chart
     */
    id?: string;

    /**
     * Add className to the div container
     */
    className?: string;

    /**
     * Add style to the div container
     * @default { width: '100%' }
     */
    style?: React.CSSProperties;

    /**
     * Margin for the chart inside the containing SVG element
     * @default 0.05
     */
    marginInPercent?: number;

    /**
     * Corner radius for the elements in the chart
     * @default 6
     */
    cornerRadius?: number;

    /**
     * The number of elements displayed in the arc
     * @default 3
     */
    nrOfLevels?: number;

    /**
     * The number where the pointer should point to (between 0 and 1)
     * @default 0.4
     */
    percent?: number;

    /**
     * The distance between the elements in the arc
     * @default 0.05
     */
    arcPadding?: number;

    /**
     * The thickness of the arc
     * @default 0.2
     */
    arcWidth?: number;

    /**
     * An array specifying the length of each individual arc. If this prop is set, the nrOfLevels prop will have no effect
     */
    arcsLength?: number[];

    /**
     * An array of colors in HEX format displayed in the arc
     * @default ["#00FF00", "#FF0000"]
     */
    colors?: string[];

    /**
     * The color of the text
     * @default "#FFFFFF"
     */
    textColor?: string;

    /**
     * The color of the needle triangle
     * @default "#464A4F"
     */
    needleColor?: string;

    /**
     * The color of the circle at the base of the needle
     * @default "#464A4F"
     */
    needleBaseColor?: string;

    /**
     * Whether or not to hide the percentage display
     * @default false
     */
    hideText?: boolean;

    /**
     * Whether or not to animate the needle when loaded
     * @default true
     */
    animate?: boolean;

    /**
     * The font size of gauge text
     * @default null
     */
    fontSize?: string;

    /**
     * Duration in ms for the needle animation
     * @default 3000
     */
    animateDuration?: number;

    /**
     * Delay in ms before starting the needle animation
     * @default 500
     */
    animDelay?: number;

    /**
     * Format you own text value
     * @example
     * ```
     * (value) => value + '%'
     * ```
     * @default null
     */
    formatTextValue?: (value: string) => string;
}

export default function GaugeChart(props: GaugeChartProps): React.ReactElement;
