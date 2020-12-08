export = downloader;

/**
 * Place the `youtube-dl` binary in a specific directory and control when it gets updates.
 */
declare function downloader(binDir: string | null, callback: (err: Error | string | null, message?: string) => void): void;
declare function downloader(callback: (err: Error | string | null, message?: string) => void): void;
declare function downloader(binDir?: string | null): Promise<string>;
