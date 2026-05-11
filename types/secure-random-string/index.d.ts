declare function srs(options?: srs.Options): string;
declare function srs(cb: srs.Callback): void;
declare function srs(options: srs.Options, cb: srs.Callback): void;

declare namespace srs {
    interface Options {
        length?: number | undefined;
        alphanumeric?: boolean | undefined;
    }

    type Callback = (error: Error | null, result?: string) => void;
}

export = srs;
