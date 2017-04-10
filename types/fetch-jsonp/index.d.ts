// Type definitions for fetch-jsonp 1.0
// Project: https://github.com/camsong/fetch-jsonp
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace fetchJsonp {
  interface Options {
    timeout?: number;
    jsonpCallback?: string;
  }
}

declare function fetchJsonp(url: RequestInfo, options?: fetchJsonp.Options): Promise<Response>;

export = fetchJsonp;
