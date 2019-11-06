"use strict";

import * as WorkboxNavigationPreload from "workbox-navigation-preload";

declare const headerValue: string;

// $ExpectType void
WorkboxNavigationPreload.disable();

// $ExpectType void
WorkboxNavigationPreload.enable();
// $ExpectType void
WorkboxNavigationPreload.enable(headerValue);

// $ExpectType boolean
WorkboxNavigationPreload.isSupported();
