declare namespace path {
    /**
     * Represents a file path as an object with components.
     */
    interface PathObject {
        /**
         * The root portion of the path.
         */
        root: string;
        /**
         * The directory portion of the path.
         */
        dir: string;
        /**
         * The base name of the file, including the extension.
         */
        base: string;
        /**
         * The file extension including the dot.
         */
        ext: string;
        /**
         * The file name without the extension.
         */
        name: string;
    }

    /**
     * Provides methods and properties for handling and transforming file paths.
     */
    interface Path {
        /**
         * Resolves a sequence of paths or path segments into an absolute path.
         *
         * @param pathSegments - The sequence of path segments to resolve.
         * @returns The resolved absolute path.
         */
        resolve(this: void, ...pathSegments: string[]): string;

        /**
         * Normalizes a path, resolving '..' and '.' segments.
         *
         * @param path - The path to normalize.
         * @returns The normalized path.
         */
        normalize(this: void, path: string): string;

        /**
         * Determines if a path is absolute.
         *
         * @param path - The path to check.
         * @returns `true` if the path is absolute, `false` otherwise.
         */
        isAbsolute(this: void, path: string): boolean;

        /**
         * Joins multiple path segments into a single path.
         *
         * @param paths - The path segments to join.
         * @returns The joined path.
         */
        join(this: void, ...paths: string[]): string;

        /**
         * Returns the relative path from one path to another.
         *
         * @param from - The starting path.
         * @param to - The destination path.
         * @returns The relative path from `from` to `to`.
         */
        relative(this: void, from: string, to: string): string;

        /**
         * Returns the directory name of a path.
         *
         * @param path - The path to get the directory name from.
         * @returns The directory name of the path.
         */
        dirname(this: void, path: string): string;

        /**
         * Returns the base name of a file, optionally removing the file extension.
         *
         * @param path - The path to get the base name from.
         * @param ext - An optional extension to remove from the base name.
         * @returns The base name of the file.
         */
        basename(this: void, path: string, ext?: string): string;

        /**
         * Returns the file extension of a path.
         *
         * @param path - The path to get the extension from.
         * @returns The file extension of the path.
         */
        extname(this: void, path: string): string;

        /**
         * Formats a path object into a path string.
         *
         * @param pathObject - The path object to format.
         * @returns The formatted path string.
         */
        format(this: void, pathObject: Partial<PathObject>): string;

        /**
         * Parses a path string into a path object.
         *
         * @param path - The path string to parse.
         * @returns The parsed path object.
         */
        parse(this: void, path: string): PathObject;

        /**
         * The platform-specific path segment separator.
         */
        readonly sep: string;

        /**
         * The platform-specific path delimiter.
         */
        readonly delimiter: string;

        /**
         * Provides methods for handling Windows paths (always `null`).
         */
        readonly win32: null;

        /**
         * Provides methods for handling POSIX paths.
         */
        readonly posix: Path;
    }
}
/**
 * Provides path-related utilities for handling and transforming file paths.
 */
declare const path: path.Path;
export = path;
