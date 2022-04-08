// Type definitions for loadware 2.0
// Project: https://github.com/franciscop/loadware
// Definitions by: A.J.J. Lyman <https://github.com/ALyman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:ban-types
type AnyFunction = Function;

declare function loadware<F extends AnyFunction>(...loadable: Array<loadware.Loadable<F>>): ReadonlyArray<F>;

declare namespace loadware {
    type Loadable<F extends AnyFunction> = string | F | RecursiveLoadable<F>;
    interface RecursiveLoadable<F extends AnyFunction> extends Array<F | Loadable<F>> { }
}

export = loadware;
