import * as CSS from "csstype";

export function get(obj: any, ...paths: Array<string | number>): any;

export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;

export type Scale = ObjectOrArray<number | string>;

export interface styleFn {
    (...args: any[]): any;

    config?: object | undefined;
    propNames?: string[] | undefined;
    cache?: object | undefined;
}

export interface ConfigStyle {
    /** The CSS property to use in the returned style object (overridden by `properties` if present). */
    property?: keyof CSS.Properties | undefined;
    /**
     * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to which this style's value will be
     * assigned (overrides `property` when present).
     */
    properties?: Array<keyof CSS.Properties> | undefined;
    /** A string referencing a key in the `theme` object. */
    scale?: string | undefined;
    /** A fallback scale object for when there isn't one defined in the `theme` object. */
    defaultScale?: Scale | undefined;
    /** A function to transform the raw value based on the scale. */
    transform?: ((value: any, scale?: Scale) => any) | undefined;
}

export interface Config {
    /** Property name exposed for use in components */
    [customStyleName: string]: ConfigStyle | boolean;
}

export function compose(...parsers: styleFn[]): styleFn;

export function system(styleDefinitions: Config): styleFn;

export function createParser(config: ConfigStyle): styleFn;

export function createStyleFunction(args: ConfigStyle): styleFn;
