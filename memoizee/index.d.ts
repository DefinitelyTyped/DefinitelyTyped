
// Type definitions for memoizee 0.4.1
// Project: https://github.com/medikoo/memoizee
// Definitions by: Juan Picado <https://github.com/juanpicado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RevolversArray {
    [index:number]:Object
}

interface MemoizeeOptions {
  length?: number,
  maxAge?: number,
  max?: number,
  preFetch?: number,
  promise?: boolean,
  dispose?: Function,
  async?: boolean,
  primitive?: boolean,
  normalizer?:Function,
  resolvers?: RevolversArray
}

interface IMemoizee extends Function {
  delete: Function,
  clear: Function
}

declare function memoizee(f: any, options?:MemoizeeOptions): IMemoizee;

export = memoizee;
