/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    StreamSource,
    StreamsHandlerCallback,
    concatenate,
    concatenateToResponse,
    isSupported,
    strategy
} from "workbox-streams";

//==============================================================================
// WorkboxStreams.concatenate
//==============================================================================

export namespace ConcatenateTest {
    declare const sources: Array<Promise<StreamSource>>;

    // $ExpectType ConcatenateReturn
    concatenate(sources);
}

//==============================================================================
// WorkboxStreams.concatenateToResponse
//==============================================================================

export namespace ConcatenateToResponseTest {
    declare const sources: Array<Promise<StreamSource>>;

    // $ExpectType ConcatenateToResponseReturn
    concatenateToResponse(sources);
}

//==============================================================================
// WorkboxStreams.concatenate
//==============================================================================

export namespace IsSupportedTest {
    // $ExpectType boolean
    isSupported();
}

//==============================================================================
// WorkboxStreams.strategy
//==============================================================================

export namespace StrategyTest {
    declare const headers: HeadersInit;
    declare const sources: StreamsHandlerCallback[];

    // $ExpectType RouteHandlerCallback
    strategy(sources);
    // $ExpectType RouteHandlerCallback
    strategy(sources, headers);
}
