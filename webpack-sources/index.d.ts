// Type definitions for webpack-sources v0.1.2
// Project: https://github.com/webpack/webpack-sources
// Definitions by: e-cloud <http://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="source-map" />
/// <reference types="source-list-map" />

import { SourceNode } from 'source-map'
import { SourceListMap } from 'source-list-map'

export abstract class Source {
    size(): number;

    map(options?: any): any;

    sourceAndMap(options?: any): {
        source: string;
        map: string;
    };

    updateHash(hash: any): void;

    source(options?: any): string;

    node(options?: any): any;

    listNode(options?: any): any;

    listMap(options?: any): any;
}

interface SourceAndMapMixin {
    map(options: { columns?: boolean }): string
    sourceAndMap(options: { columns?: boolean }): {
        source: string,
        map: string
    }
}

export class CachedSource {
    _source: Source;
    _cachedSource: string;
    _cachedSize: number;
    _cachedMaps: any;
    node: (options: any) => any;
    listMap: (options: any) => any;

    constructor(source: Source);

    source(): string;

    size(): number;

    sourceAndMap(options: any): {
        source: string;
        map: any;
    };

    map(options: any): any;

    updateHash(hash: any): void;
}

export class ConcatSource extends Source implements SourceAndMapMixin {
    children: (string | Source)[];

    constructor(...args: (string | Source)[]);

    add(item: string | Source): void;

    source(): string;

    size(): number;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: any): void;
}

export class LineToLineMappedSource extends Source implements SourceAndMapMixin {
    _value: string;
    _name: string;
    _originalSource: string;

    constructor(value: string, name: string, originalSource: string);

    source(): string;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: any): void;
}

export class OriginalSource extends Source implements SourceAndMapMixin {
    _value: string;
    _name: string;

    constructor(value: string, name: string);

    source(): string;

    node(
        options?: {
            columns?: boolean;
        }
    ): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: any): void;
}

export class PrefixSource extends Source implements SourceAndMapMixin {
    _source: Source | string;
    _prefix: Source | string;

    constructor(prefix: Source | string, source: Source | string);

    source(): string;

    node(options: any): SourceNode;

    listMap(options: any): any;

    updateHash(hash: any): void;
}

export class RawSource extends Source {
    _value: string;

    constructor(value: string);

    source(): string;

    map(options: any): any;

    node(options: any): SourceNode;

    listMap(options: any): SourceListMap;

    updateHash(hash: any): void;
}

export class ReplaceSource extends Source implements SourceAndMapMixin {
    _source: Source;
    _name: string;
    replacements: any[][];

    constructor(source: Source, name: string);

    replace(start: number, end: number, newValue: string): void;

    insert(pos: number, newValue: string): void;

    source(): string;

    _sortReplacements(): void;

    _replaceString(str: string): string;

    node(options: any): SourceNode;

    listMap(options: any): any;

    _replacementToSourceNode(oldNode: SourceNode, newString: string): string | SourceNode;

    _splitSourceNode(node: SourceNode, position: SourceNode[]): SourceNode[];
    _splitSourceNode(node: string, position: number): number;

    _splitString(str: string, position: number): string[];
}

export class SourceMapSource extends Source implements SourceAndMapMixin {
    _value: string;
    _name: string;
    _sourceMap: any;
    _originalSource: Source;
    _innerSourceMap: any;

    constructor(value: string, name: string, sourceMap: any, originalSource: Source, innerSourceMap?: any);

    source(): string;

    node(): SourceNode;

    listMap(
        options: {
            module?: boolean;
        }
    ): SourceListMap;

    updateHash(hash: any): void;
}
