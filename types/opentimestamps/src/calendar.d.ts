/// <reference types="node" />

import Timestamp = require("./timestamp");

export class RemoteCalendar {
    constructor(url: string);
    url: string;
    headers: { [key: string]: string };
    timeout: number;
    submit(digest: Buffer): Promise<Timestamp>;
    getTimestamp(commitment: Buffer): Promise<Timestamp>;
}

export class UrlWhitelist {
    constructor(urls: string[]);
    add(url: string): void;
    contains(url: string): boolean;
    toString(): string;
}

export const DEFAULT_CALENDAR_WHITELIST: UrlWhitelist;
export const DEFAULT_AGGREGATORS: [
    "https://a.pool.opentimestamps.org",
    "https://b.pool.opentimestamps.org",
    "https://a.pool.eternitywall.com",
    "https://ots.btc.catallaxy.com",
];

export class CommitmentNotFoundError extends Error {
    name: "CommitmentNotFoundError";
    constructor(message?: string);
}

export class URLError extends Error {
    name: "URLError";
    constructor(message?: string);
}

export class ExceededSizeError extends Error {
    name: "ExceededSizeError";
    constructor(message?: string);
}
