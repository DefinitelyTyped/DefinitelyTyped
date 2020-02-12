// Type definitions for refresh-fetch 0.6
// Project: https://github.com/vlki/refresh-fetch
// Definitions by: Alex Lisenkov <https://github.com/AlexLisenkov>
//                 Pieter Braam <https://github.com/ppbraam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function configureRefreshFetch<T>(
  configuration: {
    fetch: T;
    refreshToken: () => Promise<void>;
    shouldRefreshToken: (error: any) => boolean;
  }): T;

export function fetchJSON<ResponseBody>(url: string | Request | URL, options?: object): Promise<{
  /* tslint:disable-next-line no-unnecessary-generics */
  body: ResponseBody;
  response: Response;
}>;
