export = remoteOriginUrl;

declare function remoteOriginUrl(
    options?: string | remoteOriginUrl.Options,
): Promise<string | undefined>;
declare function remoteOriginUrl(callback: remoteOriginUrl.Callback): void;
declare function remoteOriginUrl(
    options: string | remoteOriginUrl.Options,
    callback: remoteOriginUrl.Callback,
): void;

declare namespace remoteOriginUrl {
    function promise(options?: string | Options): Promise<string | undefined>;
    function sync(options?: string | Options): string | undefined;

    interface Options {
        path?: string | undefined;
    }

    type Callback = (error: Error | null, url?: string) => void;
}
