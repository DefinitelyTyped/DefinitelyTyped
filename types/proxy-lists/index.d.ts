import { EventEmitter } from "events";
import { CoreOptions as RequestOptions } from "request";

export function getProxies(options?: Partial<Options>): GetProxiesEventEmitter;

export function getProxiesFromSource(name: string, options?: Options): GetProxiesEventEmitter;

export function addSource(name: string, source: AddSource): void;

export function listSources(options?: ListSourcesOptions): Source[];

export class GetProxiesEventEmitter extends EventEmitter {
    on(event: "data", listener: (proxies: Proxy[]) => void): this;
    on(event: "error", listener: (error: any) => void): this;
    on(event: "end", listener: () => void): this;
}

export interface Options {
    filterMode?: "strict" | "loose" | undefined;
    countries?: string[] | undefined;
    countriesBlackList?: string[] | undefined;
    protocols?: Protocol[] | undefined;
    anonymityLevels?: AnonymityLevel[] | undefined;
    sourcesWhiteList?: string[] | undefined;
    sourcesBlackList?: string[] | undefined;
    series?: boolean | undefined;
    ipTypes?: IPType[] | undefined;
    defaultRequestOptions?: RequestOptions | undefined;
}

export type Protocol = "http" | "https" | "socks5" | "socks4";

export type AnonymityLevel = "transparent" | "anonymous" | "elite";

export type IPType = "ipv4" | "ipv6";

export interface Proxy {
    ipAddress: string;
    port: number;
    country: string;
    anonymityLevel?: AnonymityLevel | undefined;
    protocols?: Protocol[] | undefined;
    source: string;
    tunnel?: boolean | undefined;
}

export interface InternalOptions extends Options {
    sample?: boolean | undefined;
}

export interface AddSource {
    homeUrl: string;
    getProxies(options: InternalOptions): GetProxiesEventEmitter;
}

export interface ListSourcesOptions {
    sourcesWhiteList?: string[] | undefined;
    sourcesBlackList?: string[] | undefined;
}

export interface Source {
    name: string;
    homeUrl: string;
}
