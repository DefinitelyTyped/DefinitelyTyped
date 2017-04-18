declare module goog {
    function require(name: 'goog.fs.FileSystemImpl'): typeof goog.fs.FileSystemImpl;
}

declare module goog.fs {

    /**
     * A local filesystem.
     *
     * This shouldn't be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.getTemporary} or {@link goog.fs.getPersistent}.
     *
     * @param {!FileSystem} fs The underlying FileSystem object.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    class FileSystemImpl {
        constructor(fs: FileSystem);
        
        /**
         * @return {!FileSystem} The underlying FileSystem object.
         */
        getBrowserFileSystem(): FileSystem;
    }
}
