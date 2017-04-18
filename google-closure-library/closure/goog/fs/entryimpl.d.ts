declare module goog {
    function require(name: 'goog.fs.EntryImpl'): typeof goog.fs.EntryImpl;
    function require(name: 'goog.fs.DirectoryEntryImpl'): typeof goog.fs.DirectoryEntryImpl;
    function require(name: 'goog.fs.FileEntryImpl'): typeof goog.fs.FileEntryImpl;
}

declare module goog.fs {

    /**
     * Base class for concrete implementations of goog.fs.Entry.
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!Entry} entry The underlying Entry object.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    class EntryImpl {
        constructor(fs: goog.fs.FileSystem, entry: Entry);
    }

    /**
     * A directory in a local FileSystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.FileSystem#getRoot} or
     * {@link goog.fs.DirectoryEntry#getDirectoryEntry}.
     *
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!DirectoryEntry} dir The underlying DirectoryEntry object.
     * @constructor
     * @extends {goog.fs.EntryImpl}
     * @implements {goog.fs.DirectoryEntry}
     * @final
     */
    class DirectoryEntryImpl extends goog.fs.EntryImpl {
        constructor(fs: goog.fs.FileSystem, dir: DirectoryEntry);
    }

    /**
     * A file in a local filesystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.DirectoryEntry#getFile}.
     *
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!FileEntry} file The underlying FileEntry object.
     * @constructor
     * @extends {goog.fs.EntryImpl}
     * @implements {goog.fs.FileEntry}
     * @final
     */
    class FileEntryImpl extends goog.fs.EntryImpl {
        constructor(fs: goog.fs.FileSystem, file: FileEntry);
    }
}
