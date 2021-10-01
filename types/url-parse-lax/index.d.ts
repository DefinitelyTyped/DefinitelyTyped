// Type definitions for url-parse-lax 5.0
// Project: https://github.com/sindresorhus/url-parse-lax
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { UrlObject } from "url";

export interface Options {
    readonly https?: boolean;
}

export default function urlParseLax(url: string, options?: Options): UrlObject;
