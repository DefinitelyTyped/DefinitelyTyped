// eslint-disable-next-line @typescript-eslint/ban-types
type AnyFunction = Function;

declare function loadware<F extends AnyFunction>(...loadable: Array<loadware.Loadable<F>>): readonly F[];

declare namespace loadware {
    type Loadable<F extends AnyFunction> = string | F | RecursiveLoadable<F>;
    interface RecursiveLoadable<F extends AnyFunction> extends Array<F | Loadable<F>> {}
}

export = loadware;
