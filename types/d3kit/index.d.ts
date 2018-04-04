// Type definitions for d3Kit 3.2
// Project: https://github.com/twitter/d3kit
// Definitions by: Morgan Benton <https://github.com/morphatic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="d3" />

export as namespace d3kit;

export class Base {
    constructor(options?: ChartOptions);
    static getDefaultOptions(options?: ChartOptions): ChartOptions;
    copyDimension(another: Base): this;
    width(value: number): this;
    width(): number;
    height(value: number): this;
    height(): number;
    dimension(dimensions: [number, number]): this;
    dimension(): [number, number];
    margin(margins: ChartMargin): this;
    margin(): ChartMargin;
    offset(offset: [number, number]): this;
    offset(): [number, number];
    pixelRatio(value: number): this;
    pixelRatio(): number;
    updateDimensionNow(): this;
}

export class AbstractPlate extends Base {
    constructor(selector: string|Element, options?: ChartOptions);
    static getDefaultOptions(options?: ChartOptions): ChartOptions;
    getNode(): Element;
    getSelection(): d3.Selection<d3.BaseType, any, d3.BaseType, any>;
}

export class CanvasPlate extends AbstractPlate {
    constructor(options?: ChartOptions);
    static getDefaultOptions(options?: ChartOptions): ChartOptions;
    getContext2d(): CanvasRenderingContext2D;
    clear(): this;
}

export class DivPlate extends AbstractPlate {
    constructor(options?: ChartOptions);
    static getDefaultOptions(options?: ChartOptions): ChartOptions;
}

export class SvgPlate extends AbstractPlate {
    rootG: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    layers: LayerOrganizer;
    constructor(options?: ChartOptions);
    static getDefaultOptions(options?: ChartOptions): ChartOptions;
}

export class AbstractChart extends Base {
    constructor(selector: string|Element, options?: ChartOptions);
    static getCustomEventNames(): string[];
    addPlate(name: string, plate: AbstractPlate, doNotAppend: boolean): AbstractPlate;
    addPlate(name: string, plate: AbstractPlate): this;
    removePlate(name: string): this;
    setupDispatcher(customEventNames?: string[]): this;
    getCustomEventNames(): string[];
    getInnerWidth(): number;
    getInnerHeight(): number;
    data(data: any): this;
    data(): any;
    options(options: ChartOptions): this;
    options(): ChartOptions;
    hasData(): boolean;
    hasNonZeroArea(): boolean;
    fit(fitOptions?: FitOptions, watchOptions?: boolean|WatchOptions): this;
    stopFitWatcher(): this;
    on(name: string, listener: () => void): this;
    off(name: string): this;
    dispatchAs(name: string, ...args: any[]): (...args: any[]) => void;
    destroy(): this;
}

export interface ChartMargin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export interface ChartOptions {
    initialWidth?: number;
    initialHeight?: number;
    margin?: ChartMargin;
    offset?: [number, number];
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
    target?: Element|[number, number]|{width: number, height: number}|null;
    interval?: number;
}

export class SvgChart extends AbstractChart {
    svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    rootG: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    layers: LayerOrganizer;
    plate: SvgPlate;
    constructor(selector: string|Element, options?: ChartOptions);
}

export class CanvasChart extends AbstractChart {
    constructor(selector: string|Element, options?: ChartOptions);
    static getDefaultOptions(): ChartOptions;
    getContext2d(): CanvasRenderingContext2D;
    clear(): this;
}

export class HybridChart extends CanvasChart {
    svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    rootG: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    layers: LayerOrganizer;
    plate: SvgPlate;
    constructor(selector: string|Element, options?: ChartOptions);
    static getDefaultOptions(): ChartOptions;
}

export class LayerOrganizer {
    constructor(container: d3.Selection<d3.BaseType, any, d3.BaseType, any>, defaultTag?: string);
    create(layerNames: string|string[]|LayerConfig|LayerConfig[]): d3.Selection<d3.BaseType, any, d3.BaseType, any>|Array<d3.Selection<d3.BaseType, any, d3.BaseType, any>>;
    get(name: string): d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    has(name: string): boolean;
}

export interface LayerConfig {
    [layerName: string]: string|string[]|LayerConfig|LayerConfig[];
}

export namespace helper {
    function debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void;
    function deepExtend(dest: any, ...args: any[]): any;
    function extend(dest: any, ...args: any[]): any;
    function functor(value: any): (...args: any[]) => any;
    function rebind(target: any, source: any): any;
    function isFunction(value: any): boolean;
    function isObject(value: any): boolean;
    function kebabCase(str: string): string;
    function throttle(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void;
}
