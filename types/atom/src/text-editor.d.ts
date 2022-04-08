import {
    BufferScanResult,
    BufferStoppedChangingEvent,
    ContextualBufferScanResult,
    Cursor,
    CursorPositionChangedEvent,
    Decoration,
    DecorationLayerOptions,
    DecorationOptions,
    DisplayMarker,
    DisplayMarkerLayer,
    Disposable,
    EditorChangedEvent,
    FindDisplayMarkerOptions,
    Grammar,
    Gutter,
    GutterOptions,
    LayerDecoration,
    MarkerLayer,
    Point,
    PointCompatible,
    Range,
    RangeCompatible,
    RangeLike,
    ReadonlyEditOptions,
    ScanContextOptions,
    ScopeDescriptor,
    Selection,
    SelectionChangedEvent,
    TextBuffer,
    TextEditOptions,
    TextInsertionOptions,
} from '../index';

/**
 *  This class represents all essential editing state for a single TextBuffer,
 *  including cursor and selection positions, folds, and soft wraps.
 */
export class TextEditor {
    readonly id: number;

    // NOTE: undocumented within the public API. Don't go down the rabbit hole.
    constructor(options?: object);

    // Event Subscription
    /** Calls your callback when the buffer's title has changed. */
    onDidChangeTitle(callback: (title: string) => void): Disposable;

    /** Calls your callback when the buffer's path, and therefore title, has changed. */
    onDidChangePath(callback: (path: string) => void): Disposable;

    /**
     *  Invoke the given callback synchronously when the content of the buffer
     *  changes.
     */
    onDidChange(callback: (event: EditorChangedEvent[]) => void): Disposable;

    /**
     *  Invoke callback when the buffer's contents change. It is emit
     *  asynchronously 300ms after the last buffer change. This is a good place
     *  to handle changes to the buffer without compromising typing performance.
     */
    onDidStopChanging(callback: (event: BufferStoppedChangingEvent) => void): Disposable;

    /**
     *  Calls your callback when a Cursor is moved. If there are multiple cursors,
     *  your callback will be called for each cursor.
     */
    onDidChangeCursorPosition(callback: (event: CursorPositionChangedEvent) => void): Disposable;

    /** Calls your callback when a selection's screen range changes. */
    onDidChangeSelectionRange(callback: (event: SelectionChangedEvent) => void): Disposable;

    /** Invoke the given callback after the buffer is saved to disk. */
    onDidSave(callback: (event: { path: string }) => void): Disposable;

    /** Invoke the given callback when the editor is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Retrieves the current TextBuffer. */
    getBuffer(): TextBuffer;

    /** Sets the read-only state for the editor. */
    setReadOnly(readonly: boolean): void;

    /** Whether or not this editor is in read-only mode. */
    isReadOnly(): boolean;

    /**
     *  Calls your callback when a Gutter is added to the editor. Immediately calls
     *  your callback for each existing gutter.
     */
    observeGutters(callback: (gutter: Gutter) => void): Disposable;

    /** Calls your callback when a Gutter is added to the editor. */
    onDidAddGutter(callback: (gutter: Gutter) => void): Disposable;

    /** Calls your callback when a Gutter is removed from the editor. */
    onDidRemoveGutter(callback: (name: string) => void): Disposable;

    /** Calls your callback when soft wrap was enabled or disabled. */
    onDidChangeSoftWrapped(callback: (softWrapped: boolean) => void): Disposable;

    /** Calls your callback when the buffer's encoding has changed. */
    onDidChangeEncoding(callback: (encoding: string) => void): Disposable;

    /**
     *  Calls your callback when the grammar that interprets and colorizes the text
     *  has been changed. Immediately calls your callback with the current grammar.
     */
    observeGrammar(callback: (grammar: Grammar) => void): Disposable;

    /**
     *  Calls your callback when the grammar that interprets and colorizes the text
     *  has been changed.
     */
    onDidChangeGrammar(callback: (grammar: Grammar) => void): Disposable;

    /** Calls your callback when the result of ::isModified changes. */
    onDidChangeModified(callback: (modified: boolean) => void): Disposable;

    /**
     *  Calls your callback when the buffer's underlying file changes on disk at a
     *  moment when the result of ::isModified is true.
     */
    onDidConflict(callback: () => void): Disposable;

    /** Calls your callback before text has been inserted. */
    onWillInsertText(callback: (event: { text: string; cancel(): void }) => void): Disposable;

    /** Calls your callback after text has been inserted. */
    onDidInsertText(callback: (event: { text: string }) => void): Disposable;

    /**
     *  Calls your callback when a Cursor is added to the editor. Immediately calls
     *  your callback for each existing cursor.
     */
    observeCursors(callback: (cursor: Cursor) => void): Disposable;

    /** Calls your callback when a Cursor is added to the editor. */
    onDidAddCursor(callback: (cursor: Cursor) => void): Disposable;

    /** Calls your callback when a Cursor is removed from the editor. */
    onDidRemoveCursor(callback: (cursor: Cursor) => void): Disposable;

    /**
     *  Calls your callback when a Selection is added to the editor. Immediately
     *  calls your callback for each existing selection.
     */
    observeSelections(callback: (selection: Selection) => void): Disposable;

    /** Calls your callback when a Selection is added to the editor. */
    onDidAddSelection(callback: (selection: Selection) => void): Disposable;

    /** Calls your callback when a Selection is removed from the editor. */
    onDidRemoveSelection(callback: (selection: Selection) => void): Disposable;

    /**
     *  Calls your callback with each Decoration added to the editor. Calls your
     *  callback immediately for any existing decorations.
     */
    observeDecorations(callback: (decoration: Decoration) => void): Disposable;

    /** Calls your callback when a Decoration is added to the editor. */
    onDidAddDecoration(callback: (decoration: Decoration) => void): Disposable;

    /** Calls your callback when a Decoration is removed from the editor. */
    onDidRemoveDecoration(callback: (decoration: Decoration) => void): Disposable;

    /** Calls your callback when the placeholder text is changed. */
    onDidChangePlaceholderText(callback: (placeholderText: string) => void): Disposable;

    // File Details
    /**
     *  Get the editor's title for display in other parts of the UI such as the tabs.
     *  If the editor's buffer is saved, its title is the file name. If it is unsaved,
     *  its title is "untitled".
     */
    getTitle(): string;

    /**
     *  Get unique title for display in other parts of the UI, such as the window title.
     *  If the editor's buffer is unsaved, its title is "untitled" If the editor's
     *  buffer is saved, its unique title is formatted as one of the following,
     *
     *  "" when it is the only editing buffer with this file name.
     *  " — " when other buffers have this file name.
     */
    getLongTitle(): string;

    /** Returns the string path of this editor's text buffer. */
    getPath(): string | undefined;

    /** Returns boolean true if this editor has been modified. */
    isModified(): boolean;

    /** Returns boolean true if this editor has no content. */
    isEmpty(): boolean;

    /** Returns the string character set encoding of this editor's text buffer. */
    getEncoding(): string;

    /** Set the character set encoding to use in this editor's text buffer. */
    setEncoding(encoding: string): void;

    // File Operations
    /**
     *  Saves the editor's text buffer.
     *  See TextBuffer::save for more details.
     */
    save(): Promise<void>;

    /**
     *  Saves the editor's text buffer as the given path.
     *  See TextBuffer::saveAs for more details.
     */
    saveAs(filePath: string): Promise<void>;

    // Reading Text
    /** Returns a string representing the entire contents of the editor. */
    getText(): string;

    /** Get the text in the given range in buffer coordinates. */
    getTextInBufferRange(range: RangeCompatible): string;

    /** Returns a number representing the number of lines in the buffer. */
    getLineCount(): number;

    /**
     *  Returns a number representing the number of screen lines in the editor.
     *  This accounts for folds.
     */
    getScreenLineCount(): number;

    /**
     *  Returns a number representing the last zero-indexed buffer row number of
     *  the editor.
     */
    getLastBufferRow(): number;

    /**
     *  Returns a number representing the last zero-indexed screen row number of
     *  the editor.
     */
    getLastScreenRow(): number;

    /**
     *  Returns a string representing the contents of the line at the given
     *  buffer row.
     */
    lineTextForBufferRow(bufferRow: number): string;

    /**
     *  Returns a string representing the contents of the line at the given
     *  screen row.
     */
    lineTextForScreenRow(screenRow: number): string;

    /** Get the range of the paragraph surrounding the most recently added cursor. */
    getCurrentParagraphBufferRange(): Range;

    // Mutating Text
    /** Replaces the entire contents of the buffer with the given string. */
    setText(text: string, options?: ReadonlyEditOptions): void;

    /** Set the text in the given Range in buffer coordinates. */
    setTextInBufferRange(range: RangeCompatible, text: string, options?: TextEditOptions & ReadonlyEditOptions): Range;

    /* For each selection, replace the selected text with the given text. */
    insertText(text: string, options?: TextInsertionOptions & ReadonlyEditOptions): Range | false;

    /** For each selection, replace the selected text with a newline. */
    insertNewline(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete the character following
     *  the cursor. Otherwise delete the selected text.
     */
    delete(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete the character preceding
     *  the cursor. Otherwise delete the selected text.
     */
    backspace(options?: ReadonlyEditOptions): void;

    /**
     *  Mutate the text of all the selections in a single transaction.
     *  All the changes made inside the given function can be reverted with a single
     *  call to ::undo.
     */
    mutateSelectedText(fn: (selection: Selection, index: number) => void): void;

    /**
     *  For each selection, transpose the selected text.
     *  If the selection is empty, the characters preceding and following the cursor
     *  are swapped. Otherwise, the selected characters are reversed.
     */
    transpose(options?: ReadonlyEditOptions): void;

    /**
     *  Convert the selected text to upper case.
     *  For each selection, if the selection is empty, converts the containing word
     *  to upper case. Otherwise convert the selected text to upper case.
     */
    upperCase(options?: ReadonlyEditOptions): void;

    /**
     *  Convert the selected text to lower case.
     *  For each selection, if the selection is empty, converts the containing word
     *  to upper case. Otherwise convert the selected text to upper case.
     */
    lowerCase(options?: ReadonlyEditOptions): void;

    /**
     *  Toggle line comments for rows intersecting selections.
     *  If the current grammar doesn't support comments, does nothing.
     */
    toggleLineCommentsInSelection(options?: ReadonlyEditOptions): void;

    /** For each cursor, insert a newline at beginning the following line. */
    insertNewlineBelow(options?: ReadonlyEditOptions): void;

    /** For each cursor, insert a newline at the end of the preceding line. */
    insertNewlineAbove(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing word that precede the cursor. Otherwise delete the selected text.
     */
    deleteToBeginningOfWord(options?: ReadonlyEditOptions): void;

    /**
     *  Similar to ::deleteToBeginningOfWord, but deletes only back to the previous
     *  word boundary.
     */
    deleteToPreviousWordBoundary(options?: ReadonlyEditOptions): void;

    /** Similar to ::deleteToEndOfWord, but deletes only up to the next word boundary. */
    deleteToNextWordBoundary(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing subword following the cursor. Otherwise delete the selected text.
     */
    deleteToBeginningOfSubword(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing subword following the cursor. Otherwise delete the selected text.
     */
    deleteToEndOfSubword(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing line that precede the cursor. Otherwise delete the selected text.
     */
    deleteToBeginningOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is not empty, deletes the selection
     *  otherwise, deletes all characters of the containing line following the cursor.
     *  If the cursor is already at the end of the line, deletes the following newline.
     */
    deleteToEndOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, delete all characters of the
     *  containing word following the cursor. Otherwise delete the selected text.
     */
    deleteToEndOfWord(options?: ReadonlyEditOptions): void;

    /** Delete all lines intersecting selections. */
    deleteLine(options?: ReadonlyEditOptions): void;

    // History
    /** Undo the last change. */
    undo(options?: ReadonlyEditOptions): void;

    /** Redo the last change. */
    redo(options?: ReadonlyEditOptions): void;

    /**
     *  Batch multiple operations as a single undo/redo step.
     *  Any group of operations that are logically grouped from the perspective of undoing
     *  and redoing should be performed in a transaction. If you want to abort the transaction,
     *  call ::abortTransaction to terminate the function's execution and revert any changes
     *  performed up to the abortion.
     */
    transact(fn: () => void): void;
    /**
     *  Batch multiple operations as a single undo/redo step.
     *  Any group of operations that are logically grouped from the perspective of undoing
     *  and redoing should be performed in a transaction. If you want to abort the transaction,
     *  call ::abortTransaction to terminate the function's execution and revert any changes
     *  performed up to the abortion.
     */
    transact(groupingInterval: number, fn: () => void): void;

    /**
     *  Abort an open transaction, undoing any operations performed so far within the
     *  transaction.
     */
    abortTransaction(): void;

    /**
     *  Create a pointer to the current state of the buffer for use with ::revertToCheckpoint
     *  and ::groupChangesSinceCheckpoint.
     */
    createCheckpoint(): number;

    /**
     *  Revert the buffer to the state it was in when the given checkpoint was created.
     *  The redo stack will be empty following this operation, so changes since the checkpoint
     *  will be lost. If the given checkpoint is no longer present in the undo history, no
     *  changes will be made to the buffer and this method will return false.
     */
    revertToCheckpoint(checkpoint: number): boolean;

    /**
     *  Group all changes since the given checkpoint into a single transaction for purposes
     *  of undo/redo.
     *  If the given checkpoint is no longer present in the undo history, no grouping will be
     *  performed and this method will return false.
     */
    groupChangesSinceCheckpoint(checkpoint: number): boolean;

    // TextEditor Coordinates
    /** Convert a position in buffer-coordinates to screen-coordinates. */
    screenPositionForBufferPosition(
        bufferPosition: PointCompatible,
        options?: { clipDirection?: 'backward' | 'forward' | 'closest' },
    ): Point;

    /** Convert a position in screen-coordinates to buffer-coordinates. */
    bufferPositionForScreenPosition(
        bufferPosition: PointCompatible,
        options?: { clipDirection?: 'backward' | 'forward' | 'closest' },
    ): Point;

    /** Convert a range in buffer-coordinates to screen-coordinates. */
    screenRangeForBufferRange(bufferRange: RangeCompatible): Range;

    /** Convert a range in screen-coordinates to buffer-coordinates. */
    bufferRangeForScreenRange(screenRange: RangeCompatible): Range;

    /** Clip the given Point to a valid position in the buffer. */
    clipBufferPosition(bufferPosition: PointCompatible): Point;

    /**
     *  Clip the start and end of the given range to valid positions in the buffer.
     *  See ::clipBufferPosition for more information.
     */
    clipBufferRange(range: RangeCompatible): Range;

    /** Clip the given Point to a valid position on screen. */
    clipScreenPosition(
        screenPosition: PointCompatible,
        options?: { clipDirection?: 'backward' | 'forward' | 'closest' },
    ): Point;

    /**
     *  Clip the start and end of the given range to valid positions on screen.
     *  See ::clipScreenPosition for more information.
     */
    clipScreenRange(range: RangeCompatible, options?: { clipDirection?: 'backward' | 'forward' | 'closest' }): Range;

    // Decorations
    /**
     *  Add a decoration that tracks a DisplayMarker. When the marker moves, is
     *  invalidated, or is destroyed, the decoration will be updated to reflect
     *  the marker's state.
     */
    decorateMarker(marker: DisplayMarker, decorationParams: DecorationOptions): Decoration;

    /**
     *  Add a decoration to every marker in the given marker layer. Can be used to
     *  decorate a large number of markers without having to create and manage many
     *  individual decorations.
     */
    decorateMarkerLayer(
        markerLayer: MarkerLayer | DisplayMarkerLayer,
        decorationParams: DecorationLayerOptions,
    ): LayerDecoration;

    /** Get all decorations. */
    getDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'line'. */
    getLineDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'line-number'. */
    getLineNumberDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'highlight'. */
    getHighlightDecorations(propertyFilter?: DecorationOptions): Decoration[];

    /** Get all decorations of type 'overlay'. */
    getOverlayDecorations(propertyFilter?: DecorationOptions): Decoration[];

    // Markers
    /**
     *  Create a marker on the default marker layer with the given range in buffer coordinates.
     *  This marker will maintain its logical location as the buffer is changed, so if you mark
     *  a particular word, the marker will remain over that word even if the word's location
     *  in the buffer changes.
     */
    markBufferRange(
        range: RangeCompatible,
        properties?: {
            maintainHistory?: boolean;
            reversed?: boolean;
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
        },
    ): DisplayMarker;

    /**
     *  Create a marker on the default marker layer with the given range in screen coordinates.
     *  This marker will maintain its logical location as the buffer is changed, so if you mark
     *  a particular word, the marker will remain over that word even if the word's location in
     *  the buffer changes.
     */
    markScreenRange(
        range: RangeCompatible,
        properties?: {
            maintainHistory?: boolean;
            reversed?: boolean;
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
        },
    ): DisplayMarker;

    /**
     *  Create a marker on the default marker layer with the given buffer position and no tail.
     *  To group multiple markers together in their own private layer, see ::addMarkerLayer.
     */
    markBufferPosition(
        bufferPosition: PointCompatible,
        options?: {
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
        },
    ): DisplayMarker;

    /**
     *  Create a marker on the default marker layer with the given screen position and no tail.
     *  To group multiple markers together in their own private layer, see ::addMarkerLayer.
     */
    markScreenPosition(
        screenPosition: PointCompatible,
        options?: {
            invalidate?: 'never' | 'surround' | 'overlap' | 'inside' | 'touch';
            clipDirection?: 'backward' | 'forward' | 'closest';
        },
    ): DisplayMarker;

    /**
     *  Find all DisplayMarkers on the default marker layer that match the given properties.
     *
     *  This method finds markers based on the given properties. Markers can be associated
     *  with custom properties that will be compared with basic equality. In addition, there
     *  are several special properties that will be compared with the range of the markers
     *  rather than their properties.
     */
    findMarkers(properties: FindDisplayMarkerOptions): DisplayMarker[];

    /** Create a marker layer to group related markers. */
    addMarkerLayer(options?: { maintainHistory?: boolean; persistent?: boolean }): DisplayMarkerLayer;

    /** Get a DisplayMarkerLayer by id. */
    getMarkerLayer(id: number): DisplayMarkerLayer | undefined;

    /**
     *  Get the default DisplayMarkerLayer.
     *  All marker APIs not tied to an explicit layer interact with this default layer.
     */
    getDefaultMarkerLayer(): DisplayMarkerLayer;

    /** Get the DisplayMarker on the default layer for the given marker id. */
    getMarker(id: number): DisplayMarker;

    /** Get all DisplayMarkers on the default marker layer. Consider using ::findMarkers. */
    getMarkers(): DisplayMarker[];

    /** Get the number of markers in the default marker layer. */
    getMarkerCount(): number;

    // Cursors
    /** Get the position of the most recently added cursor in buffer coordinates. */
    getCursorBufferPosition(): Point;

    /** Get the position of all the cursor positions in buffer coordinates. */
    getCursorBufferPositions(): Point[];

    /**
     *  Move the cursor to the given position in buffer coordinates.
     *  If there are multiple cursors, they will be consolidated to a single cursor.
     */
    setCursorBufferPosition(position: PointCompatible, options?: { autoscroll?: boolean }): void;

    /** Get a Cursor at given screen coordinates Point. */
    getCursorAtScreenPosition(position: PointCompatible): Cursor | undefined;

    /** Get the position of the most recently added cursor in screen coordinates. */
    getCursorScreenPosition(): Point;

    /** Get the position of all the cursor positions in screen coordinates. */
    getCursorScreenPositions(): Point[];

    /**
     *  Move the cursor to the given position in screen coordinates.
     *  If there are multiple cursors, they will be consolidated to a single cursor.
     */
    setCursorScreenPosition(position: PointCompatible, options?: { autoscroll?: boolean }): void;

    /** Add a cursor at the given position in buffer coordinates. */
    addCursorAtBufferPosition(bufferPosition: PointCompatible, options?: { autoscroll?: boolean }): Cursor;

    /** Add a cursor at the position in screen coordinates. */
    addCursorAtScreenPosition(screenPosition: PointCompatible): Cursor;

    /** Returns a boolean indicating whether or not there are multiple cursors. */
    hasMultipleCursors(): boolean;

    /** Move every cursor up one row in screen coordinates. */
    moveUp(lineCount?: number): void;

    /** Move every cursor down one row in screen coordinates. */
    moveDown(lineCount?: number): void;

    /** Move every cursor left one column. */
    moveLeft(columnCount?: number): void;

    /** Move every cursor right one column. */
    moveRight(columnCount?: number): void;

    /** Move every cursor to the beginning of its line in buffer coordinates. */
    moveToBeginningOfLine(): void;

    /** Move every cursor to the beginning of its line in screen coordinates. */
    moveToBeginningOfScreenLine(): void;

    /** Move every cursor to the first non-whitespace character of its line. */
    moveToFirstCharacterOfLine(): void;

    /** Move every cursor to the end of its line in buffer coordinates. */
    moveToEndOfLine(): void;

    /** Move every cursor to the end of its line in screen coordinates. */
    moveToEndOfScreenLine(): void;

    /** Move every cursor to the beginning of its surrounding word. */
    moveToBeginningOfWord(): void;

    /** Move every cursor to the end of its surrounding word. */
    moveToEndOfWord(): void;

    /**
     *  Move every cursor to the top of the buffer.
     *  If there are multiple cursors, they will be merged into a single cursor.
     */
    moveToTop(): void;

    /**
     *  Move every cursor to the bottom of the buffer.
     *  If there are multiple cursors, they will be merged into a single cursor.
     */
    moveToBottom(): void;

    /** Move every cursor to the beginning of the next word. */
    moveToBeginningOfNextWord(): void;

    /** Move every cursor to the previous word boundary. */
    moveToPreviousWordBoundary(): void;

    /** Move every cursor to the next word boundary. */
    moveToNextWordBoundary(): void;

    /** Move every cursor to the previous subword boundary. */
    moveToPreviousSubwordBoundary(): void;

    /** Move every cursor to the next subword boundary. */
    moveToNextSubwordBoundary(): void;

    /** Move every cursor to the beginning of the next paragraph. */
    moveToBeginningOfNextParagraph(): void;

    /** Move every cursor to the beginning of the previous paragraph. */
    moveToBeginningOfPreviousParagraph(): void;

    /** Returns the most recently added Cursor. */
    getLastCursor(): Cursor;

    /** Returns the word surrounding the most recently added cursor. */
    getWordUnderCursor(options?: {
        wordRegex?: RegExp;
        includeNonWordCharacters?: boolean;
        allowPrevious?: boolean;
    }): string;

    /** Get an Array of all Cursors. */
    getCursors(): Cursor[];

    /**
     *  Get all Cursors, ordered by their position in the buffer instead of the
     *  order in which they were added.
     */
    getCursorsOrderedByBufferPosition(): Cursor[];

    // Selections
    /** Get the selected text of the most recently added selection. */
    getSelectedText(): string;

    /** Get the Range of the most recently added selection in buffer coordinates. */
    getSelectedBufferRange(): Range;

    /**
     *  Get the Ranges of all selections in buffer coordinates.
     *  The ranges are sorted by when the selections were added. Most recent at the end.
     */
    getSelectedBufferRanges(): Range[];

    /**
     *  Set the selected range in buffer coordinates. If there are multiple selections,
     *  they are reduced to a single selection with the given range.
     */
    setSelectedBufferRange(
        bufferRange: RangeCompatible,
        options?: { reversed?: boolean; preserveFolds?: boolean },
    ): void;

    /**
     *  Set the selected ranges in buffer coordinates. If there are multiple selections,
     *  they are replaced by new selections with the given ranges.
     */
    setSelectedBufferRanges(
        bufferRanges: ReadonlyArray<RangeCompatible>,
        options?: { reversed?: boolean; preserveFolds?: boolean },
    ): void;

    /** Get the Range of the most recently added selection in screen coordinates. */
    getSelectedScreenRange(): Range;

    /**
     *  Get the Ranges of all selections in screen coordinates.
     *  The ranges are sorted by when the selections were added. Most recent at the end.
     */
    getSelectedScreenRanges(): Range[];

    /**
     *  Set the selected range in screen coordinates. If there are multiple selections,
     *  they are reduced to a single selection with the given range.
     */
    setSelectedScreenRange(screenRange: RangeCompatible, options?: { reversed?: boolean }): void;

    /**
     *  Set the selected ranges in screen coordinates. If there are multiple selections,
     *  they are replaced by new selections with the given ranges.
     */
    setSelectedScreenRanges(screenRanges: ReadonlyArray<RangeCompatible>, options?: { reversed?: boolean }): void;

    /** Add a selection for the given range in buffer coordinates. */
    addSelectionForBufferRange(
        bufferRange: RangeCompatible,
        options?: { reversed?: boolean; preserveFolds?: boolean },
    ): Selection;

    /** Add a selection for the given range in screen coordinates. */
    addSelectionForScreenRange(
        screenRange: RangeCompatible,
        options?: { reversed?: boolean; preserveFolds?: boolean },
    ): Selection;

    /**
     *  Select from the current cursor position to the given position in buffer coordinates.
     *  This method may merge selections that end up intersecting.
     */
    selectToBufferPosition(position: PointCompatible): void;

    /**
     *  Select from the current cursor position to the given position in screen coordinates.
     *  This method may merge selections that end up intersecting.
     */
    selectToScreenPosition(position: PointCompatible): void;

    /**
     *  Move the cursor of each selection one character upward while preserving the
     *  selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectUp(rowCount?: number): void;

    /**
     *  Move the cursor of each selection one character downward while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectDown(rowCount?: number): void;

    /**
     *  Move the cursor of each selection one character leftward while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectLeft(columnCount?: number): void;

    /**
     *  Move the cursor of each selection one character rightward while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectRight(columnCount?: number): void;

    /**
     *  Select from the top of the buffer to the end of the last selection in the buffer.
     *  This method merges multiple selections into a single selection.
     */
    selectToTop(): void;

    /**
     *  Selects from the top of the first selection in the buffer to the end of the buffer.
     *  This method merges multiple selections into a single selection.
     */
    selectToBottom(): void;

    /**
     *  Select all text in the buffer.
     *  This method merges multiple selections into a single selection.
     */
    selectAll(): void;

    /**
     *  Move the cursor of each selection to the beginning of its line while preserving
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToBeginningOfLine(): void;

    /**
     *  Move the cursor of each selection to the first non-whitespace character of its
     *  line while preserving the selection's tail position. If the cursor is already
     *  on the first character of the line, move it to the beginning of the line.
     *  This method may merge selections that end up intersecting.
     */
    selectToFirstCharacterOfLine(): void;

    /**
     *  Move the cursor of each selection to the end of its line while preserving the
     *  selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToEndOfLine(): void;

    /**
     *  Expand selections to the beginning of their containing word.
     *  Operates on all selections. Moves the cursor to the beginning of the containing
     *  word while preserving the selection's tail position.
     */
    selectToBeginningOfWord(): void;

    /**
     *  Expand selections to the end of their containing word.
     *  Operates on all selections. Moves the cursor to the end of the containing word
     *  while preserving the selection's tail position.
     */
    selectToEndOfWord(): void;

    /**
     *  For each cursor, select the containing line.
     *  This method merges selections on successive lines.
     */
    selectLinesContainingCursors(): void;

    /** Select the word surrounding each cursor. */
    selectWordsContainingCursors(): void;

    /**
     *  For each selection, move its cursor to the preceding subword boundary while
     *  maintaining the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToPreviousSubwordBoundary(): void;

    /**
     *  For each selection, move its cursor to the next subword boundary while maintaining
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToNextSubwordBoundary(): void;

    /**
     *  For each selection, move its cursor to the preceding word boundary while
     *  maintaining the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToPreviousWordBoundary(): void;

    /**
     *  For each selection, move its cursor to the next word boundary while maintaining
     *  the selection's tail position.
     *  This method may merge selections that end up intersecting.
     */
    selectToNextWordBoundary(): void;

    /**
     *  Expand selections to the beginning of the next word.
     *  Operates on all selections. Moves the cursor to the beginning of the next word
     *  while preserving the selection's tail position.
     */
    selectToBeginningOfNextWord(): void;

    /**
     *  Expand selections to the beginning of the next paragraph.
     *  Operates on all selections. Moves the cursor to the beginning of the next
     *  paragraph while preserving the selection's tail position.
     */
    selectToBeginningOfNextParagraph(): void;

    /**
     *  Expand selections to the beginning of the next paragraph.
     *  Operates on all selections. Moves the cursor to the beginning of the next
     *  paragraph while preserving the selection's tail position.
     */
    selectToBeginningOfPreviousParagraph(): void;

    /** For each selection, select the syntax node that contains that selection. */
    selectLargerSyntaxNode(): void;

    /** Undo the effect a preceding call to `::selectLargerSyntaxNode`. */
    selectSmallerSyntaxNode(): void;

    /** Select the range of the given marker if it is valid. */
    selectMarker(marker: DisplayMarker): Range | undefined;

    /** Get the most recently added Selection. */
    getLastSelection(): Selection;

    /** Get current Selections. */
    getSelections(): Selection[];

    /**
     *  Get all Selections, ordered by their position in the buffer instead of the
     *  order in which they were added.
     */
    getSelectionsOrderedByBufferPosition(): Selection[];

    // NOTE: this calls into Selection::intersectsBufferRange, which itself calls
    // into Range::intersectsWith. Range::intersectsWith is one of the few functions
    // which does NOT take a range-compatible array.
    /** Determine if a given range in buffer coordinates intersects a selection. */
    selectionIntersectsBufferRange(bufferRange: RangeLike): boolean;

    // Searching and Replacing
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     *
     *  ::scan functions as the replace method as well via the replace.
     */
    scan(regex: RegExp, options: ScanContextOptions, iterator: (params: ContextualBufferScanResult) => void): void;
    /**
     *  Scan regular expression matches in the entire buffer, calling the given
     *  iterator function on each match.
     *
     *  ::scan functions as the replace method as well via the replace.
     */
    scan(regex: RegExp, iterator: (params: BufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in a given range, calling the given iterator.
     *  function on each match.
     */
    scanInBufferRange(regex: RegExp, range: RangeCompatible, iterator: (params: BufferScanResult) => void): void;

    /**
     *  Scan regular expression matches in a given range in reverse order, calling the
     *  given iterator function on each match.
     */
    backwardsScanInBufferRange(
        regex: RegExp,
        range: RangeCompatible,
        iterator: (params: BufferScanResult) => void,
    ): void;

    // Tab Behavior
    /** Returns a boolean indicating whether softTabs are enabled for this editor. */
    getSoftTabs(): boolean;

    /** Enable or disable soft tabs for this editor. */
    setSoftTabs(softTabs: boolean): void;

    /** Toggle soft tabs for this editor. */
    toggleSoftTabs(): boolean;

    /** Get the on-screen length of tab characters. */
    getTabLength(): number;

    /**
     *  Set the on-screen length of tab characters. Setting this to a number will
     *  override the editor.tabLength setting.
     */
    setTabLength(tabLength: number): void;

    /** Determine if the buffer uses hard or soft tabs. */
    usesSoftTabs(): boolean | undefined;

    /**
     *  Get the text representing a single level of indent.
     *  If soft tabs are enabled, the text is composed of N spaces, where N is the
     *  tab length. Otherwise the text is a tab character (\t).
     */
    getTabText(): string;

    // Soft Wrap Behavior
    /** Determine whether lines in this editor are soft-wrapped. */
    isSoftWrapped(): boolean;

    /** Enable or disable soft wrapping for this editor. */
    setSoftWrapped(softWrapped: boolean): boolean;

    /** Toggle soft wrapping for this editor. */
    toggleSoftWrapped(): boolean;

    /** Gets the column at which column will soft wrap. */
    getSoftWrapColumn(): number;

    // Indentation
    /**
     *  Get the indentation level of the given buffer row.
     *  Determines how deeply the given row is indented based on the soft tabs and tab
     *  length settings of this editor. Note that if soft tabs are enabled and the tab
     *  length is 2, a row with 4 leading spaces would have an indentation level of 2.
     */
    indentationForBufferRow(bufferRow: number): number;

    /**
     *  Set the indentation level for the given buffer row.
     *  Inserts or removes hard tabs or spaces based on the soft tabs and tab length settings
     *  of this editor in order to bring it to the given indentation level. Note that if soft
     *  tabs are enabled and the tab length is 2, a row with 4 leading spaces would have an
     *  indentation level of 2.
     */
    setIndentationForBufferRow(
        bufferRow: number,
        newLevel: number,
        options?: { preserveLeadingWhitespace?: boolean },
    ): void;

    /** Indent rows intersecting selections by one level. */
    indentSelectedRows(options?: ReadonlyEditOptions): void;

    /** Outdent rows intersecting selections by one level. */
    outdentSelectedRows(options?: ReadonlyEditOptions): void;

    /**
     *  Get the indentation level of the given line of text.
     *  Determines how deeply the given line is indented based on the soft tabs and tab length
     *  settings of this editor. Note that if soft tabs are enabled and the tab length is 2,
     *  a row with 4 leading spaces would have an indentation level of 2.
     */
    indentLevelForLine(line: string): number;

    /** Indent rows intersecting selections based on the grammar's suggested indent level. */
    autoIndentSelectedRows(options?: ReadonlyEditOptions): void;

    // Grammars
    /** Get the current Grammar of this editor. */
    getGrammar(): Grammar;

    // Managing Syntax Scopes
    /**
     *  Returns a ScopeDescriptor that includes this editor's language.
     *  e.g. [".source.ruby"], or [".source.coffee"].
     */
    getRootScopeDescriptor(): ScopeDescriptor;

    /** Get the syntactic scopeDescriptor for the given position in buffer coordinates. */
    scopeDescriptorForBufferPosition(bufferPosition: PointCompatible): ScopeDescriptor;

    /**
     *  Get the syntactic tree {ScopeDescriptor} for the given position in buffer
     *  coordinates or the syntactic {ScopeDescriptor} for TextMate language mode
     */
    syntaxTreeScopeDescriptorForBufferPosition(bufferPosition: PointCompatible): ScopeDescriptor;

    /**
     *  Get the range in buffer coordinates of all tokens surrounding the cursor
     *  that match the given scope selector.
     */
    bufferRangeForScopeAtCursor(scopeSelector: string): Range;

    /** Determine if the given row is entirely a comment. */
    isBufferRowCommented(bufferRow: number): boolean;

    // Clipboard Operations
    /** For each selection, copy the selected text. */
    copySelectedText(): void;

    /** For each selection, cut the selected text. */
    cutSelectedText(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, replace the selected text with the contents of the clipboard.
     *  If the clipboard contains the same number of selections as the current editor,
     *  each selection will be replaced with the content of the corresponding clipboard
     *  selection text.
     */
    pasteText(options?: TextInsertionOptions & ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, cut all characters of the
     *  containing screen line following the cursor. Otherwise cut the selected text.
     */
    cutToEndOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  For each selection, if the selection is empty, cut all characters of the
     *  containing buffer line following the cursor. Otherwise cut the selected text.
     */
    cutToEndOfBufferLine(options?: ReadonlyEditOptions): void;

    // Folds
    /**
     *  Fold the most recent cursor's row based on its indentation level.
     *  The fold will extend from the nearest preceding line with a lower indentation
     *  level up to the nearest following row with a lower indentation level.
     */
    foldCurrentRow(): void;

    /** Unfold the most recent cursor's row by one level. */
    unfoldCurrentRow(): void;

    /**
     *  Fold the given row in buffer coordinates based on its indentation level.
     *  If the given row is foldable, the fold will begin there. Otherwise, it will
     *  begin at the first foldable row preceding the given row.
     */
    foldBufferRow(bufferRow: number): void;

    /** Unfold all folds containing the given row in buffer coordinates. */
    unfoldBufferRow(bufferRow: number): void;

    /** For each selection, fold the rows it intersects. */
    foldSelectedLines(): void;

    /** Fold all foldable lines. */
    foldAll(): void;

    /** Unfold all existing folds. */
    unfoldAll(): void;

    /**
     * Fold all foldable lines at the given indent level.
     * @param level A zero-indexed number.
     */
    foldAllAtIndentLevel(level: number): void;

    /**
     *  Determine whether the given row in buffer coordinates is foldable.
     *  A foldable row is a row that starts a row range that can be folded.
     */
    isFoldableAtBufferRow(bufferRow: number): boolean;

    /**
     *  Determine whether the given row in screen coordinates is foldable.
     *  A foldable row is a row that starts a row range that can be folded.
     */
    isFoldableAtScreenRow(bufferRow: number): boolean;

    /** Fold the given buffer row if it isn't currently folded, and unfold it otherwise. */
    toggleFoldAtBufferRow(bufferRow: number): void;

    /** Determine whether the most recently added cursor's row is folded. */
    isFoldedAtCursorRow(): boolean;

    /** Determine whether the given row in buffer coordinates is folded. */
    isFoldedAtBufferRow(bufferRow: number): boolean;

    /** Determine whether the given row in screen coordinates is folded. */
    isFoldedAtScreenRow(screenRow: number): boolean;

    // Gutters
    /** Add a custom Gutter. */
    addGutter(options: GutterOptions): Gutter;

    /** Get this editor's gutters. */
    getGutters(): Gutter[];

    /** Get the gutter with the given name. */
    gutterWithName(name: string): Gutter | null;

    // Scrolling the TextEditor
    /** Scroll the editor to reveal the most recently added cursor if it is off-screen. */
    scrollToCursorPosition(options?: { center?: boolean }): void;

    /** Scrolls the editor to the given buffer position. */
    scrollToBufferPosition(bufferPosition: PointCompatible, options?: { center?: boolean }): void;

    /** Scrolls the editor to the given screen position. */
    scrollToScreenPosition(screenPosition: PointCompatible, options?: { center?: boolean }): void;

    // TextEditor Rendering
    /** Retrieves the rendered line height in pixels. */
    getLineHeightInPixels(): number;

    /** Retrieves the greyed out placeholder of a mini editor. */
    getPlaceholderText(): string;

    /**
     *  Set the greyed out placeholder of a mini editor. Placeholder text will be
     *  displayed when the editor has no content.
     */
    setPlaceholderText(placeholderText: string): void;

    /** Undocumented: Buffer range for syntax scope at position */
    bufferRangeForScopeAtPosition(scope: string, point: PointCompatible): Range;

    /** Undocumented: Get syntax token at buffer position */
    tokenForBufferPosition(pos: PointCompatible): { value: string; scopes: string[] };
}
