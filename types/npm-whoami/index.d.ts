// Type definitions for npm-whoami 1.1
// Project: https://github.com/jamestalmage/npm-whoami#readme
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = NpmWhoami;

declare function NpmWhoami(callback: NpmWhoami.NpmWhoamiCallback, opts?: NpmWhoami.NpmWhoamiOptions): void;

declare namespace NpmWhoami {
    interface NpmWhoamiCallback {
        (err: Error, username: undefined): void;
        (err: null, username: string): void;
    }

    type NpmWhoamiOptions = number | string | NpmWhoamiBothOptions;

    interface NpmWhoamiBothOptions {
        registry?: string;
        timeout?: number;
    }

    function sync(opts: NpmWhoamiOptions): string | undefined;
}
