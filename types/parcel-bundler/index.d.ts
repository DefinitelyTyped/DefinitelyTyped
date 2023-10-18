import * as express from "express-serve-static-core";
import * as http from "http";
import * as https from "https";

declare namespace ParcelBundler {
    interface HttpsOptions {
        /**
         * Path to custom certificate
         *
         * @default "./ssl/c.crt"
         */
        cert?: string | undefined;
        /**
         * Path to custom key
         *
         * @default "./ssl/k.key"
         */
        key?: string | undefined;
    }

    interface ParcelOptions {
        /**
         * The out directory to put the build files in
         *
         * @default "./dist"
         */
        outDir?: string | undefined;
        /**
         * The name of the outputFile
         *
         * @default "index.html"
         */
        outFile?: string | undefined;
        /**
         * The url to server on
         *
         * @default "./"
         */
        publicUrl?: string | undefined;
        /**
         * Whether to watch the files and rebuild them on change
         *
         * @default process.env.NODE_ENV !== 'production'
         */
        watch?: boolean | undefined;
        /**
         * Enabled or disables caching
         *
         * @default true
         */
        cache?: boolean | undefined;
        /**
         * The directory cache gets put in
         *
         * @default ".cache"
         */
        cacheDir?: string | undefined;
        /**
         * Disable content hash from being included on the filename
         *
         * @default false
         */
        contentHash?: boolean | undefined;
        /**
         * Minify files
         *
         * @default process.env.NODE_ENV === 'production'
         */
        minify?: boolean | undefined;
        /**
         * Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
         *
         * @default false
         */
        scopeHoist?: boolean | undefined;
        /**
         * @default "browser"
         */
        target?: "browser" | "node" | "electron" | undefined;
        /**
         * Define a custom {key, cert} pair
         *
         * Use true to generate one or false to use http
         */
        https?:
            | true
            | false
            | HttpsOptions
            | undefined;
        /**
         * 3 = log everything, 2 = log warnings & errors, 1 = log errors
         *
         * @default 3
         */
        logLevel?: 3 | 2 | 1 | undefined;
        /**
         * The port the HMR socket runs on
         *
         * Defaults to a random free port (0 in node.js resolves to a random free port)
         *
         * @default 0
         */
        hmrPort?: 0 | number | undefined;
        /**
         * Enable or disable sourcemaps
         *
         * Defaults to enabled (not supported in minified builds yet)
         *
         * @default true
         */
        sourceMaps?: boolean | undefined;
        /**
         * A hostname for hot module reload
         *
         * @default ""
         */
        hmrHostname?: string | undefined;
        /**
         * Prints a detailed report of the bundles, assets, filesizes and times
         *
         * Reports are only printed if watch is disabled
         *
         * @default false
         */
        detailedReport?: boolean | undefined;

        /**
         * Expose modules as UMD under this name, disabled by default
         */
        global?: string | undefined;

        /**
         * By default, package.json dependencies are not included when using 'node' or 'electron' with the 'target' option.
         *
         * Set to true to add them to the bundle.
         *
         * @default false
         */
        bundleNodeModules?: true | false | undefined;

        /**
         * Enable or disable HMR while watching
         *
         * @default false
         */
        hmr?: true | false | undefined;

        /**
         * Enable or disable auto install of missing dependencies found during bundling
         *
         * @default true
         */
        autoInstall?: boolean | undefined;
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

        /**
         * A Set of all child bundles
         */
        childBundles: Set<any>;
    }
}

declare class ParcelBundler {
    constructor(
        entryFiles?: string | string[],
        options?: ParcelBundler.ParcelOptions,
    );

    addAssetType(extension: string, path: string): void;

    addPackager(type: string, packager: string): void;

    bundle(): Promise<ParcelBundler.ParcelBundle>;

    middleware(): (req: express.Request, res: express.Response, next: express.NextFunction) => any;

    serve(
        port?: number,
        https?: true | false | ParcelBundler.HttpsOptions,
        host?: string,
    ): Promise<http.Server | https.Server>;

    on(name: "buildEnd", cb: () => void): void;
    on(name: "bundled", cb: (bundle: ParcelBundler.ParcelBundle) => void): void;
    on(name: "buildStart", cb: (entryPoints: string[]) => void): void;
    on(name: "buildError", cb: (error: Error) => void): void;

    off(name: "buildEnd" | "bundled" | "buildStart" | "buildError", cb: (...any: any[]) => void): void;
}

export = ParcelBundler;
