// Type definitions for d3Kit v1.1.0
// Project: https://www.npmjs.com/package/d3kit
// Definitions by: Morgan Benton <https://github.com/morphatic/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as d3 from "d3";

declare namespace d3kit {

    export interface ChartMargin {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    export interface ChartOptions {
        margin?: ChartMargin;
        offset?: [number,number];
        initialWidth?: number;
        initialHeight?: number;
        [name: string]: any;
    }

    export interface ChartMixin {
        [name: string]: any;
    }

    export class Skeleton {

        constructor(selector: string|Element, options?: ChartOptions, customEvents?: Array<string>);

        // Getters
        getCustomEventNames(): Array<string>;
        getDispatcher(): any; // should be d3.Dispatch but this throws error for user-created events
        getInnerWidth(): number;
        getInnerHeight(): number;
        getLayerOrganizer(): LayerOrganizer;
        getRootG(): d3.Selection<any>;
        getSvg(): d3.Selection<any>;

        // Getter/Setters
        data(): any;
        data(data?: any, doNotDispatch?: boolean): Skeleton;
        options(): any; // wish this could be ChartOptions
        options(options: ChartOptions, doNotDispatch?: boolean): Skeleton;
        margin(): ChartMargin;
        margin(margin: ChartMargin, doNotDispatch?: boolean): Skeleton;
        offset(): [number, number];
        offset(offset: Array<number>, doNotDispatch?: boolean): Skeleton;
        width(): number;
        width(value: number|string, doNotDispatch?: boolean): Skeleton;
        height(): number;
        height(value: number|string, doNotDispatch?: boolean): Skeleton;
        dimension(): [number, number];
        dimension(dimension: [number|string, number|string], doNotDispatch?: boolean): Skeleton;
        autoResize(mode?: string|boolean): string|boolean|void;
        autoResizeDetection(method?:string): string|void;
        autoResizeToAspectRatio(ratio?: number|boolean): number|boolean|void;

        // Other functions
        on(eventName: string, listener: (...args: Array<any>) => void): void;
        hasData(): boolean;
        hasNonZeroArea(): boolean;
        mixin(fn: ChartMixin): void;
        resizeToFitContainer(mode: string|boolean, doNotDispatch?: boolean): void;
        resizeToAspectRatio(ratio: number, doNotDispatch?: boolean): void;
    }

    interface ChartletPropertyCallback {
        (datum?: any, datum_index?: number): any;
    }

    export interface ChartletEventFunction {
        (sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
    }

    export class Chartlet {

        constructor(
            enterFunction?:   ChartletEventFunction,
            updateFunction?:  ChartletEventFunction,
            exitFunction?:    ChartletEventFunction,
            customEventName?: Array<string>);

        // Getter functions
        getDispatcher(): d3.Dispatch;
        getCustomEventNames(): Array<string>;
        getPropertyValue(name: string, datum: any, datum_index: number): any;

        // Getter/Setter functions
        property(name: string): ChartletPropertyCallback;
        property(name: string, value: any): Chartlet;

        // Enter/Update/Exit functions
        enter( sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
        update(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
        exit(  sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;

        // Inheritance functions
        inheritPropertyFrom(parent_chartlet: Chartlet, parent_property_name: string, child_property_name?: string): void;
        inheritPropertiesFrom(parent_chartlet: Chartlet, parent_property_names: Array<string>, child_property_names?: Array<string>): void;
        publishEventsTo(dispatcher: d3.Dispatch): Chartlet;

        // Events
        on(eventName: string, handlerFunction: ChartletEventFunction): void;
    }

    interface LayerConfig {
        name?: string,
        names?: Array<string>,
        sublayers?: LayerConfig
    }

    export class LayerOrganizer {

        constructor(container: d3.Selection<any>, tag?: string);

        create(config: string|Array<string>|LayerConfig|Array<LayerConfig>|any): d3.Selection<any>|Array<d3.Selection<any>>;
        get(name: string): d3.Selection<any>;
        has(name: string): boolean;
    }

    export namespace factory {
        export function createChart(
            defaultOptions: ChartOptions,
            customEvents: Array<string>,
            constructor: (skeleton: Skeleton) => void
        ): (selector: string|Element, options?: ChartOptions, customEvents?: Array<string>) => Skeleton;
    }

    export namespace helper {
        export function debounce(fn: (...args: Array<any>) => void, wait: number, immediate: boolean): (...args: Array<any>) => void;
        export function extend(target: Object, ...args: Object[]): Object;
        export function deepExtend(target: Object, ...args: Object[]): Object;
        export function bindMouseEventsToDispatcher(selection: d3.Selection<any>, dispatch: d3.Dispatch, prefix: string): void;
        export function removeAllChildren(selection: d3.Selection<any>, noTransition: boolean): d3.Selection<any>;
        export function on(element: Element, type: string, listener: (...args: Array<any>) => void): void;
        export function off(element: Element, type: string, listener: (...args: Array<any>) => void): void;
        export function trim(str: string, characters: string): string;
        export function dasherize(str: string): string;
        export function $(s: Element|string): Element;
        export function $$(s: Array<Node>|NodeList): Array<Element>;
        export function isArray(value: any): boolean;
        export function isNumber(value: any): boolean;
        export function isObject(value: any): boolean;
        export function isElement(o: any): boolean;
        export function isFunction(functionToCheck: any): boolean;
    }

}

export = d3kit;
export as namespace d3kit;
