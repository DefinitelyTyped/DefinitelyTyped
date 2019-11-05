"use strict";

import * as WorkboxRangeRequests from "workbox-range-requests";

declare const request: Request;
declare const response: Response;

// $ExpectType RangeRequestsPlugin
const plugin = new WorkboxRangeRequests.RangeRequestsPlugin();

// $ExpectType Promise<Response>
WorkboxRangeRequests.createPartialResponse(request, response);
