import EventEmitter = require("events");
import request = require("request");

export type HttpAgentUrl = string | request.OptionsWithUri;

export type HttpAgentUrls = readonly HttpAgentUrl[];

export interface HttpAgentOptions extends request.CoreOptions {
    urls?: HttpAgentUrls;
}

export function create(
    host: string | HttpAgentOptions,
    urls?: HttpAgentUrls,
    options?: HttpAgentOptions,
): HttpAgent;

export interface HttpAgentPrototype {
    readonly prevUrls: string;
    readonly nextUrls: string;
}

export class HttpAgent extends EventEmitter {
    prototype: HttpAgentPrototype;
    constructor(host: string | HttpAgentOptions, urls?: HttpAgentUrls, options?: HttpAgentOptions);
    url: string;
    body: string;
    port: number;
    host: string;
    options: request.OptionsWithUri;
    addUrl(url: string): void;
    start(): void;
    stop(): void;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    back(): boolean | void;
    next(url: string): void;
    readonly prevUrls: string[];
    readonly nextUrls: string[];
}
