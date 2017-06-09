// Type definitions for File API: Writer
// Project: http://www.w3.org/TR/file-writer-api/
// Definitions by: Kon <http://phyzkit.net/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This interface provides methods to monitor the asynchronous writing of blobs to disk using progress events [PROGRESS-EVENTS] and event handler attributes.
 * This interface is specified to be used within the context of the global object (Window [HTML5]) and within Web Workers (WorkerUtils [WEBWORKERS-ED]).
 */
interface FileSaver extends EventTarget {
    /**
     * When the abort method is called, user agents must run the steps below:
     * <ol>
     * <li> If readyState == DONE or readyState == INIT, terminate this overall series of steps without doing anything else. </li>
     * <li> Set readyState to DONE. </li>
     * <li> If there are any tasks from the object's FileSaver task source in one of the task queues, then remove those tasks. </li>
     * <li> Terminate the write algorithm being processed. </li>
     * <li> Set the error attribute to a DOMError object of type "AbortError". </li>
     * <li> Fire a progress event called abort </li>
     * <li> Fire a progress event called writeend </li>
     * <li> Terminate this algorithm. </li>
     * </ol>
     */
    abort(): void;

    /**
     * The blob is being written.
     * @readonly
     */
    INIT: number;

    /**
     * The object has been constructed, but there is no pending write.
     * @readonly
     */
    WRITING: number;

    /**
     * The entire Blob has been written to the file, an error occurred during the write, or the write was aborted using abort(). The FileSaver is no longer writing the blob.
     * @readonly
     */
    DONE: number;

    /**
     * The FileSaver object can be in one of 3 states. The readyState attribute, on getting, must return the current state, which must be one of the following values:
     * <ul>
     * <li>INIT</li>
     * <li>WRITING</li>
     * <li>DONE</li>
     * <ul>
     * @readonly
     */
    readyState: number;

    /**
     * The last error that occurred on the FileSaver.
     * @readonly
     */
    error: Error;

    /**
     * Handler for writestart events
     */
    onwritestart: (event: ProgressEvent) => void;

    /**
     * Handler for progress events.
     */
    onprogress: (event: ProgressEvent) => void;

    /**
     * Handler for write events.
     */
    onwrite: (event: ProgressEvent) => void;

    /**
     * Handler for abort events.
     */
    onabort: (event: ProgressEvent) => void;

    /**
     * Handler for error events.
     */
    onerror: (event: ProgressEvent) => void;

    /**
     * Handler for writeend events.
     */
    onwriteend: (event: ProgressEvent) => void;
}

declare var FileSaver: {
    /**
     * When the FileSaver constructor is called, the user agent must return a new FileSaver object with readyState set to INIT.
     * This constructor must be visible when the script's global object is either a Window object or an object implementing the WorkerUtils interface.
     */
    new(data:Blob): FileSaver;
}

/**
 * This interface expands on the FileSaver interface to allow for multiple write actions, rather than just saving a single Blob.
 */
interface FileWriter extends FileSaver {
    /**
     * The byte offset at which the next write to the file will occur. This must be no greater than length.
     * A newly-created FileWriter must have position set to 0.
     */
    position:number;

    /**
     * The length of the file. If the user does not have read access to the file, this must be the highest byte offset at which the user has written.
     */
    length:number;

    /**
     * Write the supplied data to the file at position.
     * @param data The blob to write.
     */
    write(data:Blob):void;

    /**
     * Seek sets the file position at which the next write will occur.
     * @param offset If nonnegative, an absolute byte offset into the file. If negative, an offset back from the end of the file.
     */
    seek(offset:number):void;

    /**
     * Changes the length of the file to that specified. If shortening the file, data beyond the new length must be discarded. If extending the file, the existing data must be zero-padded up to the new length.
     * @param size The size to which the length of the file is to be adjusted, measured in bytes.
     */
    truncate(size:number):void;
}

/**
 * This interface lets users write, truncate, and append to files using simple synchronous calls.
 * This interface is specified to be used only within Web Workers (WorkerUtils [WEBWORKERS]).
 */
interface FileWriterSync {
    /**
     * The byte offset at which the next write to the file will occur. This must be no greater than length.
     */
    position:number;

    /**
     * The length of the file. If the user does not have read access to the file, this must be the highest byte offset at which the user has written.
     */
    length:number;

    /**
     * Write the supplied data to the file at position. Upon completion, position will increase by data.size.
     * @param data The blob to write.
     */
    write(data:Blob):void;

    /**
     * Seek sets the file position at which the next write will occur.
     * @param offset An absolute byte offset into the file. If offset is greater than length, length is used instead. If offset is less than zero, length is added to it, so that it is treated as an offset back from the end of the file. If it is still less than zero, zero is used.
     */
    seek(offset:number):void;

    /**
     * Changes the length of the file to that specified. If shortening the file, data beyond the new length must be discarded. If extending the file, the existing data must be zero-padded up to the new length.
     * Upon successful completion:
     * <ul>
     *     <li>length must be equal to size.</li>
     *     <li>position must be the lesser of
     *          <ul>
     *              <li>its pre-truncate value,</li>
     *              <li>size.</li>
     *          </ul>
     *      </li>
     *  </ul>
     * @param size The size to which the length of the file is to be adjusted, measured in bytes.
     */
    truncate(size:number):void;
}
