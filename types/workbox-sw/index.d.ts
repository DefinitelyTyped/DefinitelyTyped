import WorkboxBackgroundSync = require("workbox-background-sync");
import WorkboxBroadcastUpdate = require("workbox-broadcast-update");
import WorkboxCacheableResponse = require("workbox-cacheable-response");
import WorkboxCore = require("workbox-core");
import WorkboxExpiration = require("workbox-expiration");
import WorkboxGoogleAnalytics = require("workbox-google-analytics");
import WorkboxNavigationPreload = require("workbox-navigation-preload");
import WorkboxPrecaching = require("workbox-precaching");
import WorkboxRangeRequests = require("workbox-range-requests");
import WorkboxRouting = require("workbox-routing");
import WorkboxStrategies = require("workbox-strategies");
import WorkboxStreams = require("workbox-streams");

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
