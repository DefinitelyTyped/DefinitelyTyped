// Type definitions for @parcel/package-manager 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

type MappingPosition = {
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
    sourcesContent: ReadonlyArray<string | null>;
    names: ReadonlyArray<string>,
    mappings: string,
    version?: number,
    file?: string,
    sourceRoot?: string
}>;

/**
 * A parsed source map
 */
export type ParsedMap = {
    sources: string[],
    names: string[],
    mappings: IndexedMapping<number>[],
    sourcesContent: (string | null)[]
};

/**
 * Options for stringifying a source map
 */
export type SourceMapStringifyOptions = {
    file?: string,
    sourceRoot?: string,
    rootDir?: string,
    inlineSources?: boolean,
    fs?: {
      readFile(path: string, encoding: string): Promise<string>,
    },
    format?: 'inline' | 'string' | 'object'
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
        mappings: IndexedMapping<string>[],
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