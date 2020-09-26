// Type definitions for ziggy-js 0.9
// Project: https://github.com/tightenco/ziggy#readme
// Definitions by: Ben Allfree <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export type Param = string | number | string[] | number[] | undefined;

export interface Params {
    [key: string]: Param;
}

export interface Route {
    uri: string;
    methods: Array<'GET' | 'HEAD' | 'POST' | 'DELETE'>;
    domain: null | string;
}

export interface Config {
    namedRoutes: {
        [key: string]: Route;
    };
    baseUrl: string;
    baseProtocol: 'http' | 'https';
    baseDomain: string;
    basePort: boolean;
    defaultParameters: string[];
}

export class Router extends String {
    normalizeParams(params: Params): Params;
    with(params: Params): Router;
    withQuery(params: Params): Router;
    hydrateUrl(): string;
    matchUrl(): boolean;
    constructQuery(): string;
    current(name?: string): Route;
    check(name: string): boolean;
    extractParams(uri: string, template: string, delimiter: string): Params;
    get params(): Params;
    parse(): void;
    url(): string;
    toString(): string;
    trimParam(param: string): string;
    valueOf(): string;
}

export default function route(name: string, params?: Params, absolute?: boolean, customZiggy?: Config): Router;
