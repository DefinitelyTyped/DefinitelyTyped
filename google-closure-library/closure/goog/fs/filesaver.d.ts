declare module goog {
    function require(name: 'goog.fs.FileSaver'): typeof goog.fs.FileSaver;
    function require(name: 'goog.fs.FileSaver.ReadyState'): typeof goog.fs.FileSaver.ReadyState;
    function require(name: 'goog.fs.FileSaver.EventType'): typeof goog.fs.FileSaver.EventType;
}

declare module goog.fs {

    /**
     * An object for monitoring the saving of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileSaver.EventType}.
     *
     * This should not be instantiated directly. Instead, its subclass
     * {@link goog.fs.FileWriter} should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     *
     * @param {!FileSaver} fileSaver The underlying FileSaver object.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileSaver extends goog.events.EventTarget {
        constructor(fileSaver: FileSaver);
        
        /**
         * Abort the writing of the file.
         */
        abort(): void;
        
        /**
         * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
        
        /**
         * @return {goog.fs.Error} The error encountered while writing, if any.
         */
        getError(): goog.fs.Error;
    }
}

declare module goog.fs.FileSaver {

    /**
     * Possible states for a FileSaver.
     *
     * @enum {number}
     */
    type ReadyState = number;
    var ReadyState: {
        INIT: ReadyState;
        WRITING: ReadyState;
        DONE: ReadyState;
    };

    /**
     * Events emitted by a FileSaver.
     *
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        WRITE_START: EventType;
        PROGRESS: EventType;
        WRITE: EventType;
        ABORT: EventType;
        ERROR: EventType;
        WRITE_END: EventType;
    };
}
