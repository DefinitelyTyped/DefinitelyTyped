export function initialize(options?: Options | string): void;

export function end(): void;

export const proxyUrl: string | null;
export const proxyConfig: Options | null;
export const isProxying: boolean;

export interface Options {
    host: string;
    port: number;
    connect?: "neither" | "https" | "both" | undefined;
    protocol?: "http:" | "https:" | undefined;
    proxyAuth?: string | undefined;
    sockets?: number | undefined;
    proxyHttpsOptions?: { [key: string]: any } | undefined;
    originHttpsOptions?: { [key: string]: any } | undefined;
}
