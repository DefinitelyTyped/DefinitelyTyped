// Type definitions for react-request 3.1
// Project: https://github.com/jamesplease/react-request
// Definitions by: Danny Cochran <https://github.com/dannycochran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

export interface RenderProps<T> {
  requestName: string;
  requestKey: string;
  fetching: boolean;
  failed: boolean;
  error: Error | null;
  response: Response | null;
  url: string;
  data: T | null;
}

export interface FetchRequestProps extends RequestInit {
  lazy?: boolean;
  url: string;
}

export interface FetchProps<T = any> extends FetchRequestProps {
  children?: (renderProps: RenderProps<T>) => React.ReactNode;
}

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
export function fetchDedupe(input: any, init?: any, dedupeOptions?: any): Promise<ProxyRequest>;
export function getRequestKey(keyOptions?: RequestKeyOptions): string;
export function isRequestInFlight(): boolean;
export function clearRequestCache(): void;
export function clearResponseCache(): void;

export class Fetch<T = any> extends React.Component<FetchProps<T>> { }
