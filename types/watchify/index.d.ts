import Browserify = require("browserify");

declare module "browserify" {
    interface BrowserifyObject extends NodeJS.EventEmitter {
        /**
         * When the bundle changes, emit the array of bundle ids that changed.
         */
        on(event: "update", listener: (ids: string[]) => any): this;
        /**
         * When a bundle is generated, this event fires with the number of bytes
         */
        on(event: "bytes", listener: (bytes: number) => any): this;
        /**
         * When a bundle is generated, this event fires with the time it took to create the bundle in milliseconds.
         */
        on(event: "time", listener: (time: number) => any): this;
        /**
         * This event fires after a bundle was created with messages of the form:
         * ```text
         * X bytes written (Y seconds)
         * ```
         * with the number of bytes in the bundle X and the time in seconds Y.
         */
        on(event: "log", listener: (msg: string) => any): this;
    }
}

declare var Watchify: Watchify.Constructor;

/**
 * Watch mode for browserify builds.
 * Update any source file and your browserify bundle will be recompiled on the spot
 */
declare namespace Watchify {
    /**
     * Watch mode for browserify builds.
     * Update any source file and your browserify bundle will be recompiled on the spot
     */
    interface Constructor {
        args: { cache: any; packageCache: any };

        <T extends Browserify.BrowserifyObject>(b: T, opts?: Options): T;
        (b: Browserify.BrowserifyObject, opts?: Options): Browserify.BrowserifyObject;

        /** Close all the open watch handles. */
        close(): void;
    }

    interface Options {
        /**
         * The amount of time in milliseconds to wait before emitting an "update" event after a change.
         * @default 100
         */
        delay?: number | undefined;

        /**
         * Ignores monitoring files for changes. If set to `true`, then ** /node_modules/ ** will be ignored.
         * For other possible values see Chokidar's documentation on "ignored"
         * Also see anymatch package: https://github.com/es128/anymatch#usage
         */
        ignoreWatch?:
            | boolean
            | (
                | string
                | RegExp
                | ((...values: any[]) => boolean)
                | Array<string | RegExp | ((...values: any[]) => boolean)>
            )
            | undefined;

        /**
         * Enables polling to monitor for changes. If set to `true`, then a polling interval of 100 ms is used.
         * If set to a number, then that amount of milliseconds will be the polling interval. For more info see
         * Chokidar's documentation on "usePolling" and "interval".
         * This option is useful if you're watching an NFS volume
         * Also see chokidar package: https://github.com/paulmillr/chokidar#path-filtering
         */
        poll?: boolean | number | undefined;
    }
}

export = Watchify;
