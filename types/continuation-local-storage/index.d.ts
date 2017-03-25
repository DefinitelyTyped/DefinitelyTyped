// Type definitions for continuation-local-storage v3.2.0
// Project: https://github.com/othiym23/node-continuation-local-storage
// Definitions by: Jang-Ho Hwang <https://github.com/rath>, Kei Son <https://github.com/heycalmdown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type Context = any;

export interface Namespace {
  active(): Context;
  set<T>(key: string, value: T): T;
  get(key: string): any;
  run(callback: any): void;
  runAndReturn(callback: any): any;
  bind(callback: any, context?: Context): any;
  bindEmitter(emitter: NodeJS.EventEmitter): any;
  createContext(): Context;
  name: string;
  context: Context;
}
export function createNamespace(name: string): Namespace;
export function getNamespace(name: string): Namespace;
export function destroyNamespace(name: string): void;
export function reset(): void;

// declare namespace process {
//   var namespaces: ContinuationLocalStorage.Namespace[];
// }
