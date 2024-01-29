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
