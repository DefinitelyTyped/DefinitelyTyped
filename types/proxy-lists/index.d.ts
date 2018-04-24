// Type definitions for proxy-lists 1.14
// Project: https://github.com/chill117/proxy-lists#readme
// Definitions by: BehindTheMath <https://github.com/BehindTheMath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { CoreOptions as RequestOptions } from "request";
import { EventEmitter } from "events";

declare class ProxyLists {
    static getProxies(options?: Partial<ProxyLists.Options>): ProxyLists.GetProxiesEventEmitter;

    static getProxiesFromSource(name: string, options?: ProxyLists.Options): ProxyLists.GetProxiesEventEmitter;

    static addSource(name: string, source: ProxyLists.AddSource): void;

    static listSources(options?: ProxyLists.ListSourcesOptions): ProxyLists.Source[];
}

export = ProxyLists;

declare namespace ProxyLists {
    class GetProxiesEventEmitter extends EventEmitter {
        on(event: "data", listener: (proxies: Proxy[]) => void): this;
        on(event: "error", listener: (error: any) => void): this;
        on(event: "end", listener: () => void): this;
    }

    interface Options {
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

    type Protocol = "http" | "https" | "socks5" | "socks4";

    type AnonymityLevel = "transparent" | "anonymous" | "elite";

    type IPType = "ipv4" | "ipv6";

    interface Proxy {
        ipAddress: string;
        port: number;
        country: string;
        anonymityLevel?: AnonymityLevel;
        protocols?: Protocol[];
        source: string;
        tunnel?: boolean;
    }

    interface InternalOptions extends Options {
        sample?: boolean;
    }

    interface AddSource {
        homeUrl: string;
        getProxies(options: InternalOptions): GetProxiesEventEmitter;
    }

    interface ListSourcesOptions {
        sourcesWhiteList?: string[];
        sourcesBlackList?: string[];
    }

    interface Source {
        name: string;
        homeUrl: string;
    }
}
