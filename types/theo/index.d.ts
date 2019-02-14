// Type definitions for theo 8.1.1
// Project: https://github.com/salesforce-ux/theo
// Definitions by: Pete Petrash <https://github.com/petekp>
//                 Niko Laitinen <https://github.com/laitine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Collection, Map, List, OrderedMap } from "immutable";

export type StyleProperty =
    | "name"
    | "value"
    | "type"
    | "originalValue"
    | "category"
    | "comment"
    | "meta";

export type Format =
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
    | "json"
    | "raw.json"
    | "ios.json"
    | "android.xml"
    | "aura.tokens";

export function convert(options: ConvertOptions): Promise<string>;
export function convertSync(options: ConvertOptions): string;
export function registerFormat(
    name: string,
    format: FormatResultFn | string
): void;
export function registerTransform(
    name: string,
    valueTransforms: string[]
): void;
export function registerValueTransform(
    name: string,
    predicate: (prop: Prop) => boolean,
    transform: (prop: Prop) => string | number
): void;

export type Prop = Map<StyleProperty, string | number>;
export type Props = List<Prop>;
export type Aliases = OrderedMap<string, Map<string, string | number>>;
export type Meta = Map<string, string>;
export type FormatResultFn = (result: ImmutableStyleMap) => string;

export interface StyleMap {
    aliases: Aliases;
    global?: Props;
    imports?: string[];
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
    resolveAliases?: boolean;
    resolveMetaAliases?: boolean;
}

export interface TransformOptions {
    type?: string;
    file: string;
    data?: string;
}

export interface FormatOptions {
    type: Format;
    options?: (
        options: object,
        transformPropName?: (name: string) => string
    ) => void;
}
