interface Lock {
    (fn: Release): number;
    locked: boolean;
}

type Release = (
    cb: (err?: any, value?: any) => any,
    err: any,
    value: any,
) => void;

declare function mutexify(): Lock;

export = mutexify;
export as namespace mutexify;
