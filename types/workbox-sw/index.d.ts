// Type definitions for workbox-sw 4.3
// Project: https://github.com/GoogleChrome/workbox
// Definitions by: Frederik Wessberg <https://github.com/wessberg>
//                   Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as WorkboxBackgroundSync from '@types/workbox-background-sync';
import * as WorkboxBroadcastUpdate from '@types/workbox-broadcast-update';
import * as WorkboxCacheableResponse from '@types/workbox-cacheable-response';
import * as WorkboxCore from '@types/workbox-core';
import * as WorkboxExpiration from '@types/workbox-expiration';
import * as WorkboxGoogleAnalytics from '@types/workbox-google-analytics';
import * as WorkboxNavigationPreload from '@types/workbox-navigation-preload';
import * as WorkboxPrecaching from '@types/workbox-precaching';
import * as WorkboxRangeRequests from '@types/workbox-range-requests';
import * as WorkboxRouting from '@types/workbox-routing';
import * as WorkboxStrategies from '@types/workbox-strategies';
import * as WorkboxStreams from '@types/workbox-streams';

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
            debug?: boolean | undefined;
            modulePathCb?: ModulePathCallback | undefined;
            modulePathPrefix?: string | undefined;
        }

        type ModulePathCallback = (moduleName: string, debug: boolean) => string;
    }
}
