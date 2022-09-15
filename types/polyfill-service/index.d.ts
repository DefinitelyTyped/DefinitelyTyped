// Type definitions for polyfill-service 3.25
// Project: https://github.com/financial-times/polyfill-service#readme
// Definitions by: Arturas Molcanovas <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export type PolyfillFlag = 'gated' | 'always';
export type Unknown = 'polyfill' | 'ignore';

export interface Feature {
    flags?: PolyfillFlag[] | undefined;
}

export interface Features {
    [feature: string]: Feature;
}

export interface GetPolyfillsOptions {
    uaString: string;
    features?: Features | undefined;
    excludes?: string[] | undefined;
}

export interface GetPolyfillStringOptions extends GetPolyfillsOptions {
    minify?: boolean | undefined;
    unknown?: Unknown | undefined;
}

export interface PolyfillSpec {
    aliasOf?: Set<string> | undefined;
    flags: Set<PolyfillFlag>;
}

export interface GetPolyfillsResponse {
    [name: string]: PolyfillSpec;
}

export function listAllPolyfills(): Promise<ReadonlyArray<string>>;

export function getPolyfillString(options: GetPolyfillStringOptions): Promise<string>;

export function getPolyfills(options: GetPolyfillsOptions): Promise<GetPolyfillsResponse>;
