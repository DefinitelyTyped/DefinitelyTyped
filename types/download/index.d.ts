/// <reference types="node" />
import { DecompressOptions } from "decompress";
import { GotEmitter, GotOptions } from "got";
import { Duplex } from "stream";

declare namespace download {
    interface DownloadOptions extends DecompressOptions, GotOptions<string | null> {
        /**
         * If set to `true`, try extracting the file using
         * [`decompress`](https://github.com/kevva/decompress).
         *
         * @default false
         */
        extract?: boolean | undefined;

        /**
         * Name of the saved file.
         */
        filename?: string | undefined;
    }
}

/**
 * Download and extract files.
 *
 * @param url URL to download.
 * @param destination Path to where your file will be written.
 * @param options Same options as [`got`](https://github.com/sindresorhus/got#options)
 * and [`decompress`](https://github.com/kevva/decompress#options) in addition to the
 * ones from this package.
 *
 * @example
 * import fs from 'fs';
 * import download = require('download');
 *
 * (async () => {
 *     await download('http://unicorn.com/foo.jpg', 'dist');
 *
 *     fs.writeFileSync('dist/foo.jpg', await download('http://unicorn.com/foo.jpg'));
 *
 *     download('unicorn.com/foo.jpg').pipe(fs.createWriteStream('dist/foo.jpg'));
 *
 *     await Promise.all([
 *         'unicorn.com/foo.jpg',
 *         'cats.com/dancing.gif'
 *     ].map(url => download(url, 'dist')));
 * })();
 */
declare function download(
    url: string,
    destination?: string,
    options?: download.DownloadOptions,
): Promise<Buffer> & GotEmitter & Duplex;
declare function download(url: string, options?: download.DownloadOptions): Promise<Buffer> & GotEmitter & Duplex;

export = download;
