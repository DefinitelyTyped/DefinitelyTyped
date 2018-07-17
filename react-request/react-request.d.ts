// Type definitions for react-request 3.1.1
// Project: https://github.com/jamesplease/react-request
// Definitions by: Danny Cochran <https://github.com/dannycochran>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../react/react.d.ts"/>

declare module 'react-request' {
  import React from 'react';

  interface RenderProps<T> {
    requestName: string;
    requestKey: string;
    fetching: boolean;
    failed: boolean;
    error: Error | null;
    response: Response | null;
    url: string;
    data: T | null;
  }

  interface FetchRequestProps extends RequestInit {
    lazy?: boolean;
    url: string;
  }

  interface FetchProps<T = any> extends FetchRequestProps {
    children?: (renderProps: RenderProps<T>) => React.ReactNode;
  }

  // TODO(dannycochran) RequestKeyOptions, ProxyRequest, fetchDedupe, getRequestKey, isRequestInFlight, clearRequestCache
  // should all be defined in an adjacent typings directory for fetch-dedupe.
  interface RequestKeyOptions {
    url?: string;
    method?: string;
    responseType?: string;
    body?: string;
  }

  interface ProxyRequest {
    requestKey: string;
    res: Response;
  }

  // TODO(dannycochran) Fill out fetchDedupe options.
  const fetchDedupe: (input: any, init?: any, dedupeOptions?: any) => Promise<ProxyRequest>;
  const getRequestKey: (keyOptions?: RequestKeyOptions) => string;
  const isRequestInFlight: () => boolean;
  const clearRequestCache: () => void;
  const clearResponseCache: () => void;

  class Fetch<T = any> extends React.Component<FetchProps<T>, {}> { }
}
