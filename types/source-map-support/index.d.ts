// Type definitions for source-map-support 0.2.10
// Project: https://github.com/evanw/source-map-support
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


/**
 * Output of retrieveSourceMap().
 */
export interface UrlAndMap {
    url: string;
    map: string | Buffer;
}

/**
 * Options to install().
 */
export interface Options {
    handleUncaughtExceptions?: boolean;
    emptyCacheBetweenOperations?: boolean;
    retrieveFile?: (path: string) => string;
    retrieveSourceMap?: (source: string) => UrlAndMap;
}

export interface Position {
    source: string;
    line: number;
    column: number;
}

export declare function wrapCallSite(frame: any /* StackFrame */): any /* StackFrame */;
export declare function getErrorSource(error: Error): string;
export declare function mapSourcePosition(position: Position): Position;
export declare function retrieveSourceMap(source: string): UrlAndMap;

/**
 * Install SourceMap support.
 * @param options Can be used to e.g. disable uncaughtException handler.
 */
export declare function install(options?: Options): void;
