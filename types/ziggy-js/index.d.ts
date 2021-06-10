// Type definitions for ziggy-js 1.0
// Project: https://github.com/tightenco/ziggy#readme
// Definitions by: Ben Allfree <https://github.com/benallfree>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export type EncodeURIParamType = string | number | boolean;

export type InputValue =
    | {
          id: number;
      }
    | EncodeURIParamType;

export type NormalizedParams =
    | {
          [key: string]: InputValue;
      }
    | InputValue[];

export type InputParams = NormalizedParams | InputValue;

export interface Route {
    uri: string;
    methods: Array<'GET' | 'HEAD' | 'POST' | 'PATCH' | 'PUT' | 'OPTIONS' | 'DELETE'>;
    domain?: null | string;
}

export interface Config {
    namedRoutes: {
        [key: string]: Route;
    };
    baseUrl: string;
    baseProtocol: 'http' | 'https';
    baseDomain: string;
    basePort?: number | null;
    defaultParameters: {
        [_: string]: string | number;
    };
}

export class Router extends String {
    normalizeParams(params: InputParams): NormalizedParams;
    with(params: InputParams): Router;
    withQuery(params: InputParams): Router;
    hydrateUrl(): string;
    matchUrl(): boolean;
    constructQuery(): string;
    current(): string;
    current(name: string): boolean;
    check(name: string): boolean;
    extractParams(uri: string, template: string, delimiter: string): NormalizedParams;
    get params(): NormalizedParams;
    parse(): void;
    url(): string;
    toString(): string;
    trimParam(param: string): string;
    valueOf(): string;
}
declare function route(): Router;
declare function route(name: string, params?: InputParams, absolute?: boolean, customZiggy?: Config): string;
export default route;
