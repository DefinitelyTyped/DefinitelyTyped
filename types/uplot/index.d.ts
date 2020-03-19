// Type definitions for uPlot 1.0
// Project: https://github.com/leeoniya/uPlot
// Definitions by: Leo Bernard <https://github.com/leolabs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

// Types taken from https://github.com/leeoniya/uPlot/pull/153, all credit goes to Bob Klosinski <https://github.com/fluxin>

type CanvasStrokeStyle = CanvasRenderingContext2D['strokeStyle'];
type CanvasLineWidth = CanvasRenderingContext2D['lineWidth'];
type CanvasFillStyle = CanvasRenderingContext2D['fillStyle'];
type CanvasLineDash = number[];

declare class UPlot {
    constructor(opts: UPlot.Options, data: UPlot.Data, ctx: HTMLElement);
    readonly width: number;
    readonly height: number;
    readonly ctx: CanvasRenderingContext2D;
    readonly bbox: UPlot.BBox;
    readonly select: UPlot.BBox;

    redraw(): void;
    batch(): void;
    destroy(): void;

    setData(data: UPlot.Data, something?: boolean): void;
    setScale(scale: string, limits: { min: number; max: number }): void;
    setCursor(cursor: string): void;
    setSelect(opts: UPlot.SelectOpts, unknown?: boolean): void;
    setSize(size: { width: number; height: number }): void;

    posToIdx(left: number): number;
    posToVal(leftTop: number, scaleKey: string): number;
    valToPos(val: number, scaleKey: string): number;
}

declare namespace UPlot {
    type Data = readonly number[][];
    interface BBox {
        left: number;
        top: number;
        width: number;
        height: number;
    }
    interface Options {
        title?: string;
        id?: string;
        class?: string;
        width: number;
        height: number;
        series: Series[];
        scales?: ScaleMap;
        axes?: Axis[];
        hooks?: Hooks;
        plugins?: Array<{
            hooks: Hooks;
        }>;
        select?: {
            show: boolean;
        };
        legend?: {
            show?: boolean;
        };
    }

    interface SelectOpts {
        show?: number;
        left?: number;
        width?: number;
        top?: number;
        height?: number;
    }

    interface Cursor {
        show?: boolean;
        points?: {
            show: boolean | (() => boolean);
        };
        x: number;
        y: number;
        drag: {
            setSelect: () => void;
            setScale: () => void;
            x: number;
            y: number;
        };
        sync: {
            key: string;
            setSeries: () => void;
        };
        focus: {};
        lock: boolean;
    }

    interface ScaleMap {
        [key: string]: Scale;
    }

    type ValueFunction = (u: UPlot, v: number) => void;
    interface Series {
        show?: boolean;
        spanGaps?: boolean;
        label?: string;
        band?: boolean;
        stroke?: CanvasStrokeStyle;
        width?: CanvasLineWidth;
        fill?: CanvasFillStyle;
        dash?: CanvasLineDash;
        value?: ValueFunction;
    }
    interface Axis {
        show?: boolean;
        label?: string;
        labelSize?: number;
        labelFont?: string;
        font?: string;
        gap?: number;
        size?: number;
        stroke?: CanvasStrokeStyle;
        grid?: GridOpts;
        ticks?: TickOpts;
    }
    interface GridOpts {
        show?: boolean;
        stroke?: CanvasStrokeStyle;
        width?: number;
        dash?: CanvasLineDash;
    }
    interface TickOpts {
        show?: boolean;
        stroke?: CanvasStrokeStyle;
        width?: number;
        dash?: number[];
        size?: number;
    }
    interface Scale {
        auto?: boolean;
        range?: [number, number];
        time?: boolean;
        distr?: number;
        stroke?: CanvasStrokeStyle;
    }
    type SpaceFunction = (self: Axis, scaleMin: number, scaleMax: number, dim: number) => number;
    type AxisValueFunction = (self: Axis, ticks: ReadonlyArray<number>, space: number) => string[];
    type IncrFunction = (self: Axis) => number[];
    interface Axis {
        scale?: string;
        space?: number | SpaceFunction;
        incrs?: number[] | IncrFunction;
        values?: Array<[number, string, number, string]> | AxisValueFunction;
    }
    interface Hooks {
        init?: Array<(u: UPlot, opts: Options, data: Data) => void>;
        setSelect?: Array<(self: UPlot) => void>;
    }
}

export = UPlot;
