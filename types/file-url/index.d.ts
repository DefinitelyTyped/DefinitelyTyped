// Type definitions for file-url 2.0
// Project: https://github.com/sindresorhus/file-url
// Definitions by: coderslagoon <https://github.com/coderslagoon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
  Original typings for 1.0 were provided by
  "MEDIA CHECK s.r.o. <http://www.mediacheck.cz/>",
  Did not pass the tslint check, hence mentioning it here.
*/

/**
 * Options for the fileUrl() API.
 */
interface FileUrlOptions {
    /**
     * Passing false will make it not call path.resolve() on the path.
     */
    resolve?: boolean;
}

/**
 * Convert a path to a file URL.
 * @param path  File path to convert.
 * @param options  Options to use.
 * @return  File URL.
 */
declare function fileUrl(path: string, options?: FileUrlOptions): string;

/**
 * Convert a path to a file URL.
 */
export = fileUrl;
