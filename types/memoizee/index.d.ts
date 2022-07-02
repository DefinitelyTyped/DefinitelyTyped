// Type definitions for memoizee 0.4
// Project: https://github.com/medikoo/memoizee
// Definitions by: Juan Picado <https://github.com/juanpicado>
//                 Patrick Muff <https://github.com/dislick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

declare namespace memoizee {
  interface Options<F extends (...args: any[]) => any> {
    length?: number | false | undefined;
    maxAge?: number | undefined;
    max?: number | undefined;
    preFetch?: number | true | undefined;
    promise?: boolean | "then" | "done" | "done:finally" | undefined;
    dispose?(value: any): void;
    async?: boolean | undefined;
    primitive?: boolean | undefined;
    normalizer?(args: Parameters<F>): string;
    resolvers?: Array<(arg: any) => any> | undefined;
    profileName?: string;
  }

  interface Memoized<F> {
    delete: F;
    clear: F & (() => void);
  }
}

declare function memoizee<F extends (...args: any[]) => any>(f: F, options?: memoizee.Options<F>): F & memoizee.Memoized<F>;

export = memoizee;
