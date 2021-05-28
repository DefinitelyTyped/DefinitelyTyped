// Type definitions for redact-axios-error 4.0
// Project: https://github.com/tcollinsworth/redact-axios-error#readme
// Definitions by: Amin Fazl <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class AxiosErrorGroomer {
    /**
     * @param includeRequestData default true, false redacts request data
     * @param includeResponseData default true, false redacts response data
     * @param includeQueryData default true, false redacts query string data
     */
    constructor(includeRequestData?: boolean, includeResponseData?: boolean, includeQueryData?: boolean);

    includeRequestData(flag: boolean): void;
    includeResponseData(flag: boolean): void;
    includeQueryData(flag: boolean): void;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getGroomedAxiosError(err: any): any;
}

export function getAxiosErrorInterceptor(axiosErrorGroomer?: AxiosErrorGroomer | null): ((error: any) => Promise<never>);
export const config: AxiosErrorGroomer | null;
