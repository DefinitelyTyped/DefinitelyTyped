// Type definitions for npm-whoami 1.1
// Project: https://github.com/jamestalmage/npm-whoami#readme
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = whoami;

declare function whoami(callback: whoami.Callback, opts?: whoami.Options): void;

declare namespace whoami {
    interface Callback {
        (err: Error, username: undefined): void;
        (err: null, username: string): void;
    }

    type Options = number | string | BothOptions;

    interface BothOptions {
        registry?: string;
        timeout?: number;
    }

    function sync(opts: Options): string | undefined;
}
