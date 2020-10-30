/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    InitializeOptions,
    initialize,
} from "workbox-google-analytics";

//==============================================================================
// WorkboxGoogleAnalytics.initialize
//==============================================================================

export namespace InitializeTest {
    declare const options: InitializeOptions;

    // $ExpectType void
    initialize();
    // $ExpectType void
    initialize(options);
}
