// Type definitions for memoizee 0.4
// Project: https://github.com/medikoo/memoizee
// Definitions by: Juan Picado <https://github.com/juanpicado>
//                 Patrick Muff <https://github.com/dislick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

declare namespace memoizee {
  interface Options<F extends (...args: any[]) => any> {
    length?: number | false;
    maxAge?: number;
    max?: number;
    preFetch?: number | true;
    promise?: boolean;
    dispose?(value: any): void;
    async?: boolean;
    primitive?: boolean;
    normalizer?(args: Parameters<F>): string;
    resolvers?: Array<(arg: any) => any>;
  }

  interface Memoized<F> {
    delete: F;
    clear: F & (() => void);
  }
}

declare function memoizee<F extends (...args: any[]) => any>(f: F, options?: memoizee.Options<F>): F & memoizee.Memoized<F>;

export = memoizee;
