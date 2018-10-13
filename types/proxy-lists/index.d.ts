// Type definitions for proxy-lists 1.14
// Project: https://github.com/chill117/proxy-lists#readme
// Definitions by: BehindTheMath <https://github.com/BehindTheMath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CoreOptions as RequestOptions } from "request";
import { EventEmitter } from "events";

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
	filterMode?: "strict" | "loose";
	countries?: string[];
	countriesBlackList?: string[];
	protocols?: Protocol[];
	anonymityLevels?: AnonymityLevel[];
	sourcesWhiteList?: string[];
	sourcesBlackList?: string[];
	series?: boolean;
	ipTypes?: IPType[];
	defaultRequestOptions?: RequestOptions;
}

export type Protocol = "http" | "https" | "socks5" | "socks4";

export type AnonymityLevel = "transparent" | "anonymous" | "elite";

export type IPType = "ipv4" | "ipv6";

export interface Proxy {
	ipAddress: string;
	port: number;
	country: string;
	anonymityLevel?: AnonymityLevel;
	protocols?: Protocol[];
	source: string;
	tunnel?: boolean;
}

export interface InternalOptions extends Options {
	sample?: boolean;
}

export interface AddSource {
	homeUrl: string;
	getProxies(options: InternalOptions): GetProxiesEventEmitter;
}

export interface ListSourcesOptions {
	sourcesWhiteList?: string[];
	sourcesBlackList?: string[];
}

export interface Source {
	name: string;
	homeUrl: string;
}
