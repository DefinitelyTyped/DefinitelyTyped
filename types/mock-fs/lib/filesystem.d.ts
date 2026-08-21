import Item = require("./item");
import File = require("./file");
import Directory = require("./directory");
import SymbolicLink = require("./symlink");

export = FileSystem;

declare class FileSystem {
    /**
     * Create a new file system.
     *
     * @param options Any filesystem options.
     * @param options.createCwd Create a directory for `process.cwd()` (defaults
     *                          to `true`).
     * @param options.createTmp Create a directory for `os.tmpdir()` (defaults
     *                          to `true`).
     */
    constructor(options?: FileSystem.Options);

    /** Get the root directory. */
    getRoot(): Directory;

    /**
     * Get a file system item.
     *
     * @param filepath Path to item.
     * @return The item (or null if not found).
     */
    getItem(filepath: string): Item;

    /**
     * Configure a mock file system.
     *
     * @param paths Config object.
     * @param options Any filesystem options.
     * @param options.createCwd Create a directory for `process.cwd()` (defaults
     *                          to `true`).
     * @param options.createTmp Create a directory for `os.tmpdir()` (defaults
     *                          to `true`).
     * @return Mock file system.
     */
    static create(paths?: FileSystem.DirectoryItems, options?: FileSystem.Options): FileSystem;

    /**
     * Generate a factory for new files.
     *
     * @param config File config.
     * @return Factory that creates a new file.
     */
    static file(config?: FileSystem.FileOptions): () => File;

    /**
     * Generate a factory for new symbolic links.
     *
     * @param config File config.
     * @return Factory that creates a new symbolic link.
     */
    static directory(config?: FileSystem.DirectoryOptions): () => Directory;

    /**
     * Generate a factory for new directories.
     *
     * @param config File config.
     * @return Factory that creates a new directory.
     */
    static symlink(config: FileSystem.SymlinkOptions): () => SymbolicLink;
}

declare namespace FileSystem {
    type DirectoryItem =
        | string
        | Buffer
        | (() => File)
        | (() => Directory)
        | (() => SymbolicLink)
        | DirectoryItems;

    interface DirectoryItems {
        [name: string]: DirectoryItem;
    }

    interface Options {
        /**
         * Create a directory for `process.cwd()`. This is `true` by default.
         */
        createCwd?: boolean | undefined;
        /**
         * Create a directory for `os.tmpdir()`. This is `true` by default.
         */
        createTmp?: boolean | undefined;
    }

    interface FileOptions {
        /** File contents */
        content?: string | Buffer | undefined;
        /** File mode (permission and sticky bits). Defaults to `0666`. */
        mode?: number | undefined;
        /** The user id. Defaults to `process.getuid()`. */
        uid?: number | undefined;
        /** The group id. Defaults to `process.getgid()`. */
        gid?: number | undefined;
        /**
         * The last file access time. Defaults to `new Date()`. Updated when
         * file contents are accessed.
         */
        atime?: Date | undefined;
        /**
         * The last file change time. Defaults to `new Date()`. Updated when
         * file owner or permissions change.
         */
        ctime?: Date | undefined;
        /**
         * The last file modification time. Defaults to `new Date()`. Updated
         * when file contents change.
         */
        mtime?: Date | undefined;
        /**
         * The time of file creation. Defaults to `new Date()`.
         */
        birthtime?: Date | undefined;
    }

    interface DirectoryOptions {
        /** Directory mode (permission and sticky bits). Defaults to `0777`. */
        mode?: number | undefined;
        /** The user id. Defaults to `process.getuid()`. */
        uid?: number | undefined;
        /** The group id. Defaults to `process.getgid()`. */
        gid?: number | undefined;
        /**
         * The last directory access time. Defaults to `new Date()`.
         */
        atime?: Date | undefined;
        /**
         * The last directory change time. Defaults to `new Date()`. Updated
         * when owner or permissions change.
         */
        ctime?: Date | undefined;
        /**
         * The last directory modification time. Defaults to `new Date()`.
         * Updated when an item is added, removed, or renamed.
         */
        mtime?: Date | undefined;
        /**
         * The time of directory creation. Defaults to `new Date()`.
         */
        birthtime?: Date | undefined;
        /**
         * Directory contents. Members will generate additional files,
         * directories, or symlinks.
         */
        items?: DirectoryItems | undefined;
    }

    interface SymlinkOptions {
        /** Path to the source (required). */
        path: string;
        /** Symlink mode (permission and sticky bits). Defaults to `0666`. */
        mode?: number | undefined;
        /** The user id. Defaults to `process.getuid()`. */
        uid?: number | undefined;
        /** The group id. Defaults to `process.getgid()`. */
        gid?: number | undefined;
        /** The last symlink access time. Defaults to `new Date()`. */
        atime?: Date | undefined;
        /** The last symlink change time. Defaults to `new Date()`. */
        ctime?: Date | undefined;
        /** The last symlink modification time. Defaults to `new Date()`. */
        mtime?: Date | undefined;
        /** The time of symlink creation. Defaults to `new Date()`. */
        birthtime?: Date | undefined;
    }

    interface LoaderOptions {
        /** File content isn't loaded until explicitly read. */
        lazy?: boolean | undefined;
        /** Load all files and directories recursively. */
        recursive?: boolean | undefined;
    }

    function getPathParts(filepath: string): string[];
}
