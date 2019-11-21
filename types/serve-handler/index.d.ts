// Type definitions for serve-handler 6.1
// Project: https://github.com/zeit/serve-handler#readme
// Definitions by: simonhaenisch <https://github.com/simonhaenisch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { lstat, realpath, createReadStream, readdir } from 'fs';
import { IncomingMessage, ServerResponse } from 'http';

export = serveHandler;

/**
 * This package represents the core of `serve`. It can be plugged into any HTTP
 * server and is responsible for routing requests and handling responses.
 *
 * In order to customize the default behaviour, you can also pass custom routing
 * rules, provide your own methods for interacting with the file system and much
 * more.
 */
declare function serveHandler(
    request?: IncomingMessage,
    response?: ServerResponse,
    /**
     * If you want to customize the package's default behaviour, you can use
     * this argument to pass any of the configuration options provided.
     *
     * @see https://github.com/zeit/serve-handler#options
     */
    config?: Config,
    /**
     * If you want to replace the methods the package is using for interacting
     * with the file system and sending responses, you can pass them as the
     * fourth argument to the function call. These are the methods used by the
     * package (they can all return a `Promise` or be asynchronous).
     *
     * **NOTE:** It's important that – for native methods like
     * `createReadStream` – all arguments are passed on to the native call.
     */
    methods?: Methods,
): Promise<void>;

interface Config {
    /**
     * #### Set a sub directory to be served.
     *
     * By default, the current working directory will be served. If you only
     * want to serve a specific path, you can use this options to pass an
     * absolute path or a custom directory to be served relative to the current
     * working directory.
     *
     * **NOTE:** The path cannot contain globs or regular expressions.
     */
    public?: string;

    /**
     * #### Have the `.html` extension stripped from paths.
     *
     * By default, all `.html` files can be accessed without their extension.
     * If one of these extensions is used at the end of a filename, it will
     * automatically perform a redirect with status code `301` to the same path,
     * but with the extension dropped. You can disable the feature by setting
     * this to `false`.
     *
     * However, you can also restrict it to certain paths by passing an array of
     * strings (**NOTE:** the paths can only contain globs that are matched
     * using `minimatch`).
     */
    cleanUrls?: boolean | string[];

    /**
     * #### Rewrite paths to different paths.
     *
     * If you want your visitors to receive a response under a certain path, but
     * actually serve a completely different one behind the curtains, this
     * option is what you need.
     *
     * **NOTE:** The paths can contain globs (matched using `minimatch`) or
     * regular expressions (match using `path-to-regexp`).
     */
    rewrites?: Rewrite[];

    /**
     * #### Forward paths to different paths or external URLs.
     *
     * In order to redirect visits to a certain path to a different one (or even
     * an external URL), you can use this option. By default, all of them are
     * performed with the status code `301`, but this behavior can be adjusted
     * by setting the `type` property directly on the object.
     *
     * **NOTE:** The paths can contain globs (matched using `minimatch`) or
     * regular expressions (match using `path-to-regexp`).
     */
    redirects?: Redirect[];

    /**
     * #### Set custom headers for specific paths.
     *
     * Allows you to set custom headers (and overwrite the default ones) for
     * certain paths. If you define the `ETag` header for a path, the handler
     * will automatically reply with status code `304` for that path if a
     * request comes in with a matching `If-None-Match` header. If you set a
     * header `value` to `null` it removes any previous defined header with the
     * same key.
     *
     * **NOTE:** The paths can only contain globs that are matched using `minimatch`.
     */
    headers?: Header[];

    /**
     * ### Disable directory listing or restrict it to certain paths.
     *
     * For paths are not files, but directories, the package will automatically
     * render a good-looking list of all the files and directories contained
     * inside that directory. If you'd like to disable this for all paths, set
     * this option to `false`. Furthermore, you can also restrict it to certain
     * directory paths if you want, by passing an array of strings.
     *
     * **NOTE:** The paths can only contain globs that are matched using `minimatch`.
     */
    directoryListing?: boolean | string[];

    /**
     * #### Exclude paths from the directory listing.
     *
     * In certain cases, you might not want a file or directory to appear in the
     * directory listing. In these situations, there are two ways of solving
     * this problem. Either you disable the directory listing entirely, or you
     * exclude certain paths from those listings by adding them all to this
     * config property.
     *
     * **NOTE:** The paths can only contain globs that are matched using `minimatch`.
     */
    unlisted?: string[];

    /**
     * #### Remove or add trailing slashes to all paths.
     *
     * By default, the package will try to make assumptions for when to add
     * trailing slashes to your URLs or not. If you want to remove them, set
     * this property to `false` and `true` if you want to force them on all
     * URLs.
     */
    trailingSlash?: boolean;

    /**
     * #### If a directory only contains one file, render it.
     *
     * Sometimes you might want to have a directory path actually render a file,
     * if the directory only contains one. This is only useful for any files
     * that are not `.html` files (for those, `cleanUrls` is faster). This is
     * disabled by default and can be enabled by setting this option to `true`.
     * After that, if you access your directory `/test` (for example), you will
     * see an image being rendered if the directory contains a single image
     * file.
     */
    renderSingle?: boolean;

    /**
     * #### Resolve symlinks instead of rendering a 404 error.
     *
     * For security purposes, symlinks are disabled by default. If serve-handler
     * encounters a symlink, it will treat it as if it doesn't exist in the
     * first place. In turn, a 404 error is rendered for that path. However,
     * this behavior can easily be adjusted by setting this option to `true`.
     * Once this property is set, all symlinks will automatically be resolved to
     * their targets.
     */
    symlinks?: boolean;

    /**
     * #### Calculate a strong `ETag` response header, instead of `Last-Modified`.
     *
     * HTTP response headers will contain a strong `ETag` response header,
     * instead of a `Last-Modified` header. Opt-in because calculating the hash
     * value may be computationally expensive for large files.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified
     */
    etag?: boolean;
}

interface Rewrite {
    source: string;
    destination: string;
}

interface Redirect extends Rewrite {
    type: number;
}

interface Header {
    source: string;
    headers: Array<{
        key: string;
        value: string;
    }>;
}

interface Methods {
    lstat?: typeof lstat;
    realpath?: typeof realpath;
    createReadStream?: typeof createReadStream;
    readdir?: typeof readdir;
    sendError?: SendErrorHandler;
}

type SendErrorHandler = (
    absolutePath?: string,
    response?: ServerResponse,
    acceptsJSON?: boolean,
    current?: string,
    handlers?: Methods,
    config?: Config,
    spec?: any,
) => Promise<void>;
