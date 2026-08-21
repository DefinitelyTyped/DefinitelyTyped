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
            debug?: boolean | undefined;
            modulePathCb?: ModulePathCallback | undefined;
            modulePathPrefix?: string | undefined;
        }

        type ModulePathCallback = (moduleName: string, debug: boolean) => string;
    }
}
