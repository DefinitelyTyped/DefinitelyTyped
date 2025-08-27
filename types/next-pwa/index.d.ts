/// <reference path="global.d.ts" />
/// <reference types="react"/>

import type { NextConfig } from "next";
import type { GenerateSWOptions, InjectManifestOptions, RuntimeCaching } from "workbox-build";

declare global {
    interface PopStateEventInit extends EventInit {
        state?: any;
    }

    /**
     * PopStateEvent is an event handler for the popstate event on the window.
     *
     * Re-declare type to allow tsconfig `lib: ["es6", "webworker"]` to work.
     * @see [DOM and WebWorker Should not be mutually exclusive](https://github.com/microsoft/TypeScript/issues/20595)
     */
    interface PopStateEvent extends Event {
        /** Returns a copy of the information that was provided to pushState() or replaceState(). */
        readonly state: any;
    }

    var PopStateEvent: {
        prototype: PopStateEvent;
        new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
    };
}

/**
 * The declaration type for the `withPWA` function.
 */
type WithPWA = (config: NextConfig) => NextConfig & PWAConfig;
type WebpackConfigOptions = Partial<GenerateSWOptions & InjectManifestOptions>;
type ExcludeRoutes = (input: string) => boolean;
interface FallbackRoutes {
    document: string;
    image: string;
    audio: string;
    video: string;
    font: string;
}

/**
 * The **next-pwa** plugin configuration object.
 *
 * Accepts the following configutation options:
 * - **[Default plugin options](https://github.com/shadowwalker/next-pwa#available-options)**
 * - [Workbox's `generateSW` options](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-WebpackGenerateSWOptions)
 * - [Workbox's `injectManifest` options](https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-WebpackInjectManifestOptions)
 */
interface PWAConfig extends WebpackConfigOptions {
    /**
     * The path to the directory where the generated service worker file will be placed.
     * Should be set to `public` for easier deployment to static hosting services.
     *
     * @remarks
     * `next-pwa^2.0.0` should only work with `Next^9.5.0`, and static files
     * should only be served through the `public` directory.
     */
    dest: string;

    /**
     * Whether to disable the PWA plugin as a whole.
     *
     * @default false
     *
     * @example
     * Disable PWA plugin during development.
     * ```js
     * const options = {
     *   disable: process.env.NODE_ENV === "development"
     *   // other options
     * }
     * ```
     */
    disable?: boolean;

    /**
     * Configure if the service worker should be registered by the plugin.
     * Set to `false` if you want to register the service worker manually.
     *
     * @default true
     *
     * @see [Registering the service worker manually](https://github.com/shadowwalker/next-pwa/blob/master/register.js)
     */
    register?: boolean;

    /**
     * URL scope of the PWA.
     *
     * @default basePath or "/"
     *
     * @see [Next.js `basePath` documentation](https://nextjs.org/docs/api-reference/next.config.js/basepath)
     *
     * @see [Service Worker Scope](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker#scope)
     */
    scope?: string;

    /**
     * Service worker script file name.
     * Set to a different value to customize the output file name.
     *
     * @default "/sw.js"
     */
    sw?: string;

    /**
     * Caching strategies. Accepts an array of cache entry objects.
     *
     * @see [Default Runtime Caching strategies](https://github.com/shadowwalker/next-pwa#runtime-caching)
     *
     * @remarks
     * The order within the array matters. The **first rule** that matches is effective.
     * Therefore, **always** put rules with larger scopes behind the rules with a smaller, more specific scope.
     */
    runtimeCaching?: RuntimeCaching[];

    /**
     * Array of Glob patterns to exclude files inside `public` _(or custom `dest`)_  folder from being precached.
     *
     * @remarks
     * The default value will precache all files inside `public` folder except those inside `public/noprecache` folder _(or custom `dest`)_.
     *
     * @see [Default value](https://github.com/shadowwalker/next-pwa#:~:text=and%20specific%20scope.-,publicExcludes,-%2D%20an%20array%20of)
     */
    publicExcludes?: string[];

    /**
     * Array of extra Glob patterns or functions to exclude files inside `.next/static`
     * (or your custom build) folder from being precached.
     * The interpreter follows [the same rules](https://.js.org/configuration/module/#ruleexclude)
     * as 's standard `exclude` option.
     *
     * @default []
     *
     * @example
     * ```js
     * const options = {
     *   buildExcludes: ["!img/super-large-image.jpg", "!fonts/not-used-fonts.otf"]
     *   // other options
     * }
     * ```
     */
    buildExcludes?: string[] | RegExp[] | ExcludeRoutes[];

    /**
     * Whether to cache the start URL.
     *
     * @default true
     *
     * @see [Discussion of use case to not cache start url at all](https://github.com/shadowwalker/next-pwa/pull/296#issuecomment-1094167025)
     */
    cacheStartUrl?: boolean;

    /**
     * If your start url returns different HTML document under different state
     * (ex.: signed in against not signed in), this should be set to true.
     *
     * @default true
     *
     * @remarks
     * Only effective when `cacheStartUrl` is set to `true`.
     * Set to false if your start url always returns same HTML document, then start url will be precached,
     * this will help to speed up first load time.
     */
    dynamicStartUrl?: boolean;

    /**
     * The url to another route that is the target of a redirect from the start url.
     *
     * @default undefined
     *
     * @remarks
     * Only effective when `dynamicStartUrl` is set to `true`.
     */
    dynamicStartUrlRedirect?: string;

    /**
     * The url to precached routes to be used as fallback when offline.
     * If you just need an offline fallback page,
     * simply create a `/_offline` page such as `pages/_offline.{js,jsx,tsx}`.
     *
     * @default
     * {} // no fallback routes
     *
     * { document: "/_offline" } // if a `/_offline` page exists
     *
     * @see [Offline Fallbacks](https://github.com/shadowwalker/next-pwa#offline-fallbacks)
     */
    fallbacks?: FallbackRoutes;

    /**
     * Whether no enable additional route caching when navigating between pages with `next/link`.
     *
     * @default false
     *
     * @remarks
     * This improves user experience on specific use cases, however it also adds **extra** network calls overhead.
     *
     * @see [Further discussion about this option](https://github.com/shadowwalker/next-pwa/tree/master/examples/cache-on-front-end-nav)
     */
    cacheOnFrontEndNav?: boolean;

    /**
     * @deprecated ⚠️ Use [`basePath`](https://nextjs.org/docs/api-reference/next.config.js/basepath) instead.
     *
     * The url prefix to enable hosting static files on a subdomain.
     *
     * @default ""
     */
    subdomainPrefix?: string;

    /**
     * Customize the behavior of the app when the device goes back online.
     * Indicates if the app should refresh the page by calling `location.reload()`.
     *
     * @default true
     */
    reloadOnOnline?: boolean;

    /**
     * Customize the directory where the plugin will look for a custom worker implementation
     * to add to the service worker generated by Workbox.
     *
     * @default "worker"
     *
     * @see [Custom Service Worker](https://github.com/shadowwalker/next-pwa/tree/master/examples/custom-ts-worker)
     */
    customWorkerDir?: string;
}

/**
 * Returns a modified Next.js configuration Object with the PWA plugin Object applied.
 *
 * During `build`, will generate two files in your `public` _(or custom `dest`)_ directory: `workbox-*.js` and `sw.js`, which will be served statically by default.
 *
 * @param config The [Next.js configuration](https://nextjs.org/docs/api-reference/next.config.js/introduction) Object
 *
 * @see [Basic Usage](https://github.com/shadowwalker/next-pwa#basic-usage)
 */
declare function withPWA(config: NextConfig): NextConfig & PWAConfig;

/**
 * Returns a function constructor for a PWA-ready plugin to Next.js's configuration object.
 *
 * @param config The **next-pwa** plugin configuration options.
 *
 * @example Import the plugin and its type declarations to your `next.config.js` file.
 * ```js
 * /// <reference types="next-pwa" />
 *
 * const withPWA = require("next-pwa")({
 *              dest: "public",
 * });
 * ```
 */
declare function nextPWA(config: PWAConfig): typeof withPWA;

declare namespace nextPWA {
    export { FallbackRoutes, PWAConfig, WebpackConfigOptions, WithPWA };
}

export = nextPWA;
