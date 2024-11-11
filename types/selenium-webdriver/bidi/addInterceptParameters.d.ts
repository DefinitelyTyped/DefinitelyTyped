import { UrlPattern } from "./urlPattern";

declare class AddInterceptParameters {
    private _phases;
    private _urlPatterns;

    constructor(phases: string | string[]);

    urlPattern(pattern: UrlPattern): this;

    urlPatterns(patterns: UrlPattern[]): this;

    urlStringPattern(pattern: string): this;

    urlStringPatterns(patterns: string[]): this;

    asMap(): Map<string, string[] | { type: string; pattern: string }[]>;
}

export { AddInterceptParameters };
