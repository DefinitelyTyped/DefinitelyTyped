declare module goog {
    function require(name: 'goog.fs.FileWriter'): typeof goog.fs.FileWriter;
}

declare module goog.fs {

    /**
     * An object for monitoring the saving of files, as well as other fine-grained
     * writing operations.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     *
     * @param {!FileWriter} writer The underlying FileWriter object.
     * @constructor
     * @extends {goog.fs.FileSaver}
     * @final
     */
    class FileWriter extends goog.fs.FileSaver {
        constructor(writer: FileWriter);
        
        /**
         * @return {number} The byte offset at which the next write will occur.
         */
        getPosition(): number;
        
        /**
         * @return {number} The length of the file.
         */
        getLength(): number;
        
        /**
         * Write data to the file.
         *
         * @param {!Blob} blob The data to write.
         */
        write(blob: Blob): void;
        
        /**
         * Set the file position at which the next write will occur.
         *
         * @param {number} offset An absolute byte offset into the file.
         */
        seek(offset: number): void;
        
        /**
         * Changes the length of the file to that specified.
         *
         * @param {number} size The new size of the file, in bytes.
         */
        truncate(size: number): void;
    }
}
