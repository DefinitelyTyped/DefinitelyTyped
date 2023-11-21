import * as d3 from "d3";

declare namespace d3kit {
    export interface ChartMargin {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    }

    export interface ChartOptions {
        margin?: ChartMargin | undefined;
        offset?: [number, number] | undefined;
        initialWidth?: number | undefined;
        initialHeight?: number | undefined;
        [name: string]: any;
    }

    export interface ChartMixin {
        [name: string]: any;
    }

    export class Skeleton {
        constructor(selector: string | Element, options?: ChartOptions, customEvents?: string[]);

        // Getters
        getCustomEventNames(): string[];
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
        offset(offset: number[], doNotDispatch?: boolean): Skeleton;
        width(): number;
        width(value: number | string, doNotDispatch?: boolean): Skeleton;
        height(): number;
        height(value: number | string, doNotDispatch?: boolean): Skeleton;
        dimension(): [number, number];
        dimension(dimension: [number | string, number | string], doNotDispatch?: boolean): Skeleton;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        autoResize(mode?: string | boolean): string | boolean | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        autoResizeDetection(method?: string): string | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        autoResizeToAspectRatio(ratio?: number | boolean): number | boolean | void;

        // Other functions
        on(eventName: string, listener: (...args: any[]) => void): void;
        hasData(): boolean;
        hasNonZeroArea(): boolean;
        mixin(fn: ChartMixin): void;
        resizeToFitContainer(mode: string | boolean, doNotDispatch?: boolean): void;
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
            enterFunction?: ChartletEventFunction,
            updateFunction?: ChartletEventFunction,
            exitFunction?: ChartletEventFunction,
            customEventName?: string[],
        );

        // Getter functions
        getDispatcher(): d3.Dispatch;
        getCustomEventNames(): string[];
        getPropertyValue(name: string, datum: any, datum_index: number): any;

        // Getter/Setter functions
        property(name: string): ChartletPropertyCallback;
        property(name: string, value: any): Chartlet;

        // Enter/Update/Exit functions
        enter(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
        update(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
        exit(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;

        // Inheritance functions
        inheritPropertyFrom(
            parent_chartlet: Chartlet,
            parent_property_name: string,
            child_property_name?: string,
        ): void;
        inheritPropertiesFrom(
            parent_chartlet: Chartlet,
            parent_property_names: string[],
            child_property_names?: string[],
        ): void;
        publishEventsTo(dispatcher: d3.Dispatch): Chartlet;

        // Events
        on(eventName: string, handlerFunction: ChartletEventFunction): void;
    }

    interface LayerConfig {
        name?: string | undefined;
        names?: string[] | undefined;
        sublayers?: LayerConfig | undefined;
    }

    export class LayerOrganizer {
        constructor(container: d3.Selection<any>, tag?: string);

        create(
            config: string | string[] | LayerConfig | LayerConfig[] | any,
        ): d3.Selection<any> | Array<d3.Selection<any>>;
        get(name: string): d3.Selection<any>;
        has(name: string): boolean;
    }

    export namespace factory {
        export function createChart(
            defaultOptions: ChartOptions,
            customEvents: string[],
            constructor: (skeleton: Skeleton) => void,
        ): (selector: string | Element, options?: ChartOptions, customEvents?: string[]) => Skeleton;
    }

    export namespace helper {
        export function debounce(
            fn: (...args: any[]) => void,
            wait: number,
            immediate: boolean,
        ): (...args: any[]) => void;
        export function extend(target: Object, ...args: Object[]): Object;
        export function deepExtend(target: Object, ...args: Object[]): Object;
        export function bindMouseEventsToDispatcher(
            selection: d3.Selection<any>,
            dispatch: d3.Dispatch,
            prefix: string,
        ): void;
        export function removeAllChildren(selection: d3.Selection<any>, noTransition: boolean): d3.Selection<any>;
        export function on(element: Element, type: string, listener: (...args: any[]) => void): void;
        export function off(element: Element, type: string, listener: (...args: any[]) => void): void;
        export function trim(str: string, characters: string): string;
        export function dasherize(str: string): string;
        export function $(s: Element | string): Element;
        export function $$(s: Node[] | NodeList): Element[];
        export function isArray(value: any): boolean;
        export function isNumber(value: any): boolean;
        export function isObject(value: any): boolean;
        export function isElement(o: any): boolean;
        export function isFunction(functionToCheck: any): boolean;
    }
}

export = d3kit;
export as namespace d3kit;
