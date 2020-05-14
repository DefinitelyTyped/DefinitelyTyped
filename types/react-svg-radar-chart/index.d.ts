// Type definitions for react-svg-radar-chart 1.2
// Project: https://github.com/Spyna/react-svg-radar-chart
// Definitions by: Lukas Tutkus <https://github.com/luksys5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version 3.5
// Minimum TypeScript Version: 3.0

import * as React from 'react';

export interface ChartData {
    data: {
        [value: string]: number;
    };
    meta: { color: string };
}

export interface ChartOptionsProps {
    size: number;
    axes: boolean; // show axes?
    scales: number; // show scale circles?
    captions: boolean; // show captions?
    captionMargin: number;
    dots: false; // show dots?
    zoomDistance: 1.2; // where on the axes are the captions?
    setViewBox: (options: ChartOptionsProps) => number; // custom viewBox ?
    smoothing: (points: ReadonlyArray<[]>) => string; // shape smoothing function
    axisProps: () => { className: string };
    scaleProps: () => {
        className: string;
        fill: string;
    };
    shapeProps: () => { className: string };
    captionProps: () => {
        className: string;
        textAnchor: string;
        fontSize: number;
        fontFamily: string;
    };
    dotProps: () => {
        className: string;
        mouseEnter: (dot: any) => void;
        mouseLeave: (dot: any) => void;
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
