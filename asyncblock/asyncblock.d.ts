// Type definitions for asyncblock 2.1.23
// Project: https://github.com/scriby/asyncblock
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "asyncblock" {
  function asyncblock<T>(f: (flow: asyncblock.IFlow) => void, callback?: (err: any, res: T) => void): void;

  module asyncblock {
    export function nostack<T>(f: (flow: asyncblock.IFlow) => void, callback?: (err: any, res: T) => void): void;

    export interface IFlow {
      add(responseFormat?: string[]): any;
      add(key: string, responseFormat?: string[]): any;
      add(key: number, responseFormat?: string[]): any;
      add(options: IFlowOptions): any;
      callback(responseFormat?: string[]): any;
      callback(key: string, responseFormat?: string[]): any;
      callback(key: number, responseFormat?: string[]): any;
      callback(options: IFlowOptions): any;
      sync<T>(f: void): T;
      wait<T>(key?: string): T;
      wait<T>(key?: number): T;

      get<T>(key: string): T;
      set(key: string, responseFormat?: string[]): any;
      set(options: IFlowOptions): any;
      del(key: string): void;

      maxParallel: number;
      errorCallback: (err: any) => void;
      taskTimeout: number;
      timeoutIsError: boolean;
    }

    export interface IFlowOptions {
      ignoreError?: boolean;  // default false
      key?: string;  // string | number
      responseFormat?: string[];
      timeout?: number;
      timeoutIsError?: boolean;
      dontWait?: boolean;
      firstArgIsError?: boolean;  // default false
    }

  }

  export = asyncblock;
}

