// Type definitions for remote-origin-url 2.0
// Project: https://github.com/jonschlinkert/remote-origin-url
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = remoteOriginUrl;

declare function remoteOriginUrl(
    options?: string | remoteOriginUrl.Options
): Promise<string | undefined>;
declare function remoteOriginUrl(callback: remoteOriginUrl.Callback): void;
declare function remoteOriginUrl(
    options: string | remoteOriginUrl.Options,
    callback: remoteOriginUrl.Callback
): void;

declare namespace remoteOriginUrl {
    function promise(options?: string | Options): Promise<string | undefined>;
    function sync(options?: string | Options): string | undefined;

    interface Options {
        path?: string;
    }

    type Callback = (error: Error | null, url?: string) => void;
}
