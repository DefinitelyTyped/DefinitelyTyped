// Type definitions for isomorphic-fetch 0.0
// Project: https://github.com/matthew-andrews/isomorphic-fetch
// Definitions by: Todd Lucas <https://github.com/toddlucas>
//                 Ihor Chulinda <https://github.com/Igmat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />

import * as _fetch from "node-fetch";

declare const fetchFn: typeof _fetch.default;
export = fetchFn;

declare global {
    const fetch: typeof _fetch.default;

    interface RequestInit extends _fetch.RequestInit {}
    interface Request extends _fetch.Request {}
    const Request: typeof _fetch.Request;

    interface ResponseInit extends _fetch.ResponseInit {}
    interface Response extends _fetch.Response {}
    const Response: typeof _fetch.Response;

    interface Headers extends _fetch.Headers {}
    const Headers: typeof _fetch.Headers;

    interface Blob extends _fetch.Blob {}
    const Blob: typeof _fetch.Blob;
}
