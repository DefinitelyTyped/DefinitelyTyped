import {
    RouteHandlerCallback,
    RouteHandlerCallbackContext
} from "workbox-routing";

import { StreamSource } from "./types/StreamSource";

export function strategy(sourceFunctions: StreamsHandlerCallback[], headersInit?: HeadersInit): RouteHandlerCallback;

export type StreamsHandlerCallback = (options: RouteHandlerCallbackContext) => Promise<StreamSource> | StreamSource;
