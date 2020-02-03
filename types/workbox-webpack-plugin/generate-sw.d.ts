import { ManifestEntry, ManifestTransform, RuntimeCachingEntry } from 'workbox-build';

export interface GenerateSWConfig {
    /**
     * A list of entries to be precached, in addition to any entries that are
     * generated as part of the build configuration.
     */
    additionalManifestEntries?: ManifestEntry[];

    /**
     * The [targets](https://babeljs.io/docs/en/babel-preset-env#targets) to pass to
     * `babel-preset-env` when transpiling the service worker bundle.
     *
     * @default ['chrome >= 56']
     */
    babelPresetEnvTargets?: string[];

    /**
     * An optional ID to be prepended to cache names. This is primarily useful for
     * local development where multiple sites may be served from the same
     * `http://localhost:port` origin.
     */
    cacheId?: string;

    /**
     * Whether or not Workbox should attempt to identify an delete any precaches
     * created by older, incompatible versions.
     *
     * @default false
     */
    cleanupOutdatedCaches?: boolean;

    /**
     * Whether or not the service worker should [start controlling](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim)
     * any existing clients as soon as it activates.
     *
     * @default false
     */
    clientsClaim?: boolean;

    /**
     * One or more chunk names whose corresponding output files should be included
     * in the precache manifest.
     */
    chunks?: string[];

    /**
     * If a navigation request for a URL ending in `/` fails to match a precached
     * URL, this value will be appended to the URL and that will be checked for
     * a precache match. This should be set to what your web server is using for
     * its directory index.
     *
     * @default 'index.html'
     */
    directoryIndex?: string;

    /**
     * Assets that match this will be assumed to be uniquely versioned via their
     * URL, and exempted from the normal HTTP cache-busting that's done when
     * populating the precache. While not required, it's recommended that if your
     * existing build process already inserts a `[hash]` value into each filename,
     * you provide a RegExp that will detect that, as it will reduce the bandwidth
     * consumed when precaching.
     */
    dontCacheBustURLsMatching?: RegExp;

    /**
     * One or more specifiers used to exclude assets from the precache manifest.
     * This is interpreted following [the same rules](https://webpack.js.org/configuration/module/#condition)
     * as `webpack`'s standard `exclude` option.
     *
     * @default [/\.map$/, /^manifest.*\.js$]
     */
    exclude?: Array<string | RegExp | ((path: string) => boolean)>;

    /**
     * One or more chunk names whose corresponding output files should be excluded
     * from the precache manifest.
     */
    excludeChunks?: string[];

    /**
     * Any search parameter names that match against one of the RegExp in this array
     * will be removed before looking for a precache match. This is useful if your
     * users might request URLs that contain, for example, URL parameters used to
     * track the source of the traffic.
     *
     * @default [/^utm_/]
     */
    ignoreURLParametersMatching?: RegExp[];

    /**
     * A list of JavaScript files that should be passed to [`importScripts()`](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts)
     * inside the generated service worker file. This is  useful when you want to
     * let Workbox create your top-level service worker file, but want to include
     * some additional code, such as a push event listener.
     */
    importScripts?: string[];

    /**
     * One or more names of webpack chunks. The content of those chunks will be included
     * in the generated service worker, via a call to `importScripts()`.
     */
    importScriptsViaChunks?: string[];

    /**
     * One or more specifiers used to include assets in the precache manifest.
     * This is interpreted following
     * [the same rules](https://webpack.js.org/configuration/module/#condition)
     * as `webpack`'s standard `include` option.
     */
    include?: Array<string | RegExp | ((path: string) => boolean)>;

    /**
     * Whether the runtime code for the Workbox library should be included in the
     * top-level service worker, or split into a separate file that needs to be
     * deployed alongside the service worker. Keeping the runtime separate means
     * that users will not have to re-download the Workbox code each time your
     * top-level service worker changes.
     *
     * @default false
     */
    inlineWorkboxRuntime?: boolean;

    /**
     * One or more functions which will be applied sequentially against the
     * generated manifest. If `modifyURLPrefix` or `dontCacheBustURLsMatching` are
     * also specified, their corresponding transformations will be applied first.
     */
    manifestTransforms?: ManifestTransform;

    /**
     * This value can be used to determine the maximum size of files that will be
     * precached. This prevents you from inadvertently precaching very large files
     * that might have accidentally matched one of your patterns.
     *
     * @default 2097152
     */
    maximumFileSizeToCacheInBytes?: number;

    /**
     * If set to 'production', then an optimized service worker bundle that excludes
     * debugging info will be produced. If not explicitly configured here, the `mode`
     * value configured in the current `webpack` compiltion will be used.
     */
    mode?: string;

    /**
     * A mapping of prefixes that, if present in an entry in the precache manifest,
     * will be replaced with the corresponding value. This can be used to, for example,
     * remove or add a path prefix from a manifest entry if your web hosting setup
     * doesn't match your local filesystem setup. As an alternative with more flexibility,
     * you can use the `manifestTransforms` option and provide a function that modifies
     * the entries in the manifest using whatever logic you provide.
     */
    modifyURLPrefix?: {
        [key: string]: string;
    };

    /**
     * If specified, all [navigation requests](https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests)
     * for URLs that aren't precached will be fulfilled with the HTML at the URL
     * provided. You must pass in the URL of an HTML document that is listed in your
     * precache manifest. This is meant to be used in a Single Page App scenario, in
     * which you want all navigations to use common [App Shell HTML](https://developers.google.com/web/fundamentals/architecture/app-shell).
     */
    navigateFallback?: string;

    /**
     * An optional array of regular expressions that restricts which URLs the configured
     * `navigateFallback` behavior applies to. This is useful if only a subset of
     * your site's URLs should be treated as being part of a
     * [Single Page App](https://en.wikipedia.org/wiki/Single-page_application). If
     * both `navigateFallbackDenylist` and `navigateFallbackAllowlist` are
     * configured, the denylist takes precedent.
     */
    navigateFallbackDenylist?: RegExp[];

    /**
     * An optional array of regular expressions that restricts which URLs the configured
     * `navigateFallback` behavior applies to. This is useful if only a subset of
     * your site's URLs should be treated as being part of a
     * [Single Page App](https://en.wikipedia.org/wiki/Single-page_application). If
     * both `navigateFallbackDenylist` and `navigateFallbackAllowlist` are
     * configured, the denylist takes precedent.
     */
    navigateFallbackAllowlist?: RegExp[];

    /**
     * Whether or not to enable [navigation preload](https://developers.google.com/web/tools/workbox/modules/workbox-navigation-preload)
     * in the generated service worker. When set to true, you must also use
     * `runtimeCaching` to set up an appropriate response strategy that will match
     * navigation requests, and make use of the preloaded response.
     *
     * @default false
     */
    navigationPreload?: boolean;

    /**
     * Controls whether or not to include support for [offline Google Analytics](https://developers.google.com/web/tools/workbox/guides/enable-offline-analytics).
     * When `true`, the call to `workbox-google-analytics`'s `initialize()` will be
     * added to your generated service worker. When set to an `Object`, that object
     * will be passed in to the `initialize()` call, allowing you to customize the
     * behavior.
     *
     * @default false
     */
    offlineGoogleAnalytics?: boolean | object;

    runtimeCaching?: RuntimeCachingEntry;

    /**
     * Whether to add an unconditional call to [`skipWaiting()`](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.skipWaiting)
     * to the generated service worker. If `false`, then a `message` listener will
     * be added instead, allowing you to conditionally call `skipWaiting()`.
     *
     * @default false
     */
    skipWaiting?: boolean;

    /**
     * Whether to create a sourcemap for the generated service worker files.
     *
     * @default true
     */
    sourcemap?: boolean;

    /**
     * The asset name of the service worker file that will be created by this plugin.
     *
     * @default 'service-worker.js'
     */
    swDest?: string;
}

/**
 * The `GenerateSW` plugin will create a service worker file for you and add it to the webpack asset pipeline.
 *
 * @see https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
 */
export class GenerateSW {
    constructor(config?: GenerateSWConfig);
    apply(...args: any[]): void;
}
