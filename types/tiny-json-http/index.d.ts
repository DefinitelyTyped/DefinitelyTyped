// Type definitions for tiny-json-http 7.3
// Project: https://github.com/brianleroux/tiny-json-http
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
  url: string;
  data?: any;
  headers?: any;
  /**
   * Set to true the response body is returned as a buffer
   */
  buffer?: boolean;
  timeout?: number;
}

export interface Result {
  body: any;
  headers: any;
}
export type Callback = (err: Error | null, res?: Result) => void;

export function get(options: Options): Promise<Result>;
export function get(options: Options, callback: Callback): void;

export function head(options: Options): Promise<Result>;
export function head(options: Options, callback: Callback): void;

export function options(options: Options): Promise<Result>;
export function options(options: Options, callback: Callback): void;

export function post(options: Options): Promise<Result>;
export function post(options: Options, callback: Callback): void;

export function put(options: Options): Promise<Result>;
export function put(options: Options, callback: Callback): void;

export function patch(options: Options): Promise<Result>;
export function patch(options: Options, callback: Callback): void;

export function del(options: Options): Promise<Result>;
export function del(options: Options, callback: Callback): void;

// delete is a function option, but typescript has reserved that word
// export function delete(options: Options): Promise<Result>;
// export function delete(options: Options, callback: Callback): void;
