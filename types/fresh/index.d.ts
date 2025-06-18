export = fresh;

declare function fresh(reqHeaders: fresh.Headers, resHeaders: fresh.Headers): boolean;

declare namespace fresh {
    interface Headers {
        [header: string]: string | string[] | number | undefined;
    }
}
