// Type definitions for file-fetch 1.6
// Project: https://github.com/bergos/file-fetch
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Headers } from "node-fetch";

interface FileFetchOptions {
    baseDir?: string | undefined;
    baseURL?: string | undefined;
}

type Fetch = typeof fetch;

interface FileFetch extends Fetch {
    create(opts?: FileFetchOptions): FileFetch;
    Headers: typeof Headers;
}

declare const fileFetch: FileFetch;

export = fileFetch;
