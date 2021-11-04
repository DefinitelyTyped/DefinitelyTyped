// Type definitions for workbox-precaching 4.3
// Project: https://github.com/GoogleChrome/workbox
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export * from "./PrecacheController";
export * from "./addPlugins";
export { addRoute } from "./addRoute";
export * from "./cleanupOutdatedCaches";
export * from "./getCacheKeyForURL";
export { precache } from "./precache";
export { precacheAndRoute } from "./precacheAndRoute";

export * from "./types/CleanupResult";
export * from "./types/FetchListenerOptions";
export * from "./types/PrecacheEntry";
export * from "./types/URLManipulation";
