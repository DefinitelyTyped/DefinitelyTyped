// Type definitions for metaget 1.0
// Project: https://github.com/mrvautin/metaget#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    headers?: Record<string, any>;
    timeout?: number;
}

export type Result = Record<string, string>;

export type Callback<T> = (error: Error | null, data: Result) => T;

export function fetch<T>(uri: string, userArgs: Options, callback: Callback<T>): Promise<T>;
export function fetch<T>(uri: string, callback: Callback<T>): Promise<T>;
export function fetch(uri: string, userArgs?: Options): Promise<Result>;
