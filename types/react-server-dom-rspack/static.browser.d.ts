import type { StaticResult, WebServerOptions } from "./shared";

export type Options = WebServerOptions;

export function prerender(
    model: unknown,
    options?: Options,
): Promise<StaticResult<ReadableStream<Uint8Array>>>;
