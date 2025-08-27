type Proxymise<T> =
    & {
        [key in keyof T]: T[key] extends (...args: infer Params) => Promise<infer Return>
            ? (...args: Params) => Proxymise<Return>
            : T[key];
    }
    & Promise<T>;

declare function proxymise<T>(target: T): Proxymise<T>;

export = proxymise;
