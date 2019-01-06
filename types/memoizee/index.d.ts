// Type definitions for memoizee 0.4
// Project: https://github.com/medikoo/memoizee
// Definitions by: Juan Picado <https://github.com/juanpicado>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace memoizee {
  interface Options {
    length?: number | false;
    maxAge?: number;
    max?: number;
    preFetch?: number | true;
    promise?: boolean;
    dispose?(value: any): void;
    async?: boolean;
    primitive?: boolean;
    normalizer?(value: any): void;
    resolvers?: Array<(arg: any) => any>;
  }

  interface Memoized<F> {
    delete: F;
    clear: F & (() => void);
  }
}

// tslint:disable-next-line ban-types
declare function memoizee<F extends Function>(f: F, options?: memoizee.Options): F & memoizee.Memoized<F>;

export = memoizee;
