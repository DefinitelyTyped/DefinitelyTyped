// Type definitions for npm-whoami 1.1
// Project: https://github.com/jamestalmage/npm-whoami#readme
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
