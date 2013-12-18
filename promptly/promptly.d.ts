// Type definitions for node-promptly 1.1.1
// Project: https://github.com/IndigoUnited/node-promptly
// Definitions by: Dan Spencer <https://github.com/danrspencer>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../node/node.d.ts"/>

declare module "promptly" {

  interface Callback {
    (err: Error, value: string): void;
  }

  export interface Options {
    default?: string;
    trim?: boolean;
    validator?: any;
    retry?: boolean;
    silent?: boolean;
    input?: ReadableStream;
    output?: WritableStream;
  }

  export function prompt(message: string, fn?: Callback):any;
  export function prompt(message: string, opts: Options, fn?: Callback):any;

  export function password(message: string, fn?: Callback):any;
  export function password(message: string, opts: Options, fn?: Callback):any;

  export function confirm(message: string, fn?: Callback):any;
  export function confirm(message: string, opts: Options, fn?: Callback):any;

  export function choose(message: string, choices: string[], fn?: Callback):any;
  export function choose(message: string, choices: string[], opts: Options, fn?: Callback):any;

}
