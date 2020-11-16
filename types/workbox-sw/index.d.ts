// Type definitions for workbox-sw 4.3
// Project: https://github.com/GoogleChrome/workbox
// Definitions by: Frederik Wessberg <https://github.com/wessberg>
//                   Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as WorkboxBackgroundSync from "workbox-background-sync";
import * as WorkboxBroadcastUpdate from "workbox-broadcast-update";
import * as WorkboxCacheableResponse from "workbox-cacheable-response";
import * as WorkboxCore from "workbox-core";
import * as WorkboxExpiration from "workbox-expiration";
import * as WorkboxGoogleAnalytics from "workbox-google-analytics";
import * as WorkboxNavigationPreload from "workbox-navigation-preload";
import * as WorkboxPrecaching from "workbox-precaching";
import * as WorkboxRangeRequests from "workbox-range-requests";
import * as WorkboxRouting from "workbox-routing";
import * as WorkboxStrategies from "workbox-strategies";
import * as WorkboxStreams from "workbox-streams";

declare global {
    namespace workbox {
        const backgroundSync: typeof WorkboxBackgroundSync;
        const broadcastUpdate: typeof WorkboxBroadcastUpdate;
        const cacheableResponse: typeof WorkboxCacheableResponse;
        const core: typeof WorkboxCore;
        const expiration: typeof WorkboxExpiration;
        const googleAnalytics: typeof WorkboxGoogleAnalytics;
        const navigationPreload: typeof WorkboxNavigationPreload;
        const precaching: typeof WorkboxPrecaching;
        const rangeRequests: typeof WorkboxRangeRequests;
        const routing: typeof WorkboxRouting;
        const strategies: typeof WorkboxStrategies;
        const streams: typeof WorkboxStreams;

        function loadModule(moduleName: string): void;

        function setConfig(options?: WorkboxOptions): void;

        interface WorkboxOptions {
            debug?: boolean;
            modulePathCb?: ModulePathCallback;
            modulePathPrefix?: string;
        }

        type ModulePathCallback = (moduleName: string, debug: boolean) => string;
    }
}
