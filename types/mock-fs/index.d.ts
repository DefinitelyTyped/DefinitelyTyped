// Type definitions for mock-fs 4.10
// Project: https://github.com/tschaub/mock-fs
// Definitions by: Wim Looman <https://github.com/Nemo157>,
//                 Qubo <https://github.com/tkqubo>,
//                 Porama Ruengrairatanaroj <https://github.com/Seally>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import FileSystem = require('./lib/filesystem');
import File = require('./lib/file');
import Directory = require('./lib/directory');
import SymbolicLink = require('./lib/symlink');

export = mock;

/**
 * Swap out the fs bindings for a mock file system.
 *
 * _Note:_ Import this file _before_ any other modules that import the `fs`
 * module.
 *
 * @param config Mock file system configuration.
 * @param options Any filesystem options.
 * @param options.createCwd Create a directory for `process.cwd()` (defaults to
 *                          `true`).
 * @param options.createTmp Create a directory for `os.tmpdir()` (defaults to
 *                          `true`).
 */
declare function mock(config?: FileSystem.DirectoryItems, options?: FileSystem.Options): void;

declare namespace mock {
    /**
     * Get hold of the mocked filesystem's 'root'
     * If fs hasn't currently been replaced, this will return an empty object
     */
    function getMockRoot(): Directory | {};

    /**
     * Restore the fs bindings for the real file system.
     */
    function restore(): void;

    /**
     * Create a file factory.
     */
    function file(config?: FileSystem.FileOptions): () => File;
    /**
     * Create a directory factory.
     */
    function directory(config?: FileSystem.DirectoryOptions): () => Directory;
    /**
     * Create a symbolic link factory.
     */
    function symlink(config: FileSystem.SymlinkOptions): () => SymbolicLink;
}
