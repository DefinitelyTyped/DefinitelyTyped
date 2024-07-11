import { Collection, List, Map, OrderedMap } from "immutable";

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

export type Transform = "raw" | "ios" | "android" | "web";

export type ValueTransform =
    | "color/rgb"
    | "color/hex"
    | "color/hex8rgba"
    | "color/hex8argb"
    | "percentage/float"
    | "relative/pixel"
    | "relative/pixelValue";

export type Prop = Map<StyleProperty, string | number>;
export type Props = List<Prop>;
export type Aliases = OrderedMap<string, Map<string, string | number>>;
export type Meta = Map<string, string>;
export type FormatResultFn = (result: ImmutableStyleMap) => string;

export interface StyleMap {
    aliases: Aliases;
    global?: Props | undefined;
    imports?: string[] | undefined;
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
    resolveAliases?: boolean | undefined;
    resolveMetaAliases?: boolean | undefined;
}

export interface TransformOptions<T extends string = never> {
    type?: Transform | T | undefined;
    file: string;
    data?: string | undefined;
}

export interface FormatOptions {
    type: Format;
    options?:
        | ((
            options: object,
            transformPropName?: (name: string) => string,
        ) => void)
        | undefined;
}

export function convert(options: ConvertOptions): Promise<string>;
export function convertSync(options: ConvertOptions): string;
export function registerFormat<T extends string = never>(
    name: Format | T,
    format: FormatResultFn | string,
): void;
export function registerTransform<
    T extends string = never,
    V extends string = never,
>(name: Transform | T, valueTransforms: ValueTransform[] | V[]): void;
export function registerValueTransform<T extends string = never>(
    name: ValueTransform | T,
    predicate: (prop: Prop) => boolean,
    transform: (prop: Prop) => string | number,
): void;
