// Type definitions for tiny-json-http 7.3
// Project: https://github.com/brianleroux/tiny-json-http
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TinyJsonHttp {
  interface Options {
    url: string;
    data?: any;
    headers?: any;
    /**
     * Set to true the response body is returned as a buffer
     */
    buffer?: boolean;
    timeout?: number;
  }

  interface Result {
    body: any;
    headers: any;
  }
  type Callback = (err: Error | null, res?: Result) => void;

  interface Api {
    get(options: Options): Promise<Result>;
    get(options: Options, callback: Callback): void;

    head(options: Options): Promise<Result>;
    head(options: Options, callback: Callback): void;

    options(options: Options): Promise<Result>;
    options(options: Options, callback: Callback): void;

    post(options: Options): Promise<Result>;
    post(options: Options, callback: Callback): void;

    put(options: Options): Promise<Result>;
    put(options: Options, callback: Callback): void;

    patch(options: Options): Promise<Result>;
    patch(options: Options, callback: Callback): void;

    del(options: Options): Promise<Result>;
    del(options: Options, callback: Callback): void;
  }
}

declare const http: TinyJsonHttp.Api;

export = http;
