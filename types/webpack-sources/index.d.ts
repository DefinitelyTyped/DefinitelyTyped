// Type definitions for webpack-sources 1.4
// Project: https://github.com/webpack/webpack-sources
// Definitions by: e-cloud <https://github.com/e-cloud>
//                 Chris Eppstein <https://github.com/chriseppstein>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Hash } from 'crypto';
import { SourceNode, RawSourceMap, SourceMapGenerator } from 'source-map';
import { SourceListMap } from 'source-list-map';

export interface MapOptions {
    /**
     * If set to false the implementation may omit mappings for columns
     * @default true
     */
    columns?: boolean;
    /**
     * If set to false the implementation may omit inner mappings for modules.
     * @default true
     */
    module?: boolean;
}

export interface SourceAndMapResult {
    source: string;
    map: RawSourceMap | null;
}

/**
 * Base class for all sources.
 * A Source can be asked for source code, size, source map and hash.
 */
export abstract class Source {
    /**
     * Returns the represented source code as string.
     */
    source(): string | ArrayBuffer;

    /**
     * Returns the size in chars of the represented source code.
     */
    size(): number;

    /**
     * Returns the SourceMap of the represented source code as JSON.
     * May return `null` if no SourceMap is available.
     */
    map(options?: MapOptions): RawSourceMap | null;

    /**
     * Returns both, source code (like `Source.prototype.source()` and SourceMap (like `Source.prototype.map()`).
     * This method could have better performance than calling `source()` and `map()` separately.
     */
    sourceAndMap(options?: MapOptions): SourceAndMapResult;

    /**
     * This is an optional method. It may be null if not implemented.
     * Returns a SourceNode (see source-map library) for the represented source code.
     */
    node(options: MapOptions): SourceNode;

    /**
     * This is an optional method. It may be null if not implemented.
     * Returns a SourceListMap (see source-list-map library) for the represented source code.
     */
    listNode(options: MapOptions): SourceListMap;
    /**
     * Updates the provided Hash object with the content of the represented source code.
     * (Hash is an object with an update method, which is called with string values)
     */
    updateHash(hash: Hash): void;
}

export interface SourceAndMapMixin {
    /**
     * Returns the SourceMap of the represented source code as JSON.
     * May return `null` if no SourceMap is available.
     */
    map(options?: MapOptions): RawSourceMap | null;
    /**
     * Returns both, source code (like `Source.prototype.source()` and SourceMap (like `Source.prototype.map()`).
     * This method could have better performance than calling `source()` and `map()` separately.
     */
    sourceAndMap(options?: MapOptions): SourceAndMapResult;
}

/**
 * Decorates a Source and caches returned results of map, source, size and sourceAndMap in memory.
 * Every other operation is delegated to the wrapped Source.
 */
export class CachedSource extends Source {
    constructor(source: Source);

    map(options?: MapOptions): RawSourceMap;
}

/**
 * Concatenate multiple Sources or strings to a single source.
 */
export class ConcatSource extends Source implements SourceAndMapMixin {
    children: Array<string | Source>;

    constructor(...args: Array<string | Source>);

    /**
     * Adds an item to the source.
     */
    add(item: string | Source): void;
    source(): string;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}

export class LineToLineMappedSource extends Source implements SourceAndMapMixin {
    constructor(sourceCode: string, name: string, originalSource: string);

    source(): string;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}

/**
 * Represents source code, which is a copy of the original file
 */
export class OriginalSource extends Source implements SourceAndMapMixin {
    /**
     * OriginalSource tries to create column mappings if requested, by splitting the source code at typical statement borders (;, {, }).
     */
    constructor(sourceCode: string, name: string);
    source(): string;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}

/**
 * Prefix every line of the decorated Source with a provided string.
 */
export class PrefixSource extends Source implements SourceAndMapMixin {
    constructor(prefix: Source | string, source: Source | string);
    source(): string;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}

/**
 * Represents source code without SourceMap
 */
export class RawSource extends Source {
    constructor(value: string);
    source(): string;
    map(options: MapOptions): null;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}

export interface Replacement {
    readonly start: number;
    readonly end: number;
    readonly content: string;
    readonly insertIndex: number;
    readonly name: string;
}

/**
 * Decorates a Source with replacements and insertions of source code.
 *
 */
export class ReplaceSource extends Source implements SourceAndMapMixin {
    replacements: Replacement[];
    /**
     * The ReplaceSource supports "identity" mappings for child source.
     * When original source matches generated source for a mapping it's assumed to be mapped char by char allowing to split mappings at replacements/insertions.
     */
    constructor(source: Source, name?: string);
    /**
     * Replaces chars from start (0-indexed, inclusive) to end (0-indexed, inclusive) with replacement.
     */
    replace(start: number, end: number, newValue: string, name?: string): void;
    /**
     * Inserts the insertion before char pos (0-indexed).
     */
    insert(pos: number, newValue: string, name?: string): void;
    /**
     * Get decorated Source.
     */
    original(): Source;
    source(): string;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}

/**
 * Represents source code with SourceMap, optionally having an additional SourceMap for the original source.
 */
export class SourceMapSource extends Source implements SourceAndMapMixin {
    constructor(
        sourceCode: string,
        name: string,
        sourceMap: SourceMapGenerator | RawSourceMap,
        originalSource?: string,
        innerSourceMap?: RawSourceMap | string,
        removeOriginalSource?: boolean,
    );
    source(): string;
    node(options: MapOptions): SourceNode;
    listMap(options: MapOptions): SourceListMap;
}
