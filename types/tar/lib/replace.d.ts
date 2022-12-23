import u = require('./update');

type Files = string[] | string;

type Callback = (...args: unknown[]) => void;

type ReturnType<O> = O extends u.SyncOptions ? undefined : Promise<unknown>;

interface Replace {
    <O extends u.Options>(opt_: O, files: Files, cb?: Callback): ReturnType<O>;
}

declare const replace: Replace;

export = replace;
