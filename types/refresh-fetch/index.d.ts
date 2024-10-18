export function configureRefreshFetch<T>(
    configuration: {
        fetch: T;
        refreshToken: () => Promise<void>;
        shouldRefreshToken: (error: any) => boolean;
    },
): T;

/* eslint-disable-next-line @definitelytyped/no-unnecessary-generics */
export function fetchJSON<ResponseBody>(url: string | Request | URL, options?: RequestInit): Promise<{
    body: ResponseBody;
    response: Response;
}>;
