// Type definitions for source-map-support 0.2.10
// Project: https://github.com/evanw/source-map-support
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


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

declare export function wrapCallSite(frame: any /* StackFrame */): any /* StackFrame */;
declare export function getErrorSource(error: Error): string;
declare export function mapSourcePosition(position: Position): Position;
declare export function retrieveSourceMap(source: string): UrlAndMap;

/**
 * Install SourceMap support.
 * @param options Can be used to e.g. disable uncaughtException handler.
 */
declare export function install(options?: Options): void;
