// Type definitions for theo 8.0
// Project: https://github.com/salesforce-ux/theo
// Definitions by: Pete Petrash <https://github.com/petekp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Iterable, Collection, Map, List, OrderedMap } from "immutable";

export type StyleProperty =
    | "name"
    | "value"
    | "type"
    | "originalValue"
    | "category"
    | "comment"
    | "meta"
    | string;

export type OutputFormat =
    | "custom-properties.css"
    | "cssmodules.css"
    | "scss"
    | "sass"
    | "less"
    | "styl"
    | "map.css"
    | "map.variable.scss"
    | "list.scss"
    | "module.js"
    | "common.js"
    | "html"
    | string;

export type Transform = "raw" | "ios" | "android" | "web" | string;
export type ValueTransform =
    | "color/rgb"
    | "color/hex"
    | "color/hex8rgba"
    | "color/hex8argb"
    | "percentage/float"
    | "relative/pixel"
    | "relative/pixelValue"
    | string;

export type Prop = Map<StyleProperty, string | number>;
export type Props = List<Prop>;
export type Aliases = OrderedMap<string, Map<string, string | number>>;
export type Meta = Map<string, string>;
export type FormatResultFn = (result: ImmutableStyleMap) => string;

export interface StyleMap {
    aliases: Aliases;
    props: Props;
    meta: Meta;
    options: object;
}

export interface ImmutableStyleMap extends Map<string, any> {
    toJS(): StyleMap;
    get<K extends keyof StyleMap>(key: K): StyleMap[K];
}

export interface ConvertOptions {
    transform: TransformOptions;
    format: FormatOptions;
}

export interface TransformOptions {
    type?: Transform;
    file: string;
    data?: string;
}

export interface FormatOptions {
    type: OutputFormat;
    options?: (
        options: object,
        transformPropName?: (name: string) => string
    ) => void;
}

export interface Theo {
    convert: (options: ConvertOptions) => Promise<string>;
    convertSync: (options: ConvertOptions) => string;
    registerFormat: (
        name: OutputFormat,
        format: FormatResultFn | string
    ) => void;
    registerTransform: (
        name: Transform,
        valueTransforms: ValueTransform[]
    ) => void;
    registerValueTransform: (
        name: ValueTransform,
        predicate: (prop: Prop) => boolean,
        transform: (prop: Prop) => string | number
    ) => void;
}
