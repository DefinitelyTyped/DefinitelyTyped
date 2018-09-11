// Type definitions for source-map-support 0.4
// Project: https://github.com/evanw/source-map-support
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Jason Cheatham <https://github.com/jason0x43>
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
    hookRequire?: boolean;
    emptyCacheBetweenOperations?: boolean;
    environment?: 'auto' | 'browser' | 'node';
    overrideRetrieveFile?: boolean;
    overrideRetrieveSourceMap?: boolean;
    retrieveFile?(path: string): string;
    retrieveSourceMap?(source: string): UrlAndMap | null;
}

export interface Position {
    source: string;
    line: number;
    column: number;
}

export function wrapCallSite(frame: any /* StackFrame */): any /* StackFrame */;
export function getErrorSource(error: Error): string | null;
export function mapSourcePosition(position: Position): Position;
export function retrieveSourceMap(source: string): UrlAndMap | null;

/**
 * Install SourceMap support.
 * @param options Can be used to e.g. disable uncaughtException handler.
 */
export function install(options?: Options): void;
