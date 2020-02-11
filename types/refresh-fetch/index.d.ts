// Type definitions for Refresh-fetch 0.6.2
// Project: https://github.com/vlki/refresh-fetch
// Definitions by: Alex Lisenkov <https://github.com/AlexLisenkov>
//                 Pieter Braam <https://github.com/ppbraam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

declare module 'refresh-fetch' {
  export function configureRefreshFetch<T>(
    configuration: {
      fetch: T;
      refreshToken: () => Promise<void>;
      shouldRefreshToken: (error: any) => boolean;
    }): T

  export function fetchJSON<ResponseBody>(url: string | Request | URL, options?: object): Promise<{
    body: ResponseBody;
    response: Response;
  }>;
}
