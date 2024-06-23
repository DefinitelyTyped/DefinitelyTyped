import { FontFace as FontFaceObject, KeyframesObject, StandardEngine, StyleObject } from "styletron-standard";

export class SequentialIDGenerator {
    prefix: string;
    count: number;
    offset: number;
    msb: number;
    power: number;
    constructor(prefix: string);
    next(): string;
    increment(): number;
}

export class Cache<T> {
    cache: { [key: string]: string };
    idGenerator: SequentialIDGenerator;
    key: string;
    onNewValue: (cache: Cache<T>, id: string, value: any) => any;
    constructor(
        idGenerator: SequentialIDGenerator,
        onNewValue: (cache: Cache<T>, id: string, value: any) => any,
    );
    addValue(key: string, value: T): number;
}
export class MultiCache<T> {
    caches: { [key: string]: Cache<T> };
    idGenerator: SequentialIDGenerator;
    onNewCache: (key: string, cache: Cache<T>, insertAtIndex: number) => any;
    onNewValue: (cache: Cache<T>, id: string, value: T) => any;
    sortedCacheKeys: string[];
    constructor(
        idGenerator: SequentialIDGenerator,
        onNewCache: () => any,
        onNewValue: () => any,
    );
    getCache(key: string): Cache<T>;
    getSortedCacheKeys(): string[];
}

export type hydrateType = HTMLCollectionOf<HTMLStyleElement> | HTMLStyleElement[] | NodeListOf<HTMLStyleElement>;
export interface Sheet {
    css: string;
    attrs: { [key: string]: string };
}

export interface ClientOptions {
    hydrate?: hydrateType | undefined;
    container?: Element | undefined;
    prefix?: string | undefined;
}

export interface ServerOptions {
    prefix?: string | undefined;
}

export class Client implements StandardEngine {
    constructor(opts?: ClientOptions);
    styleElements: { [key: string]: HTMLStyleElement };
    fontFaceSheet: HTMLStyleElement;
    keyframesSheet: HTMLStyleElement;
    styleCache: MultiCache<{ pseudo: string; block: string }>;
    keyframesCache: Cache<KeyframesObject>;
    fontFaceCache: Cache<FontFaceObject>;
    renderStyle(style: StyleObject): string;
    renderKeyframes(keyframes: KeyframesObject): string;
    renderFontFace(fontFace: FontFaceObject): string;
}
export class Server implements StandardEngine {
    constructor(opts?: ServerOptions);
    styleRules: { [key: string]: string };
    keyframesRules: string;
    fontFaceRules: string;
    getStylesheets(): Sheet[];
    getStylesheetsHtml(className?: string): string;
    getCss(): string;
    renderStyle(style: StyleObject): string;
    renderKeyframes(keyframes: KeyframesObject): string;
    renderFontFace(fontFace: FontFaceObject): string;
}
