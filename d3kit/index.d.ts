// Type definitions for d3Kit v3.1.1
// Project: https://github.com/twitter/d3kit
// Definitions by: Morgan Benton <https://github.com/morphatic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="d3" />

export as namespace d3kit;

export class AbstractChart {
    container: Element;
    constructor(selector: string|Element, options?: ChartOptions);
    static getDefaultOptions(): ChartOptions;
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
    data(data: any): this;
    data(): any;
    margin(margins: ChartMargin): this;
    margin(): ChartMargin;
    offset(offset: ChartOffset): this;
    offset(): ChartOffset;
    options(options: ChartOptions): this;
    options(): ChartOptions;
    updateDimensionNow(): this;
    hasData(): boolean;
    hasNonZeroArea(): boolean;
    fit(fitOptions: FitOptions, watchOptions?: WatchOptions): this;
    stopFitWatcher(): this;
    on(name: string, listener: () => void): this;
    off(name: string): this;
    destroy(): void;
}

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

export class SvgChart extends AbstractChart {
    svg: SVGElement;
    rootG: SVGElement;
    layers: LayerOrganizer;
    constructor(selector: string|Element, options?: ChartOptions);
}

export class CanvasChart extends AbstractChart {
    constructor(selector: string|Element, options?: ChartOptions);
    static getDefaultOptions(): ChartOptions;
    getContext2d(): CanvasRenderingContext2D;
    clear(): this;
}

export class LayerOrganizer {
    constructor(container: d3.Selection<d3.BaseType, any, d3.BaseType, any>, defaultTag?: string);
    create(layerNames: string|Array<string>|LayerConfig|Array<LayerConfig>): d3.Selection<d3.BaseType, any, d3.BaseType, any>|Array<d3.Selection<d3.BaseType, any, d3.BaseType, any>>;
    get(name: string): d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    has(name: string): boolean;
}

export interface LayerConfig {
    [layerName: string]: string|string[]|LayerConfig|Array<LayerConfig>;
}

export namespace helper {
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
