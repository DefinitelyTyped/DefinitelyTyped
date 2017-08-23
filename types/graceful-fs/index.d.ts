// Type definitions for graceful-fs 4.1
// Project: https://github.com/cowboy/graceful-fs
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'graceful-fs' {
    import * as nodeFs from 'fs';

    export = gracefulFs;

    const gracefulFs: gracefulFs & typeof nodeFs;

    interface gracefulFs {
        gracefulify<T>(fsModule: T): T & typeof nodeFs;
    }
}

declare module 'fs' {
    import { URL } from 'url';

    /**
     * Asynchronously change file timestamps of the file referenced by the supplied path.
     * If path refers to a symbolic link, then the link is not dereferenced: instead, the timestamps
     * of the symbolic link are changed.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param atime The last access time. If a string is provided, it will be coerced to number.
     * @param mtime The last modified time. If a string is provided, it will be coerced to number.
     */
    function lutimes(
        path: string | Buffer | URL,
        atime: string | number | Date,
        mtime: string | number | Date,
        callback?: (err: NodeJS.ErrnoException | null) => void
    ): void;

    // NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
    namespace lutimes {
        /**
         * Asynchronously change file timestamps of the file referenced by the supplied path.
         * If path refers to a symbolic link, then the link is not dereferenced: instead, the timestamps
         * of the symbolic link are changed.
         * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
         * @param atime The last access time. If a string is provided, it will be coerced to number.
         * @param mtime The last modified time. If a string is provided, it will be coerced to number.
         */
        function __promisify__(path: string | Buffer | URL, atime: string | number | Date, mtime: string | number | Date): Promise<void>;
    }

    /**
     * Synchronously change file timestamps of the file referenced by the supplied path.
     * If path refers to a symbolic link, then the link is not dereferenced: instead, the timestamps
     * of the symbolic link are changed.
     * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
     * @param atime The last access time. If a string is provided, it will be coerced to number.
     * @param mtime The last modified time. If a string is provided, it will be coerced to number.
     */
    function lutimesSync(path: string | Buffer | URL, atime: string | number | Date, mtime: string | number | Date): void;
}
