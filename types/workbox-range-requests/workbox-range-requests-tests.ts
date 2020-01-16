/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    Plugin,
    createPartialResponse,
} from "workbox-range-requests";

//==============================================================================
// WorkboxRangeRequests.Plugin
//==============================================================================

export namespace RangeRequestsPluginTest {
    // $ExpectType Plugin
    new Plugin();
}

//==============================================================================
// WorkboxRangeRequests.createPartialResponse
//==============================================================================

export namespace CreatePartialResponseTest {
    declare const request: Request;
    declare const response: Response;

    // $ExpectType Promise<Response>
    createPartialResponse(request, response);
}
