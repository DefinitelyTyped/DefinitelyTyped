import fetch from "node-fetch";
import { Tracer } from "zipkin";

interface Options {
    tracer: Tracer;
    remoteServiceName: string;
    serviceName?: string;
}

declare function wrapFetch(rawFetch: typeof fetch, options: Options): typeof fetch;

export = wrapFetch;
