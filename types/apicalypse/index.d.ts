// Type definitions for apicalypse 0.1
// Project: https://github.com/igdb/node-apicalypse
// Definitions by: Susam <https://github.com/susam-projects>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Apicalypse {
    request(url: string): Promise<AxiosResponse>;
    requestAll(url: string, options?: RequestAllConfig): Promise<any[]>;

    multi(queries: ReadonlyArray<Apicalypse>): Apicalypse;
    query(endpoint: string, name: string): Apicalypse;

    fields(fields: string | ReadonlyArray<string>): Apicalypse;
    sort(field: string, direction?: SortDirection): Apicalypse;
    limit(limit: number): Apicalypse;
    offset(offset: number): Apicalypse;
    search(search: string): Apicalypse;
    where(filters: string | ReadonlyArray<string>): Apicalypse;
}

export interface RequestAllConfig {
    concurrency?: number;
    delay?: number;
}

export type SortDirection = 'asc' | 'desc';

declare function apicalypseFactory(options?: ApicalypseConfig): Apicalypse;
declare function apicalypseFactory(rawQueryString: string, options?: ApicalypseConfig): Apicalypse;

export interface ApicalypseConfig extends AxiosRequestConfig {
    queryMethod?: QueryMethod;
}

export type QueryMethod = 'body' | 'url';

export default apicalypseFactory;
