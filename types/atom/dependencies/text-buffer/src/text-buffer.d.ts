import { ReadStream, WriteStream } from 'fs';
import {
    Disposable,
    FileSavedEvent,
    HandleableErrorEvent,
    HistoryTransactionOptions,
    HistoryTraversalOptions,
    TextEditOptions,
} from '../../../index';
import {
    FindMarkerOptions,
    Marker,
    MarkerLayer,
    Point,
    PointCompatible,
    Range,
    RangeCompatible,
    TextChange,
} from './text-buffer';

export * from './display-marker';
export * from './display-marker-layer';
export * from './helpers';
export * from './marker';
export * from './marker-layer';
export * from './point';
export * from './range';

/**
 *  A mutable text container with undo/redo support and the ability to
 *  annotate logical regions in the text.
 */
export class TextBuffer {
    /** The unique identifier for this buffer. */
    readonly id: string;

    /** The number of retainers for the buffer. */
    readonly refcount: number;

    /** Whether or not the bufffer has been destroyed. */
    readonly destroyed: boolean;

    /** Create a new buffer backed by the given file path. */
    static load(filePath: string | TextBufferFileBackend, params?: BufferLoadOptions): Promise<TextBuffer>;

    /**
     *  Create a new buffer backed by the given file path. For better performance,
     *  use TextBuffer.load instead.
     */
    static loadSync(filePath: string, params?: BufferLoadOptions): TextBuffer;

    /**
     *  Restore a TextBuffer based on an earlier state created using the
     *  TextBuffer::serialize method.
     */
    static deserialize(params: object): Promise<TextBuffer>;

    /** Create a new buffer with the given starting text. */
    constructor(text: string);
    /** Create a new buffer with the given params. */
    constructor(params?: {
        /** The initial string text of the buffer. */
        text?: string;
        /**
         *  A function that returns a Boolean indicating whether the buffer should
         *  be destroyed if its file is deleted.
         */
        shouldDestroyOnFileDelete?(): boolean;
    });

    /** Returns a plain javascript object representation of the TextBuffer. */
    serialize(options?: { markerLayers?: boolean; history?: boolean }): object;

    /** Returns the unique identifier for this buffer. */
    getId(): string;

    // Event Subscription
    /**
     *  Invoke the given callback synchronously before the content of the buffer
     *  changes.
     */
    onWillChange(callback: (event: BufferChangingEvent) => void): Disposable;

    /**
     *  Invoke the given callback synchronously when the content of the buffer
     *  changes. You should probably not be using this in packages.
     */
    onDidChange(callback: (event: BufferChangedEvent) => void): Disposable;

    /**
     *  Invoke the given callback synchronously when a transaction finishes with
     *  a list of all the changes in the transaction.
     */
    onDidChangeText(callback: (event: BufferStoppedChangingEvent) => void): Disposable;

    /**
     *  Invoke the given callback asynchronously following one or more changes after
     *  ::getStoppedChangingDelay milliseconds elapse without an additional change.
     */
    onDidStopChanging(callback: (event: BufferStoppedChangingEvent) => void): Disposable;

    /**
     *  Invoke the given callback when the in-memory contents of the buffer become
     *  in conflict with the contents of the file on disk.
     */
    onDidConflict(callback: () => void): Disposable;

    /** Invoke the given callback if the value of ::isModified changes. */
    onDidChangeModified(callback: (modified: boolean) => void): Disposable;

    /**
     *  Invoke the given callback when all marker ::onDidChange observers have been
     *  notified following a change to the buffer.
     */
    onDidUpdateMarkers(callback: () => void): Disposable;

    onDidCreateMarker(callback: (marker: Marker) => void): Disposable;

    /** Invoke the given callback when the value of ::getPath changes. */
    onDidChangePath(callback: (path: string) => void): Disposable;

    /** Invoke the given callback when the value of ::getEncoding changes. */
    onDidChangeEncoding(callback: (encoding: string) => void): Disposable;

    /**
     *  Invoke the given callback before the buffer is saved to disk. If the
     *  given callback returns a promise, then the buffer will not be saved until
     *  the promise resolves.
     */
    onWillSave(callback: () => Promise<void> | void): Disposable;

    /** Invoke the given callback after the buffer is saved to disk. */
    onDidSave(callback: (event: FileSavedEvent) => void): Disposable;

    /** Invoke the given callback after the file backing the buffer is deleted. */
    onDidDelete(callback: () => void): Disposable;

    /**
     *  Invoke the given callback before the buffer is reloaded from the contents
     *  of its file on disk.
     */
    onWillReload(callback: () => void): Disposable;

    /**
     *  Invoke the given callback after the buffer is reloaded from the contents
     *  of its file on disk.
     */
    onDidReload(callback: () => void): Disposable;

    /** Invoke the given callback when the buffer is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when there is an error in watching the file. */
    onWillThrowWatchError(callback: (errorObject: HandleableErrorEvent) => void): Disposable;

    /**
     *  Get the number of milliseconds that will elapse without a change before
     *  ::onDidStopChanging observers are invoked following a change.
     */
    getStoppedChangingDelay(): number;

    // File Details
    /**
     *  Determine if the in-memory contents of the buffer differ from its contents
     *  on disk.
     *  If the buffer is unsaved, always returns true unless the buffer is empty.
     */
    isModified(): boolean;

    /**
     *  Determine if the in-memory contents of the buffer conflict with the on-disk
     *  contents of its associated file.
     */
    isInConflict(): boolean;

    /** Get the path of the associated file. */
    getPath(): string | undefined;

    /** Set the path for the buffer's associated file. */
    setPath(filePath: string): void;

    /** Experimental: Set a custom {TextBufferFileBackend} object as the buffer's backing store. */
    setFile(fileBackend: TextBufferFileBackend): void;

    /** Sets the character set encoding for this buffer. */
    setEncoding(encoding: string): void;

    /** Returns the string encoding of this buffer. */
    getEncoding(): string;

    /** Get the path of the associated file. */
    getUri(): string;

    // Reading Text
    /** Determine whether the buffer is empty. */
    isEmpty(): boolean;

    /**
     *  Get the entire text of the buffer. Avoid using this unless you know that
     *  the buffer's text is reasonably short.
     */
    getText(): string;

    /** Get the text in a range. */
    getTextInRange(range: RangeCompatible): string;

    /** Get the text of all lines in the buffer, without their line endings. */
    getLines(): string[];

    /** Get the text of the last line of the buffer, without its line ending. */
    getLastLine(): string;

    /**
     *  Get the text of the line at the given 0-indexed row, without its line ending.
     *  @param row A number representing the row.
     */
    lineForRow(row: number): string | undefined;

    /** Get the line ending for the given 0-indexed row. */
    lineEndingForRow(row: number): string | undefined;

    /**
     *  Get the length of the line for the given 0-indexed row, without its line
     *  ending.
     */
    lineLengthForRow(row: number): number;

    /** Determine if the given row contains only whitespace. */
    isRowBlank(row: number): boolean;

    /**
     *  Given a row, find the first preceding row that's not blank.
     *  Returns a number or null if there's no preceding non-blank row.
     */
    previousNonBlankRow(startRow: number): number | null;

    /**
     *  Given a row, find the next row that's not blank.
     *  Returns a number or null if there's no next non-blank row.
     */
    nextNonBlankRow(startRow: number): number | null;

    /**
     *  Return true if the buffer contains any astral-plane Unicode characters that
     *  are encoded as surrogate pairs.
     */
    hasAstral(): boolean;

    // Mutating Text
    /** Replace the entire contents of the buffer with the given text. */
    setText(text: string): Range;

    /**
     *  Replace the current buffer contents by applying a diff based on the
     *  given text.
     */
    setTextViaDiff(text: string): void;

    /** Set the text in the given range. */
    setTextInRange(range: RangeCompatible, text: string, options?: TextEditOptions): Range;

    /** Insert text at the given position. */
    insert(position: PointCompatible, text: string, options?: TextEditOptions): Range;

    /** Append text to the end of the buffer. */
    append(text: string, options?: TextEditOptions): Range;

    /** Delete the text in the given range. */
    delete(range: RangeCompatible): Range;

    /**
     *  Delete the line associated with a specified 0-indexed row.
     *  @param row A number representing the row to delete.
     */
    deleteRow(row: number): Range;

    /**
     *  Delete the lines associated with the specified 0-indexed row range.
     *
     *  If the row range is out of bounds, it will be clipped. If the `startRow`
     *  is greater than the `endRow`, they will be reordered.
     */
    deleteRows(startRow: number, endRow: number): Range;

    // Markers
    /** Create a layer to contain a set of related markers. */
    addMarkerLayer(options?: { maintainHistory?: boolean; persistent?: boolean; role?: string }): MarkerLayer;

    /**
     *  Get a MarkerLayer by id.
     *  Returns a MarkerLayer or undefined if no layer exists with the given id.
     */
    getMarkerLayer(id: string): MarkerLayer | undefined;

    /** Get the default MarkerLayer. */
    getDefaultMarkerLayer(): MarkerLayer;

    /** Create a marker with the given range in the default marker layer. */
    markRange(
        range: RangeCompatible,
        properties?: {
            reversed?: boolean;
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
            exclusive?: boolean;
        },
    ): Marker;

    /** Create a marker at the given position with no tail in the default marker layer. */
    markPosition(
        position: PointCompatible,
        options?: {
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
            exclusive?: boolean;
        },
    ): Marker;

    /** Get all existing markers on the default marker layer. */
    getMarkers(): Marker[];

    /** Get an existing marker by its id from the default marker layer. */
    getMarker(id: number): Marker;

    /** Find markers conforming to the given parameters in the default marker layer. */
    findMarkers(params: FindMarkerOptions): Marker[];

    /** Get the number of markers in the default marker layer. */
    getMarkerCount(): number;

    // History
    /**
     *  Undo the last operation. If a transaction is in progress, aborts it.
     *  @return A boolean of whether or not a change was made.
     */
    undo(options?: HistoryTraversalOptions): boolean;

    /**
     *  Redo the last operation.
     *  @return A boolean of whether or not a change was made.
     */
    redo(options?: HistoryTraversalOptions): boolean;

    /** Batch multiple operations as a single undo/redo step. */
    transact<T>(
        optionsOrInterval: number | ({ groupingInterval?: number } & HistoryTransactionOptions),
        fn: () => T,
    ): T;
    /** Batch multiple operations as a single undo/redo step. */
    transact<T>(fn: () => T): T;

    /**
     *  Abort the currently running transaction.
     *
     *  Only intended to be called within the `fn` option to `::transact`.
     */
    abortTransaction(): void;

    /** Clear the undo stack. */
    clearUndoStack(): void;

    /**
     *  Create a pointer to the current state of the buffer for use with
     *  `::revertToCheckpoint` and `::groupChangesSinceCheckpoint`.
     *  @return A checkpoint ID value.
     */
    createCheckpoint(options?: HistoryTransactionOptions): number;

    /**
     *  Revert the buffer to the state it was in when the given checkpoint was created.
     *  @return A boolean indicating whether the operation succeeded.
     */
    revertToCheckpoint(checkpoint: number, options?: HistoryTraversalOptions): boolean;

    /**
     *  Group all changes since the given checkpoint into a single transaction for
     *  purposes of undo/redo.
     *  @return A boolean indicating whether the operation succeeded.
     */
    groupChangesSinceCheckpoint(checkpoint: number, options?: HistoryTransactionOptions): boolean;

    /**
     *  Group the last two text changes for purposes of undo/redo.
     *
     *  This operation will only succeed if there are two changes on the undo stack.
     *  It will not group past the beginning of an open transaction.
     *  @return A boolean indicating whether the operation succeeded.
     */
    groupLastChanges(): boolean;

    /**
     *  Returns a list of changes since the given checkpoint.
     *  If the given checkpoint is no longer present in the undo history, this method
     *  will return an empty Array.
     */
    getChangesSinceCheckpoint(
        checkpoint: number,
    ): Array<{
        /** A Point representing where the change started. */
        start: Point;

        /** A Point representing the replaced extent. */
        oldExtent: Point;

        /** A Point representing the replacement extent. */
        newExtent: Point;

        /** A String representing the replacement text. */
        newText: string;
    }>;

    // Search and Replace
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     */
    scan(regex: RegExp, iterator: (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     */
    scan(regex: RegExp, options: ScanContextOptions, iterator: (params: ContextualBufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in the entire buffer in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScan(regex: RegExp, iterator: (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in the entire buffer in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScan(
        regex: RegExp,
        options: ScanContextOptions,
        iterator: (params: ContextualBufferScanResult) => void,
    ): void;

    /**
     *  Scan regular expression matches in a given range , calling the given
     *  iterator function on each match.
     */
    scanInRange(regex: RegExp, range: RangeCompatible, iterator: (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in a given range , calling the given
     *  iterator function on each match.
     */
    scanInRange(
        regex: RegExp,
        range: RangeCompatible,
        options: ScanContextOptions,
        iterator: (params: ContextualBufferScanResult) => void,
    ): void;

    /**
     *  Scan regular expression matches in a given range in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScanInRange(regex: RegExp, range: RangeCompatible, iterator: (params: BufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in a given range in reverse order,
     *  calling the given iterator function on each match.
     */
    backwardsScanInRange(
        regex: RegExp,
        range: RangeCompatible,
        options: ScanContextOptions,
        iterator: (params: ContextualBufferScanResult) => void,
    ): void;

    /** Replace all regular expression matches in the entire buffer. */
    replace(regex: RegExp, replacementText: string): number;

    // Buffer Range Details
    /** Get the range spanning from [0, 0] to ::getEndPosition. */
    getRange(): Range;

    /** Get the number of lines in the buffer. */
    getLineCount(): number;

    /** Get the last 0-indexed row in the buffer. */
    getLastRow(): number;

    /** Get the first position in the buffer, which is always [0, 0]. */
    getFirstPosition(): Point;

    /** Get the maximal position in the buffer, where new text would be appended. */
    getEndPosition(): Point;

    /** Get the length of the buffer's text. */
    getLength(): number;

    /** Get the length of the buffer in characters. */
    getMaxCharacterIndex(): number;

    /**
     *  Get the range for the given row.
     *  @param row A number representing a 0-indexed row.
     *  @param includeNewline A boolean indicating whether or not to include the
     *  newline, which results in a range that extends to the start of the next line.
     *  (default: false)
     */
    rangeForRow(row: number, includeNewline?: boolean): Range;

    /**
     *  Convert a position in the buffer in row/column coordinates to an absolute
     *  character offset, inclusive of line ending characters.
     */
    characterIndexForPosition(position: PointCompatible): number;

    /**
     *  Convert an absolute character offset, inclusive of newlines, to a position
     *  in the buffer in row/column coordinates.
     */
    positionForCharacterIndex(offset: number): Point;

    /** Clip the given range so it starts and ends at valid positions. */
    clipRange(range: RangeCompatible): Range;

    /** Clip the given point so it is at a valid position in the buffer. */
    clipPosition(position: PointCompatible): Point;

    // Buffer Operations
    /** Save the buffer. */
    save(): Promise<void>;

    /** Save the buffer at a specific path. */
    saveAs(filePath: string): Promise<void>;

    /** Reload the buffer's contents from disk. */
    reload(): void;

    /** Destroy the buffer, even if there are retainers for it. */
    destroy(): void;

    /** Returns whether or not this buffer is alive. */
    isAlive(): boolean;

    /** Returns whether or not this buffer has been destroyed. */
    isDestroyed(): boolean;

    /** Returns whether or not this buffer has a retainer. */
    isRetained(): boolean;

    /**
     *  Places a retainer on the buffer, preventing its destruction until the
     *  final retainer has called ::release().
     */
    retain(): TextBuffer;

    /**
     *  Releases a retainer on the buffer, destroying the buffer if there are
     *  no additional retainers.
     */
    release(): TextBuffer;

    /** Identifies if the buffer belongs to multiple editors. */
    hasMultipleEditors(): boolean;
}

export interface TextBufferFileBackend {
    /** A {Function} that returns the {String} path to the file. */
    getPath(): string;

    /**
     *  A {Function} that returns a `Readable` stream
     *  that can be used to load the file's content.
     */
    createReadStream(): ReadStream;

    /**
     *  A {Function} that returns a `Writable` stream
     *  that can be used to save content to the file.
     */
    createWriteStream(): WriteStream;

    /** A {Function} that returns a {Boolean}, true if the file exists, false otherwise. */
    existsSync(): boolean;

    /**
     *  A {Function} that invokes its callback argument
     *  when the file changes. The method should return a {Disposable} that
     *  can be used to prevent further calls to the callback.
     */
    onDidChange?(callback: () => void): Disposable;

    /**
     *  A {Function} that invokes its callback argument
     *  when the file is deleted. The method should return a {Disposable} that
     *  can be used to prevent further calls to the callback.
     */
    onDidDelete?(callback: () => void): Disposable;
    /**
     *  A {Function} that invokes its callback argument
     *  when the file is renamed. The method should return a {Disposable} that
     *  can be used to prevent further calls to the callback.
     */
    onDidRename?(callback: () => void): Disposable;
}

export interface BufferChangingEvent {
    /** Range of the old text. */
    oldRange: Range;
}

export interface BufferChangedEvent {
    /**
     *  An array of objects summarizing the aggregated changes that occurred
     *  during the transaction.
     */
    changes: Array<{
        /**
         *  The Range of the deleted text in the contents of the buffer as it existed
         *  before the batch of changes reported by this event.
         */
        oldRange: Range;

        /** The Range of the inserted text in the current contents of the buffer. */
        newRange: Range;
    }>;

    /** Range of the old text. */
    oldRange: Range;

    /** Range of the new text. */
    newRange: Range;

    /** String containing the text that was replaced. */
    oldText: string;

    /** String containing the text that was inserted. */
    newText: string;
}

export interface BufferStoppedChangingEvent {
    changes: TextChange[];
}

export interface BufferLoadOptions {
    /** The file's encoding. */
    encoding?: string;

    /**
     *  A function that returns a boolean indicating whether the buffer should
     *  be destroyed if its file is deleted.
     */
    shouldDestroyOnFileDelete?(): boolean;
}

export interface BufferScanResult {
    buffer: TextBuffer;
    lineText: string;
    match: RegExpExecArray;
    matchText: string;
    range: Range;
    replace(replacementText: string): void;
    stop(): void;
    stopped: boolean;
}

export interface ContextualBufferScanResult extends BufferScanResult {
    leadingContextLines: string[];
    trailingContextLines: string[];
}

export interface ScanContextOptions {
    /** The number of lines before the matched line to include in the results object. */
    leadingContextLineCount?: number;

    /** The number of lines after the matched line to include in the results object. */
    trailingContextLineCount?: number;
}
