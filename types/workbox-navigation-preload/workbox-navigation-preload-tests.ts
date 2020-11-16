/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    disable,
    enable,
    isSupported,
} from "workbox-navigation-preload";

declare const headerValue: string;

//==============================================================================
// WorkboxNavigationPreload.disable
//==============================================================================

export namespace DisableTest {
    // $ExpectType void
    disable();
}

//==============================================================================
// WorkboxNavigationPreload.enable
//==============================================================================

export namespace EnableTest {
    declare const header: string;

    // $ExpectType void
    enable();
    // $ExpectType void
    enable(header);
}

//==============================================================================
// WorkboxNavigationPreload.isSupported
//==============================================================================

export namespace IsSupportedTest {
    // $ExpectType boolean
    isSupported();
}
