/// <reference types="node" />

import { UrlObject } from "url";

export interface Options {
    readonly https?: boolean;
}

export default function urlParseLax(url: string, options?: Options): UrlObject;
