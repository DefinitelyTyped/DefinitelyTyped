import * as React from "react";

export interface ChartData {
    data: {
        [value: string]: number;
    };
    meta: { color: string };
}

export interface ChartOptionsProps {
    /**
     * set size
     *
     * overwritten by size prop on component
     * @default 300
     */
    size?: number | undefined;
    /**
     * show axes
     * @default true
     */
    axes?: boolean | undefined;
    /**
     * show scale circles
     * @default 3
     */
    scales?: number | undefined;
    /**
     * show captions
     * @default true
     */
    captions?: boolean | undefined;
    /**
     * set caption margin
     * @default 10
     */
    captionMargin?: number | undefined;
    /**
     * show dots
     * @default false
     */
    dots?: boolean | undefined;
    /**
     * where on the axes are the captions
     * @default 1.2
     */
    zoomDistance?: number | undefined;
    /** custom viewBox */
    setViewBox?: ((options: ChartOptionsProps) => number) | undefined;
    /** custom smoothing fn */
    smoothing?: ((points: ReadonlyArray<[]>) => string) | undefined;
    /** custom axis props */
    axisProps?: (() => { className: string }) | undefined;
    /** custom scale props */
    scaleProps?:
        | (() => {
            className: string;
            fill: string;
        })
        | undefined;
    /** custom shape props */
    shapeProps?: (() => { className: string }) | undefined;
    /** custom captions props */
    captionProps?:
        | (() => {
            className: string;
            textAnchor: string;
            fontSize: number;
            fontFamily: string;
        })
        | undefined;
    /** custom dot props */
    dotProps?:
        | (() => {
            className: string;
        })
        | undefined;
}

export interface ChartProps {
    captions: {
        [key: string]: string;
    };
    data: ChartData[];
    size: number;
    options?: ChartOptionsProps | undefined;
}

export default class RadarChart extends React.Component<ChartProps> {}
