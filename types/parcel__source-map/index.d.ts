// Type definitions for @parcel/package-manager 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
/// <reference types="node" />

// All type literals are intentional to encourage exact types
// tslint:disable:interface-over-type-literal

/**
 * A position for a source mapping. 1-indexed.
 */
export type MappingPosition = {
    line: number;
    column: number;
};

/**
 * An indexed source mapping block
 */
export type IndexedMapping<T> = {
    generated: MappingPosition;
    original?: MappingPosition;
    source?: T;
    name?: T;
};

/**
 * A source map in VLQ format
 */
export type VLQMap = Readonly<{
    sources: ReadonlyArray<string>;
    sourcesContent?: ReadonlyArray<string | null>;
    names: ReadonlyArray<string>;
    mappings: string;
    version?: number;
    file?: string;
    sourceRoot?: string;
}>;

/**
 * A parsed source map
 */
export type ParsedMap = {
    sources: string[];
    names: string[];
    mappings: Array<IndexedMapping<number>>;
    sourcesContent: Array<string | null>;
};

/**
 * Options for stringifying a source map
 */
export type SourceMapStringifyOptions = {
    file?: string;
    sourceRoot?: string;
    rootDir?: string;
    inlineSources?: boolean;
    fs?: {
      readFile(path: string, encoding: string): Promise<string>
    };
    format?: 'inline' | 'string' | 'object';
};

/**
 * A source map to assist in debugging during development
 */
export default class SourceMap {
    static generateEmptyMap(
        sourceName: string,
        sourceContent: string,
        lineOffset: number
    ): SourceMap;
    addEmptyMap(
        sourceName: string,
        sourceContent: string,
        lineOffest: number
    ): SourceMap;
    addRawMappings(
        map: VLQMap,
        lineOffset: number,
        columnOffset: number
    ): SourceMap;
    addBufferMappings(
        buffer: Buffer,
        lineOffset: number,
        columnOffset: number
    ): SourceMap;
    addIndexedMapping(
        mapping: IndexedMapping<string>,
        lineOffset?: number,
        columnOffset?: number
    ): void;
    addIndexedMappings(
        mappings: Array<IndexedMapping<string>>,
        lineOffset?: number,
        columNOffset?: number
    ): void;
    addName(name: string): number;
    addNames(names: string[]): number[];
    addSource(source: string): number;
    addSources(sources: string[]): number[];
    getSourceIndex(source: string): number;
    getSource(index: number): string;
    setSourceContent(sourceName: string, sourceContent: string): void;
    getSourceContent(sourceName: string): string;
    getNameIndex(name: string): number;
    getName(index: number): string;
    extends(buffer: Buffer): SourceMap;
    getMap(): ParsedMap;
    findClosestMapping(
        line: number,
        column: number
    ): IndexedMapping<string> | null;
    toBuffer(): Buffer;
    toVLQ(): VLQMap;
    delete(): void;
    stringify(options: SourceMapStringifyOptions): Promise<string | VLQMap>;
}
