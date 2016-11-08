// Type definitions for d3Kit v3.1.1
// Project: https://github.com/twitter/d3kit
// Definitions by: Morgan Benton <https://github.com/morphatic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="d3" />

declare class AbstractChart {
    container: Element;
    constructor(selector: string|Element, options?: AbstractChart.ChartOptions);
    static getDefaultOptions(): AbstractChart.ChartOptions;
    static getCustomEventNames(): string[];
    setupDispatcher(customEventNames?: string[]): void;
    getCustomEventNames(): string[];
    getInnerWidth(): number;
    getInnerHeight(): number;
    width(value: number): this;
    width(): number;
    height(value: number): this;
    height(): number;
    dimension(dimensions: [number, number]): this;
    dimension(): [number, number];
    data(): any;
    data(data: any): this;
    margin(margins: AbstractChart.ChartMargin): this;
    margin(): AbstractChart.ChartMargin;
    offset(offset: AbstractChart.ChartOffset): this;
    offset(): AbstractChart.ChartOffset;
    options(options: AbstractChart.ChartOptions): this;
    options(): AbstractChart.ChartOptions;
    updateDimensionNow(): this;
    hasData(): boolean;
    hasNonZeroArea(): boolean;
    fit(fitOptions: AbstractChart.FitOptions, watchOptions?: AbstractChart.WatchOptions): this;
    stopFitWatcher(): this;
    on(name: string, listener: () => void): this;
    off(name: string): this;
    destroy(): void;
}

declare namespace AbstractChart {
    export interface ChartMargin {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    export interface ChartOffset {
        x: number;
        y: number;
    }

    export interface ChartOptions {
        initialWidth?: number;
        initialHeight?: number;
        margin?: ChartMargin;
        offset?: ChartOffset;
        pixelRatio?: number;
    }

    // from https://github.com/kristw/slimfit
    export interface FitOptions {
        mode?: string;
        width?: string|number;
        height?: string|number;
        ratio?: number;
        maxWidth?: string|number;
        maxHeight?: string|number;
    }

    // from https://github.com/kristw/slimfit
    export interface WatchOptions {
        mode?: string;
        target?: any; // lazy
        interval?: number;
    }
}

declare class SvgChart extends AbstractChart {
    svg: SVGElement;
    rootG: SVGElement;
    layers: d3kit.LayerOrganizer;
    constructor(selector: string|Element, options?: AbstractChart.ChartOptions);
}

declare class CanvasChart extends AbstractChart {
    constructor(selector: string|Element, options?: AbstractChart.ChartOptions);
    static getDefaultOptions(): AbstractChart.ChartOptions;
    getContext2d(): CanvasRenderingContext2D;
    clear(): this;
}

declare namespace d3kit {
    export class LayerOrganizer {
        constructor(container: d3.Selection<d3.BaseType, any, d3.BaseType, any>, defaultTag?: string);
        create(layerNames: string|Array<string>|LayerConfig|Array<LayerConfig>): d3.Selection<d3.BaseType, any, d3.BaseType, any>|Array<d3.Selection<d3.BaseType, any, d3.BaseType, any>>;
        get(name: string): d3.Selection<d3.BaseType, any, d3.BaseType, any>;
        has(name: string): boolean;
    }

    interface LayerConfig {
        [layerName: string]: string|string[]|LayerConfig|Array<LayerConfig>;
    }
}

declare namespace helper {
    function debounce(fn: (...args: Array<any>) => void, delay: number): (...args: Array<any>) => void;
    function deepExtend(dest: Object, ...args: Object[]): Object;
    function extend(dest: Object, ...args: Object[]): Object;
    function functor(value: any): (...args: Array<any>) => any;
    function rebind(target: Object, source: Object): Object;
    function isFunction(value: any): boolean;
    function isObject(value: any): boolean;
    function kebabCase(str: string): string;
    function throttle(fn: (...args: Array<any>) => void, delay: number): (...args: Array<any>) => void;
}
