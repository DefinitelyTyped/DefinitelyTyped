import * as hapi from "hapi";

declare namespace inert {
    export interface ReplyFileHandlerOptions {
        /** confine - serve file relative to this directory and returns 403 Forbidden if the path resolves outside the confine directory. Defaults to true which uses the relativeTo route option as the confine. Set to false to disable this security feature. */
        confine?: boolean | undefined;
        /** filename - an optional filename to specify if sending a 'Content-Disposition' header, defaults to the basename of path */
        filename?: string | undefined;
        /**
         * mode - specifies whether to include the 'Content-Disposition' header with the response. Available values:
         *  * false - header is not included. This is the default value.
         *  * 'attachment'
         *  *'inline'
         */
        mode?: false | "attachment" | "inline" | undefined;
        /** lookupCompressed - if true, looks for for a pre-compressed version of the file with the same filename with an extension, depending on the accepted encoding. Defaults to false. */
        lookupCompressed?: boolean | undefined;
        /** lookupMap - an object which maps content encoding to expected file name extension. Defaults to `{ gzip: '.gz' }. */
        lookupMap?: { [index: string]: string } | undefined;
        /**
         * etagMethod - specifies the method used to calculate the ETag header response. Available values:
         *  * 'hash' - SHA1 sum of the file contents, suitable for distributed deployments. Default value.
         *  * 'simple' - Hex encoded size and modification date, suitable when files are stored on a single server.
         *  * false - Disable ETag computation.
         */
        etagMethod?: "hash" | "simple" | false | undefined;
        /** start - offset in file to reading from, defaults to 0. */
        start?: number | undefined;
        /** end - offset in file to stop reading from. If not set, will read to end of file. */
        end?: number | undefined;
    }

    export interface FileHandlerRouteObject extends ReplyFileHandlerOptions {
        /** path - a path string or function as described above (required). */
        path: string | hapi.RequestHandler<string>;
    }

    export interface DirectoryHandlerRouteObject {
        /** path - (required) the directory root path (relative paths are resolved based on the route files configuration). Value can be:
         *  * a single path string used as the prefix for any resources requested by appending the request path parameter to the provided string.
         *  * an array of path strings. Each path will be attempted in order until a match is found (by following the same process as the single path string).
         *  * a function with the signature function(request) which returns the path string or an array of path strings. If the function returns an error, the error is passed back to the client in the response.
         */
        path: string | string[] | hapi.RequestHandler<string | string[] | Error>;
        /** index - optional boolean|string|string[], determines if an index file will be served if found in the folder when requesting a directory. The given string or strings specify the name(s) of the index file to look for. If true, looks for 'index.html'. Any falsy value disables index file lookup. Defaults to true. */
        index?: boolean | string | string[] | undefined;
        /** listing - optional boolean, determines if directory listing is generated when a directory is requested without an index document. Defaults to false. */
        listing?: boolean | undefined;
        /** showHidden - optional boolean, determines if hidden files will be shown and served. Defaults to false. */
        showHidden?: boolean | undefined;
        /** redirectToSlash - optional boolean, determines if requests for a directory without a trailing slash are redirected to the same path with the missing slash. Useful for ensuring relative links inside the response are resolved correctly. Disabled when the server config router.stripTrailingSlash is true.Defaults to false. */
        redirectToSlash?: boolean | undefined;
        /** lookupCompressed - optional boolean, instructs the file processor to look for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false. */
        lookupCompressed?: boolean | undefined;
        /**
         * etagMethod - specifies the method used to calculate the ETag header response. Available values:
         *  * 'hash' - SHA1 sum of the file contents, suitable for distributed deployments. Default value.
         *  * 'simple' - Hex encoded size and modification date, suitable when files are stored on a single server.
         *  * false - Disable ETag computation.
         */
        etagMethod?: "hash" | "simple" | false | undefined;
        /** defaultExtension - optional string, appended to file requests if the requested file is not found. Defaults to no extension. */
        defaultExtension?: string | undefined;
    }

    /**
     * inert accepts the following registration options
     * @see {@link https://github.com/hapijs/inert#registration-options}
     */
    interface OptionalRegistrationOptions {
        /**
         * sets the maximum number of file etag hash values stored in the etags cache. Defaults to 10000.
         */
        etagsCacheMaxSize?: number | undefined;
    }
}

declare module "hapi" {
    interface RouteHandlerPlugins {
        /**
         * The file handler
         *
         * Generates a static file endpoint for serving a single file. file can be set to:
         *  * a relative or absolute file path string (relative paths are resolved based on the route files configuration).
         *  * a function with the signature function(request) which returns the relative or absolute file path.
         *  * an object with one or more of the following options @see IFileHandler
         * @see {@link https://github.com/hapijs/inert#the-file-handler}
         */
        file?: string | RequestHandler<string> | inert.FileHandlerRouteObject | undefined;
        /**
         * The directory handler
         *
         * Generates a directory endpoint for serving static content from a directory. Routes using the directory handler must include a path parameter at the end of the path string (e.g. /path/to/somewhere/{param} where the parameter name does not matter). The path parameter can use any of the parameter options (e.g. {param} for one level files only, {param?} for one level files or the directory root, {param*} for any level, or {param*3} for a specific level). If additional path parameters are present, they are ignored for the purpose of selecting the file system resource. The directory handler is an object with the following options:
         * @see {@link https://github.com/hapijs/inert#the-directory-handler}
         */
        directory?: inert.DirectoryHandlerRouteObject | undefined;
    }

    interface Base_Reply {
        /**
         * Transmits a file from the file system. The 'Content-Type' header defaults to the matching mime type based on filename extension.
         * @see {@link https://github.com/hapijs/inert#replyfilepath-options}
         */
        file: (path: string, options?: inert.ReplyFileHandlerOptions) => Response;
    }
}

declare var inert: hapi.PluginFunction<inert.OptionalRegistrationOptions>;

export = inert;
