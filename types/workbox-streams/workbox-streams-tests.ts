"use strict";

import * as WorkboxStreams from "workbox-streams";
import { createHeaders } from "workbox-streams/utils/createHeaders";

declare const headersInit: HeadersInit;
declare const sourceFunctions: WorkboxStreams.StreamsHandlerCallback[];
declare const sourcePromises: Array<Promise<WorkboxStreams.StreamSource>>;

// $ExpectType ConcatenateReturn
WorkboxStreams.concatenate(sourcePromises);

// $ExpectType ConcatenateToResponseReturn
WorkboxStreams.concatenateToResponse(sourcePromises);

// $ExpectType boolean
WorkboxStreams.isSupported();

// $ExpectType RouteHandlerCallback
WorkboxStreams.strategy(sourceFunctions);

// $ExpectType boolean
createHeaders(headersInit);
