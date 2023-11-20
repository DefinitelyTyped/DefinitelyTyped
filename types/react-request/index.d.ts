import * as React from "react";

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
    lazy?: boolean | undefined;
    url: string;
}

export type ResponseType = "arrayBuffer" | "blob" | "formData" | "json" | "text";

export interface FetchProps<T = any> extends FetchRequestProps {
    afterFetch?: ((args: FetchResponse<T>) => void) | undefined;
    transformData?: ((data: any) => T) | undefined;
    responseType?: ResponseType | undefined;
    children?: ((renderProps: RenderProps<T>) => React.ReactNode) | undefined;
}

export interface DoFetchOptions extends RequestInit {
    url?: string | undefined;
}

export type DoFetch<T = any> = (
    options?: DoFetchOptions,
) => Promise<FetchResponse<T>>;

// TODO(dannycochran) RequestKeyOptions, ProxyRequest, fetchDedupe, getRequestKey, isRequestInFlight, clearRequestCache
// should all be defined in an adjacent typings directory for fetch-dedupe.
export interface RequestKeyOptions {
    url?: string | undefined;
    method?: string | undefined;
    responseType?: string | undefined;
    body?: string | undefined;
}

export interface ProxyRequest {
    requestKey: string;
    res: Response;
}

// TODO(dannycochran) Fill out fetchDedupe options.
export function fetchDedupe(
    input: any,
    init?: any,
    dedupeOptions?: any,
): Promise<ProxyRequest>;

export function getRequestKey(keyOptions?: RequestKeyOptions): string;
export function isRequestInFlight(): boolean;
export function clearRequestCache(): void;
export function clearResponseCache(): void;

export class Fetch<T = any> extends React.Component<FetchProps<T>> {}
