import {
    Disposable,
    PointCompatible,
    Range,
    RangeCompatible,
    RangeLike,
    ReadonlyEditOptions,
    TextInsertionOptions,
} from '../index';

/** Represents a selection in the TextEditor. */
export interface Selection {
    // Event Subscription
    /** Calls your callback when the selection was moved. */
    onDidChangeRange(callback: (event: SelectionChangedEvent) => void): Disposable;

    /** Calls your callback when the selection was destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    // Managing the selection range
    /** Returns the screen Range for the selection. */
    getScreenRange(): Range;

    /** Modifies the screen range for the selection. */
    setScreenRange(
        screenRange: RangeCompatible,
        options?: {
            preserveFolds?: boolean;
            autoscroll?: boolean;
        },
    ): void;

    /** Returns the buffer Range for the selection. */
    getBufferRange(): Range;

    /** Modifies the buffer Range for the selection. */
    setBufferRange(
        bufferRange: RangeCompatible,
        options?: {
            reversed?: boolean;
            preserveFolds?: boolean;
            autoscroll?: boolean;
        },
    ): void;

    /** Returns the starting and ending buffer rows the selection is highlighting. */
    getBufferRowRange(): [number, number];

    // Info about the selection
    /** Determines if the selection contains anything. */
    isEmpty(): boolean;

    /**
     *  Determines if the ending position of a marker is greater than the starting position.
     *  This can happen when, for example, you highlight text "up" in a TextBuffer.
     */
    isReversed(): boolean;

    /** Returns whether the selection is a single line or not. */
    isSingleScreenLine(): boolean;

    /** Returns the text in the selection. */
    getText(): string;

    // NOTE: this calls into Range.intersectsWith(), which is one of the few functions
    //   that doesn't take a range-compatible range, despite what the API says.
    /** Identifies if a selection intersects with a given buffer range. */
    intersectsBufferRange(bufferRange: RangeLike): boolean;

    /** Identifies if a selection intersects with another selection. */
    intersectsWith(otherSelection: Selection): boolean;

    // Modifying the selected range
    /** Clears the selection, moving the marker to the head. */
    clear(options?: { autoscroll?: boolean }): void;

    /** Selects the text from the current cursor position to a given screen position. */
    selectToScreenPosition(position: PointCompatible): void;

    /** Selects the text from the current cursor position to a given buffer position. */
    selectToBufferPosition(position: PointCompatible): void;

    /** Selects the text one position right of the cursor. */
    selectRight(columnCount?: number): void;

    /** Selects the text one position left of the cursor. */
    selectLeft(columnCount?: number): void;

    /** Selects all the text one position above the cursor. */
    selectUp(rowCount?: number): void;

    /** Selects all the text one position below the cursor. */
    selectDown(rowCount?: number): void;

    /**
     *  Selects all the text from the current cursor position to the top of the
     *  buffer.
     */
    selectToTop(): void;

    /**
     *  Selects all the text from the current cursor position to the bottom of
     *  the buffer.
     */
    selectToBottom(): void;

    /** Selects all the text in the buffer. */
    selectAll(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the line.
     */
    selectToBeginningOfLine(): void;

    /**
     *  Selects all the text from the current cursor position to the first character
     *  of the line.
     */
    selectToFirstCharacterOfLine(): void;

    /**
     *  Selects all the text from the current cursor position to the end of the
     *  screen line.
     */
    selectToEndOfLine(): void;

    /**
     *  Selects all the text from the current cursor position to the end of the
     *  buffer line.
     */
    selectToEndOfBufferLine(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning
     *  of the word.
     */
    selectToBeginningOfWord(): void;

    /** Selects all the text from the current cursor position to the end of the word. */
    selectToEndOfWord(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the next word.
     */
    selectToBeginningOfNextWord(): void;

    /** Selects text to the previous word boundary. */
    selectToPreviousWordBoundary(): void;

    /** Selects text to the next word boundary. */
    selectToNextWordBoundary(): void;

    /** Selects text to the previous subword boundary. */
    selectToPreviousSubwordBoundary(): void;

    /** Selects text to the next subword boundary. */
    selectToNextSubwordBoundary(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the next paragraph.
     */
    selectToBeginningOfNextParagraph(): void;

    /**
     *  Selects all the text from the current cursor position to the beginning of
     *  the previous paragraph.
     */
    selectToBeginningOfPreviousParagraph(): void;

    /** Modifies the selection to encompass the current word. */
    selectWord(): void;

    /**
     *  Expands the newest selection to include the entire word on which the
     *  cursors rests.
     */
    expandOverWord(): void;

    /** Selects an entire line in the buffer. */
    selectLine(row: number): void;

    /**
     *  Expands the newest selection to include the entire line on which the cursor
     *  currently rests.
     *  It also includes the newline character.
     */
    expandOverLine(): void;

    // Modifying the selected text
    /** Replaces text at the current selection. */
    insertText(text: string, options?: TextInsertionOptions & ReadonlyEditOptions): void;

    /**
     *  Removes the first character before the selection if the selection is empty
     *  otherwise it deletes the selection.
     */
    backspace(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or, if nothing is selected, then all characters from
     *  the start of the selection back to the previous word boundary.
     */
    deleteToPreviousWordBoundary(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or, if nothing is selected, then all characters from
     *  the start of the selection up to the next word boundary.
     */
    deleteToNextWordBoundary(options?: ReadonlyEditOptions): void;

    /**
     *  Removes from the start of the selection to the beginning of the current
     *  word if the selection is empty otherwise it deletes the selection.
     */
    deleteToBeginningOfWord(options?: ReadonlyEditOptions): void;

    /**
     *  Removes from the beginning of the line which the selection begins on all
     *  the way through to the end of the selection.
     */
    deleteToBeginningOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or the next character after the start of the selection
     *  if the selection is empty.
     */
    delete(options?: ReadonlyEditOptions): void;

    /**
     *  If the selection is empty, removes all text from the cursor to the end of
     *  the line. If the cursor is already at the end of the line, it removes the following
     *  newline. If the selection isn't empty, only deletes the contents of the selection.
     */
    deleteToEndOfLine(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToEndOfWord(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToBeginningOfSubword(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the selection or all characters from the start of the selection to
     *  the end of the current word if nothing is selected.
     */
    deleteToEndOfSubword(options?: ReadonlyEditOptions): void;

    /** Removes only the selected text. */
    deleteSelectedText(options?: ReadonlyEditOptions): void;

    /**
     *  Removes the line at the beginning of the selection if the selection is empty
     *  unless the selection spans multiple lines in which case all lines are removed.
     */
    deleteLine(options?: ReadonlyEditOptions): void;

    /**
     *  Joins the current line with the one below it. Lines will be separated by a single space.
     *  If there selection spans more than one line, all the lines are joined together.
     */
    joinLines(options?: ReadonlyEditOptions): void;

    /** Removes one level of indent from the currently selected rows. */
    outdentSelectedRows(options?: ReadonlyEditOptions): void;

    /**
     *  Sets the indentation level of all selected rows to values suggested by the
     *  relevant grammars.
     */
    autoIndentSelectedRows(options?: ReadonlyEditOptions): void;

    /**
     *  Wraps the selected lines in comments if they aren't currently part of a comment.
     *  Removes the comment if they are currently wrapped in a comment.
     */
    toggleLineComments(options?: ReadonlyEditOptions): void;

    /** Cuts the selection until the end of the screen line. */
    cutToEndOfLine(maintainClipboard?: boolean, options?: ReadonlyEditOptions): void;

    /** Cuts the selection until the end of the buffer line. */
    cutToEndOfBufferLine(maintainClipboard?: boolean, options?: ReadonlyEditOptions): void;

    /** Copies the selection to the clipboard and then deletes it. */
    cut(maintainClipboard?: boolean, fullLine?: boolean, options?: ReadonlyEditOptions): void;

    /** Copies the current selection to the clipboard. */
    copy(maintainClipboard?: boolean, fullLine?: boolean): void;

    /** Creates a fold containing the current selection. */
    fold(): void;

    /** If the selection spans multiple rows, indent all of them. */
    indentSelectedRows(options?: ReadonlyEditOptions): void;

    // Managing multiple selections
    /** Moves the selection down one row. */
    addSelectionBelow(): void;

    /** Moves the selection up one row. */
    addSelectionAbove(): void;

    /**
     *  Combines the given selection into this selection and then destroys the
     *  given selection.
     */
    merge(otherSelection: Selection, options?: { preserveFolds?: boolean; autoscroll?: boolean }): void;

    // Comparing to other selections
    /**
     *  Compare this selection's buffer range to another selection's buffer range.
     *  See Range::compare for more details.
     */
    compare(otherSelection: Selection): number;
}

export interface SelectionChangedEvent {
    oldBufferRange: Range;
    oldScreenRange: Range;
    newBufferRange: Range;
    newScreenRange: Range;
    selection: Selection;
}
