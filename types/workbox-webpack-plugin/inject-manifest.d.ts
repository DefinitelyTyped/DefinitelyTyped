import { ManifestEntry, ManifestTransform } from 'workbox-build';

export interface InjectManifestConfig {
    /**
     * An existing service worker file that will be compiled and have a precache
     * manifest injected into it.
     */
    swSrc: string;

    /**
     * A list of entries to be precached, in addition to any entries that are
     * generated as part of the build configuration.
     *
     * @default true
     */
    additionalManifestEntries?: ManifestEntry[];

    /**
     * One or more chunk names whose corresponding output files should be included in the precache manifest.
     */
    chunks?: string[];

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
     * One or more names of webpack chunks. The content of those chunks will be included
     * in the generated service worker, via a call to `importScripts()`.
     */
    importScriptsViaChunks?: string[];

    /**
     * One or more chunk names whose corresponding output files should be excluded
     * from the precache manifest.
     */
    excludeChunks?: string[];

    /**
     * One or more specifiers used to include assets in the precache manifest.
     * This is interpreted following
     * [the same rules](https://webpack.js.org/configuration/module/#condition)
     * as `webpack`'s standard `include` option.
     */
    include?: Array<string | RegExp | ((path: string) => boolean)>;

    /**
     * The string to find inside of the `swSrc` file. Once found, it will be replaced by
     * the generated precache manifest.
     *
     * @default 'self.__WB_MANIFEST'
     */
    injectionPoint?: string;

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
     * The asset name of the service worker file that will be created by this plugin.
     *
     * @default 'service-worker.js'
     */
    swDest?: string;

    /**
     * Optional `webpack` plugins that will be used when compiling the `swSrc` input file.
     */
    webpackCompilationPlugins?: object[];
}

/**
 * The `InjectManifest` plugin will generate a list of URLs to precache and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.
 *
 * @see https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
 */
export class InjectManifest {
    constructor(config?: InjectManifestConfig);
    apply(...args: any[]): void;
}
