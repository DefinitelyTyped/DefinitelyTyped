export interface Options {
    headers?: Record<string, any> | undefined;
    timeout?: number | undefined;
}

export type Result = Record<string, string>;

export type Callback<T> = (error: Error | null, data: Result) => T;

export function fetch<T>(uri: string, userArgs: Options, callback: Callback<T>): Promise<T>;
export function fetch<T>(uri: string, callback: Callback<T>): Promise<T>;
export function fetch(uri: string, userArgs?: Options): Promise<Result>;
