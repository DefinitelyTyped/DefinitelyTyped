// Type definitions for styletron-engine-monolithic 0.0
// Project: https://github.com/styletron/styletron
// Definitions by: Tom Golden <https://github.com/tbjgolden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { KeyframesObject, FontFace as FontFaceObject, StandardEngine, StyleObject } from 'styletron-standard';

export interface SequentialIDGenerator {
    prefix: string;
    count: number;
    offset: number;
    msb: number;
    power: number;
    next(): string;
    increment(): number;
}

export interface Cache<T> {
    cache: { [key: string]: string };
    idGenerator: SequentialIDGenerator;
    key: string;
    onNewValue: (cache: Cache<T>, id: string, value: any) => any;
    addValue(key: string, value: T): number;
}
export interface MultiCache<T> {
    caches: { [key: string]: Cache<T> };
    idGenerator: SequentialIDGenerator;
    onNewCache: (key: string, cache: Cache<T>, insertAtIndex: number) => any;
    onNewValue: (cache: Cache<T>, id: string, value: T) => any;
    sortedCacheKeys: string[];
    getCache(key: string): Cache<T>;
    getSortedCacheKeys(): string[];
}

export type HydrateType = HTMLCollectionOf<HTMLStyleElement> | HTMLStyleElement[] | NodeListOf<HTMLStyleElement>;
export interface Sheet {
    css: string;
    attrs: { [key: string]: string };
}

export class Client implements StandardEngine {
    constructor();
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
    constructor();
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
