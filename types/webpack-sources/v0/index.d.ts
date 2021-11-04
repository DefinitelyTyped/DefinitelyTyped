// Type definitions for webpack-sources 0.1
// Project: https://github.com/webpack/webpack-sources
// Definitions by: e-cloud <https://github.com/e-cloud>
//                 Chris Eppstein <https://github.com/chriseppstein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Hash } from 'crypto';
import { SourceNode, RawSourceMap, SourceMapGenerator } from 'source-map';
import { SourceListMap } from 'source-list-map';

export abstract class Source {
    size(): number;

    map(options?: any): any;

    sourceAndMap(options?: any): {
        source: string;
        map: RawSourceMap;
    };

    updateHash(hash: Hash): void;

    source(options?: any): string;

    node(options?: any): any;

    listNode(options?: any): any;

    listMap(options?: any): any;
}

export interface SourceAndMapMixin {
    map(options: { columns?: boolean | undefined }): RawSourceMap;
    sourceAndMap(options: { columns?: boolean | undefined }): {
        source: string;
        map: RawSourceMap;
    };
}

export class CachedSource extends Source {
    _source: Source;
    _cachedSource: string;
    _cachedSize: number;
    _cachedMaps: {
        [prop: string]: RawSourceMap
    };

    constructor(source: Source);

    source(): string;

    size(): number;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    sourceAndMap(options: any): {
        source: string;
        map: RawSourceMap;
    };

    map(options: any): RawSourceMap;

    updateHash(hash: Hash): void;
}

export class ConcatSource extends Source implements SourceAndMapMixin {
    children: Array<(string | Source)>;

    constructor(...args: Array<(string | Source)>);

    add(item: string | Source): void;

    source(): string;

    size(): number;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: Hash): void;
}

export class LineToLineMappedSource extends Source implements SourceAndMapMixin {
    _value: string;
    _name: string;
    _originalSource: string;

    constructor(value: string, name: string, originalSource: string);

    source(): string;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: Hash): void;
}

export class OriginalSource extends Source implements SourceAndMapMixin {
    _value: string;
    _name: string;

    constructor(value: string, name: string);

    source(): string;

    node(
        options?: {
            columns?: boolean | undefined;
        }
    ): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: Hash): void;
}

export class PrefixSource extends Source implements SourceAndMapMixin {
    _source: Source | string;
    _prefix: Source | string;

    constructor(prefix: Source | string, source: Source | string);

    source(): string;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: Hash): void;
}

export class RawSource extends Source {
    _value: string;

    constructor(value: string);

    source(): string;

    map(options: any): null;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: Hash): void;
}

export class ReplaceSource extends Source implements SourceAndMapMixin {
    _source: Source;
    _name: string;
    replacements: any[][];

    constructor(source: Source, name?: string);

    replace(start: number, end: number, newValue: string): void;

    insert(pos: number, newValue: string): void;

    source(): string;

    _sortReplacements(): void;

    _replaceString(str: string): string;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    _replacementToSourceNode(oldNode: SourceNode, newString: string): string | SourceNode;

    _splitSourceNode(node: SourceNode, position: SourceNode[]): SourceNode[];
    _splitSourceNode(node: string, position: number): number;

    _splitString(str: string, position: number): string[];
}

export class SourceMapSource extends Source implements SourceAndMapMixin {
    _value: string;
    _name: string;
    _sourceMap: SourceMapGenerator | RawSourceMap;
    _originalSource: string;
    _innerSourceMap: RawSourceMap;

    constructor(
        value: string,
        name: string,
        sourceMap: SourceMapGenerator | RawSourceMap,
        originalSource?: string,
        innerSourceMap?: RawSourceMap,
        removeOriginalSource?: boolean,
    );

    source(): string;

    node(): SourceNode;

    listMap(
        options: {
            module?: boolean | undefined;
        }
    ): SourceListMap;

    updateHash(hash: Hash): void;
}
