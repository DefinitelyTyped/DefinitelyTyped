export = whoami;

declare function whoami(callback: whoami.WhoamiCallback, opts?: whoami.WhoamiOptions): void;

declare namespace whoami {
    interface WhoamiCallback {
        (err: Error, username: undefined): void;
        (err: null, username: string): void;
    }

    type WhoamiOptions = number | string | BothOptions;

    interface BothOptions {
        registry?: string;
        timeout?: number;
    }

    function sync(opts: WhoamiOptions): string | undefined;
}
