// Type definitions for react-svg-radar-chart 1.2
// Project: https://github.com/Spyna/react-svg-radar-chart
// Definitions by: Lukas Tutkus <https://github.com/luksys5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import * as React from 'react';

export interface ChartData {
    data: {
        [value: string]: number;
    };
    meta: { color: string };
}

export interface ChartOptionsProps {
    /**
     * set size
     * @default 300
     */
    size?: number;
    /**
     * show axes
     * @default true
     */
    axes?: boolean;
    /**
     * show scale circles
     * @default 3
     */
    scales?: number;
    /**
     * show captions
     * @default true
     */
    captions?: boolean;
    /**
     * set caption margin
     * @default 10
     */
    captionMargin?: number;
    /**
     * show dots
     * @default false
     */
    dots?: boolean;
    /**
     * where on the axes are the captions
     * @default 1.2
     */
    zoomDistance?: number;
    /** custom viewBox */
    setViewBox?: (options: ChartOptionsProps) => number;
    /** custom smoothing fn */
    smoothing: (points: ReadonlyArray<[]>) => string;
    axisProps: () => { className: string };
    scaleProps: () => {
        className: string;
        fill: string;
    };
    shapeProps: () => { className: string };
    /** custom captions props */
    captionProps: () => {
        className: string;
        textAnchor: string;
        fontSize: number;
        fontFamily: string;
    };
    dotProps: () => {
        className: string;
    };
}

export interface ChartProps {
    captions: {
        [key: string]: string;
    };
    data: ChartData[];
    size: number;
    options?: ChartOptionsProps;
}

export default class RadarChart extends React.Component<ChartProps> { }
