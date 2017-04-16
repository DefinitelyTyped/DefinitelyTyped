// Type definitions for json-path-processor
// Project: https://github.com/zordius/json-path-processor
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "json-path-processor" {

  module jpp {
    export interface JsonPathProcessor {
      value(path?: string): any;
      get(path: string): JsonPathProcessor;
      set(path: string, value: any, create?: boolean): JsonPathProcessor;
      copy(from: string, to: string, skip?: boolean): JsonPathProcessor;
      del(path: string): JsonPathProcessor;
      move(from: string, to: string): JsonPathProcessor;
      range(path: string, stop: number): JsonPathProcessor;
      range(path: string, start: number, stop: number, step?: number): JsonPathProcessor;
      find(path: string, callback: (value: any) => boolean): any;
      findLast(path: string, callback: (value: any) => boolean): any;
      each(path: string, callback: (value: any, index: number) => any, elseCallback?: (obj: any) => any): JsonPathProcessor;
      forIn(path: string, callback: (value: any, key: string) => any, elseCallback?: (obj: any) => any): JsonPathProcessor;
      filter(path: string, callback: (value: any, key: string|number) => boolean, elseCallback?: (obj: any) => any): JsonPathProcessor;
      concat(path: string, ...arrayPath: string[]): JsonPathProcessor;
    }
  }

  function jpp(data: any): jpp.JsonPathProcessor;
  function jpp(data: any, path: string): any;

  export = jpp;
}

