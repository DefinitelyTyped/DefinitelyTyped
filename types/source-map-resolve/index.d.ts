export interface SourceMapData {
    sourceMappingURL: string;
    url: string;
    sourcesRelativeTo: string;
    map: RawSourceMap;
}

export interface ResolvedSources {
    sourcesResolved: string[];
    sourcesContent: Array<string | null>;
}

export interface FullResolvedData extends SourceMapData, ResolvedSources {}

export interface RawSourceMap {
    version: number;
    sources: string[];
    names: string[];
    sourceRoot?: string | undefined;
    sourcesContent?: string[] | undefined;
    mappings: string;
    file?: string | undefined;
}

export interface ResolveOptions {
    sourceRoot?: boolean | undefined;
}

export type ReadCallback = (error: Error | null, data: string | null) => void;
export type ReadFn = (url: string, callback: ReadCallback) => void;
export type ReadSyncFn = (url: string) => string;

export function resolveSourceMap(
    code: string,
    codeUrl: string,
    read: ReadFn,
    callback: (error: Error | null, data: SourceMapData | null) => void,
): void;

export function resolveSourceMapSync(
    code: string,
    codeUrl: string,
    read: ReadSyncFn,
): SourceMapData | null;

export function resolveSources(
    map: RawSourceMap,
    mapUrl: string,
    read: ReadFn,
    options: ResolveOptions,
    callback: (error: Error | null, data: ResolvedSources) => void,
): void;
export function resolveSources(
    map: RawSourceMap,
    mapUrl: string,
    read: ReadFn,
    callback: (error: Error | null, data: ResolvedSources) => void,
): void;

export function resolveSourcesSync(
    map: RawSourceMap,
    mapUrl: string,
    read: ReadSyncFn,
    options?: ResolveOptions,
): ResolvedSources;

export function resolve(
    code: string | null,
    codeUrl: string,
    read: ReadFn,
    options: ResolveOptions,
    callback: (error: Error | null, data: FullResolvedData | null) => void,
): void;
export function resolve(
    code: string | null,
    codeUrl: string,
    read: ReadFn,
    callback: (error: Error | null, data: FullResolvedData | null) => void,
): void;

export function resolveSync(
    code: string | null,
    codeUrl: string,
    read: ReadSyncFn,
    options?: ResolveOptions,
): FullResolvedData | null;

export function parseMapToJSON(
    string: string,
    data?: object,
): RawSourceMap;
