export function configureRefreshFetch<T>(
    configuration: {
        fetch: T;
        refreshToken: () => Promise<void>;
        shouldRefreshToken: (error: any) => boolean;
    },
): T;

export function fetchJSON<ResponseBody>(url: string | Request | URL, options?: RequestInit): Promise<{
    /* eslint-disable-next-line @definitelytyped/no-unnecessary-generics */
    body: ResponseBody;
    response: Response;
}>;
