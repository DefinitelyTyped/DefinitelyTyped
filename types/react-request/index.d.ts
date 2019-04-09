// Type definitions for react-request 3.1
// Project: https://github.com/jamesplease/react-request
// Definitions by: Danny Cochran <https://github.com/dannycochran>
//                 Angus Fretwell <https://github.com/angusfretwell>
//                 Jonathan Ly <https://github.com/jonathanly>
//                 Alberto Juan <https://github.com/albertojuanl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

export interface FetchResponse<T> {
    url: string;
    init: any;
    failed: boolean;
    requestKey: string;
    response: Response | null;
    data: T | null;
    error: Error | null;
    didUnmount: boolean;
}

export interface RenderProps<T> extends FetchResponse<T> {
    requestName: string;
    fetching: boolean;
    doFetch: DoFetch<T>;
}

export interface FetchRequestProps extends RequestInit {
    lazy?: boolean;
    url: string;
}

export type ResponseType = 'arrayBuffer' |  'blob' | 'formData' | 'json' | 'text';

export interface FetchProps<T = any> extends FetchRequestProps {
    afterFetch?: (args: FetchResponse<T>) => void;
    transformData?: (data: any) => T;
    responseType?: ResponseType;
    children?: (renderProps: RenderProps<T>) => React.ReactNode;
}

export interface DoFetchOptions extends RequestInit {
    url?: string;
}

export type DoFetch<T = any> = (
    options?: DoFetchOptions
) => Promise<FetchResponse<T>>;

// TODO(dannycochran) RequestKeyOptions, ProxyRequest, fetchDedupe, getRequestKey, isRequestInFlight, clearRequestCache
// should all be defined in an adjacent typings directory for fetch-dedupe.
export interface RequestKeyOptions {
    url?: string;
    method?: string;
    responseType?: string;
    body?: string;
}

export interface ProxyRequest {
    requestKey: string;
    res: Response;
}

// TODO(dannycochran) Fill out fetchDedupe options.
export function fetchDedupe(
    input: any,
    init?: any,
    dedupeOptions?: any
): Promise<ProxyRequest>;

export function getRequestKey(keyOptions?: RequestKeyOptions): string;
export function isRequestInFlight(): boolean;
export function clearRequestCache(): void;
export function clearResponseCache(): void;

export class Fetch<T = any> extends React.Component<FetchProps<T>> {}
