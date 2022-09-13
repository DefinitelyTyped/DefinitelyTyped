// Type definitions for parse-filepath 1.0
// Project: https://github.com/jonschlinkert/parse-filepath
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parseFilepath;

/**
 * Pollyfill for node.js `path.parse()`, parses a filepath into an object.
 *
 * @param filepath
 */
declare function parseFilepath(filepath: string): parseFilepath.ParsedPath;

declare namespace parseFilepath {
    interface ParsedPath {
        /**
         * The root of the path such as `'/'` or `'c:\'`
         */
        root: string;
        /**
         * The full directory path such as `'/home/user/dir'` or `'c:\path\dir'`
         */
        dir: string;
        /**
         * The file name including extension (if any) such as `'index.html'`
         */
        base: string;
        /**
         * The file extension (if any) such as `'.html'`
         */
        ext: string;
        /**
         * The file name without extension (if any) such as `'index'`
         */
        name: string;

        /**
         * alias for `ext`
         */
        extname: string;
        /**
         * alias for `base`
         */
        basename: string;
        /**
         * alias for `dir`
         */
        dirname: string;
        /**
         * alias for `name`
         */
        stem: string;

        /**
         * the original filepath
         */
        path: string;

        /**
         * fully resolved, absolute filepath
         */
        absolute: string;
        /**
         * `true` if the given path is absolute
         */
        isAbsolute: boolean;
    }
}
