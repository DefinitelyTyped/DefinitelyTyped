// Type definitions for source-map-support 0.5
// Project: https://github.com/evanw/node-source-map-support
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Jason Cheatham <https://github.com/jason0x43>
//                 Alcedo Nathaniel De Guzman Jr <https://github.com/natealcedo>
//                 Griffin Yourick <https://github.com/tough-griff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RawSourceMap } from 'source-map';

/**
 * Output of retrieveSourceMap().
 * From source-map-support:
 *   The map field may be either a string or the parsed JSON object (i.e.,
 *   it must be a valid argument to the SourceMapConsumer constructor).
 */
export interface UrlAndMap {
    url: string;
    map: string | RawSourceMap;
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
export function resetRetrieveHandlers(): void;

/**
 * Install SourceMap support.
 * @param options Can be used to e.g. disable uncaughtException handler.
 */
export function install(options?: Options): void;
