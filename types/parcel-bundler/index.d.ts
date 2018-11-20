// Type definitions for parcel-bundler 1.10
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: pinage404 <https://github.com/pinage404>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace ParcelBundler {
    interface ParcelOptions {
        /**
         * The out directory to put the build files in
         *
         * @default "./dist"
         */
        outDir?: string;
        /**
         * The name of the outputFile
         *
         * @default "index.html"
         */
        outFile?: string;
        /**
         * The url to server on
         *
         * @default "./"
         */
        publicUrl?: string;
        /**
         * Whether to watch the files and rebuild them on change
         *
         * @default process.env.NODE_ENV !== 'production'
         */
        watch?: boolean;
        /**
         * Enabled or disables caching
         *
         * @default true
         */
        cache?: boolean;
        /**
         * The directory cache gets put in
         *
         * @default ".cache"
         */
        cacheDir?: string;
        /**
         * Disable content hash from being included on the filename
         *
         * @default false
         */
        contentHash?: boolean;
        /**
         * Minify files
         *
         * @default process.env.NODE_ENV === 'production'
         */
        minify?: boolean;
        /**
         * Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
         *
         * @default false
         */
        scopeHoist?: boolean;
        /**
         * @default "browser"
         */
        target?: "browser" | "node" | "electron";
        /**
         * Define a custom {key, cert} pair
         *
         * Use true to generate one or false to use http
         */
        https?:
            | true
            | false
            | {
                  /**
                   * Path to custom certificate
                   *
                   * @default "./ssl/c.crt"
                   */
                  cert?: string;
                  /**
                   * Path to custom key
                   *
                   * @default "./ssl/k.key"
                   */
                  key?: string;
              };
        /**
         * 3 = log everything, 2 = log warnings & errors, 1 = log errors
         *
         * @default 3
         */
        logLevel?: 3 | 2 | 1;
        /**
         * The port the HMR socket runs on
         *
         * Defaults to a random free port (0 in node.js resolves to a random free port)
         *
         * @default 0
         */
        hmrPort?: 0 | number;
        /**
         * Enable or disable sourcemaps
         *
         * Defaults to enabled (not supported in minified builds yet)
         *
         * @default true
         */
        sourceMaps?: boolean;
        /**
         * A hostname for hot module reload
         *
         * @default ""
         */
        hmrHostname?: string;
        /**
         * Prints a detailed report of the bundles, assets, filesizes and times
         *
         * Reports are only printed if watch is disabled
         *
         * @default false
         */
        detailedReport?: boolean;
    }

    type ParcelAsset = any;

    interface ParcelBundle {
        /**
         * The type of assets it contains (e.g. js, css, map, ...)
         */
        type: string;
        /**
         * The name of the bundle (generated using Asset.generateBundleName() of entryAsset)
         */
        name: string;
        /**
         * The parent bundle, is null in case of the entry bundleany
         */
        parentBundle?: any;
        /**
         * The entryPoint of the bundle, used for generating the name and gathering assets.
         */
        entryAsset: any;
        /**
         * A Set of all assets inside the bundle
         */
        assets: Set<any>;
        /**
         * A Set of all sibling bundles
         */
        siblingBundles: Set<any>;
        /**
         * A Map<String(Type: js, css, map, ...), Bundle> of all sibling bundles
         */
        siblingBundlesMap: Map<string, ParcelBundle>;
        /**
         * A Map<Asset, number(line number inside the bundle)> of all the locations of the assets inside the bundle, used to generate accurate source maps
         */
        offsets: Map<ParcelAsset, number>;
    }
}

declare class ParcelBundler {
    constructor(
        entryFiles?: string | string[],
        options?: ParcelBundler.ParcelOptions
    );

    addAssetType(extension: string, path: string): void;

    addPackager(type: string, packager: string): void;

    bundle(): Promise<ParcelBundler.ParcelBundle>;
}

export = ParcelBundler;
