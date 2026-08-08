// Type definitions for download-package-tarball 1.0
// Project: https://github.com/kesla/download-package-tarball
// Definitions by: Christoph Thiede <https://github.com/LinqLover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { GotOptions } from 'got';

interface DownloadOptions {
    url: string;
    gotOpts?: GotOptions<string | null>;
    dir: string;
}

/** Download a node package as a tarball, for example from github or npm. */
declare function download(options: DownloadOptions): Promise<void>;

export = download;
