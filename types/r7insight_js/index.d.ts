// Type definitions for r7insight_js 1.1
// Project: https://github.com/rapid7/r7insight_js
// Definitions by: Nick Malyarsky <https://github.com/nmalyarsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    token: string;
    region: 'eu' | 'us';
    ssl?: boolean;
    catchall?: boolean;
    trace?: boolean;
    no_format?: boolean;
    page_info?: 'never' | 'per-page' | 'per-entry';
    print?: boolean;
}

export function init(options: Options): void;

export function log(message: string): void;
export function log(...args: any[]): void;

export function warn(message: string): void;
export function warn(...args: any[]): void;

export function error(message: string): void;
export function error(...args: any[]): void;

export function info(message: string): void;
export function info(...args: any[]): void;

export as namespace R7Insight;
