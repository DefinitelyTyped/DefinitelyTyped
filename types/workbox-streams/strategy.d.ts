import { RouteHandlerCallback, RouteHandlerCallbackOptions } from "workbox-core/types/RouteHandler";

import { StreamSource } from "./types/StreamSource";

export function strategy(sourceFunctions: StreamsHandlerCallback[], headersInit?: HeadersInit): RouteHandlerCallback;

export interface StreamsHandlerCallback {
    (options: RouteHandlerCallbackOptions): Promise<StreamSource> | StreamSource;
}
