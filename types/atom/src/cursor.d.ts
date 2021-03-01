import { DisplayMarker, Disposable, Point, PointCompatible, Range, ScopeDescriptor } from '../index';

/**
 *  The Cursor class represents the little blinking line identifying where text
 *  can be inserted.
 */
export interface Cursor {
    // Event Subscription
    /** Calls your callback when the cursor has been moved. */
    onDidChangePosition(callback: (event: CursorPositionChangedEvent) => void): Disposable;

    /** Calls your callback when the cursor is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Calls your callback when the cursor's visibility has changed. */
    onDidChangeVisibility(callback: (visibility: boolean) => void): Disposable;

    // Managing Cursor Position
    /** Moves a cursor to a given screen position. */
    setScreenPosition(screenPosition: PointCompatible, options?: { autoscroll?: boolean }): void;

    /** Returns the screen position of the cursor as a Point. */
    getScreenPosition(): Point;

    /** Moves a cursor to a given buffer position. */
    setBufferPosition(bufferPosition: PointCompatible, options?: { autoscroll?: boolean }): void;

    /** Returns the current buffer position as an Array. */
    getBufferPosition(): Point;

    /** Returns the cursor's current screen row. */
    getScreenRow(): number;

    /** Returns the cursor's current screen column. */
    getScreenColumn(): number;

    /** Retrieves the cursor's current buffer row. */
    getBufferRow(): number;

    /** Returns the cursor's current buffer column. */
    getBufferColumn(): number;

    /** Returns the cursor's current buffer row of text excluding its line ending. */
    getCurrentBufferLine(): string;

    /** Returns whether the cursor is at the start of a line. */
    isAtBeginningOfLine(): boolean;

    /** Returns whether the cursor is on the line return character. */
    isAtEndOfLine(): boolean;

    // Cursor Position Details
    /**
     *  Returns the underlying DisplayMarker for the cursor. Useful with overlay
     *  Decorations.
     */
    getMarker(): DisplayMarker;

    /**
     *  Identifies if the cursor is surrounded by whitespace.
     *  "Surrounded" here means that the character directly before and after the cursor
     *  are both whitespace.
     */
    isSurroundedByWhitespace(): boolean;

    /** This method returns false if the character before or after the cursor is whitespace. */
    isBetweenWordAndNonWord(): boolean;

    /** Returns whether this cursor is between a word's start and end. */
    isInsideWord(options?: { wordRegex?: RegExp }): boolean;

    /** Returns the indentation level of the current line. */
    getIndentLevel(): number;

    /** Retrieves the scope descriptor for the cursor's current position. */
    getScopeDescriptor(): ScopeDescriptor;

    /** Retrieves the syntax tree scope descriptor for the cursor's current position. */
    getSyntaxTreeScopeDescriptor(): ScopeDescriptor;

    /**
     *  Returns true if this cursor has no non-whitespace characters before its
     *  current position.
     */
    hasPrecedingCharactersOnLine(): boolean;

    /**
     *  Identifies if this cursor is the last in the TextEditor.
     *  "Last" is defined as the most recently added cursor.
     */
    isLastCursor(): boolean;

    // Moving the Cursor
    /** Moves the cursor up one screen row. */
    moveUp(rowCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor down one screen row. */
    moveDown(rowCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor left one screen column. */
    moveLeft(columnCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor right one screen column. */
    moveRight(columnCount?: number, options?: { moveToEndOfSelection?: boolean }): void;

    /** Moves the cursor to the top of the buffer. */
    moveToTop(): void;

    /** Moves the cursor to the bottom of the buffer. */
    moveToBottom(): void;

    /** Moves the cursor to the beginning of the line. */
    moveToBeginningOfScreenLine(): void;

    /** Moves the cursor to the beginning of the buffer line. */
    moveToBeginningOfLine(): void;

    /** Moves the cursor to the beginning of the first character in the line. */
    moveToFirstCharacterOfLine(): void;

    /** Moves the cursor to the end of the line. */
    moveToEndOfScreenLine(): void;

    /** Moves the cursor to the end of the buffer line. */
    moveToEndOfLine(): void;

    /** Moves the cursor to the beginning of the word. */
    moveToBeginningOfWord(): void;

    /** Moves the cursor to the end of the word. */
    moveToEndOfWord(): void;

    /** Moves the cursor to the beginning of the next word. */
    moveToBeginningOfNextWord(): void;

    /** Moves the cursor to the previous word boundary. */
    moveToPreviousWordBoundary(): void;

    /** Moves the cursor to the next word boundary. */
    moveToNextWordBoundary(): void;

    /** Moves the cursor to the previous subword boundary. */
    moveToPreviousSubwordBoundary(): void;

    /** Moves the cursor to the next subword boundary. */
    moveToNextSubwordBoundary(): void;

    /** Moves the cursor to the beginning of the buffer line, skipping all whitespace. */
    skipLeadingWhitespace(): void;

    /** Moves the cursor to the beginning of the next paragraph. */
    moveToBeginningOfNextParagraph(): void;

    /** Moves the cursor to the beginning of the previous paragraph. */
    moveToBeginningOfPreviousParagraph(): void;

    // Local Positions and Ranges
    /**
     *  Returns buffer position of previous word boundary. It might be on the current
     *  word, or the previous word.
     */
    getPreviousWordBoundaryBufferPosition(options?: { wordRegex?: RegExp }): Point;

    /**
     *  Returns buffer position of the next word boundary. It might be on the current
     *  word, or the previous word.
     */
    getNextWordBoundaryBufferPosition(options?: { wordRegex?: RegExp }): Point;

    /** Retrieves the buffer position of where the current word starts. */
    getBeginningOfCurrentWordBufferPosition(options?: {
        wordRegex?: RegExp;
        includeNonWordCharacters?: boolean;
        allowPrevious?: boolean;
    }): Point;

    /** Retrieves the buffer position of where the current word ends. */
    getEndOfCurrentWordBufferPosition(options?: { wordRegex?: RegExp; includeNonWordCharacters?: boolean }): Point;

    /** Retrieves the buffer position of where the next word starts. */
    getBeginningOfNextWordBufferPosition(options?: { wordRegex?: RegExp }): Point;

    /** Returns the buffer Range occupied by the word located under the cursor. */
    getCurrentWordBufferRange(options?: { wordRegex?: RegExp }): Range;

    /** Returns the buffer Range for the current line. */
    getCurrentLineBufferRange(options?: { includeNewline?: boolean }): Range;

    /**
     *  Retrieves the range for the current paragraph.
     *  A paragraph is defined as a block of text surrounded by empty lines or comments.
     */
    getCurrentParagraphBufferRange(): Range;

    /** Returns the characters preceding the cursor in the current word. */
    getCurrentWordPrefix(): string;

    // Visibility
    /** Sets whether the cursor is visible. */
    setVisible(visible: boolean): void;

    /** Returns the visibility of the cursor. */
    isVisible(): boolean;

    // Comparing to another cursor
    /**
     *  Compare this cursor's buffer position to another cursor's buffer position.
     *  See Point::compare for more details.
     */
    compare(otherCursor: Cursor): number;

    // Utilities
    /** Prevents this cursor from causing scrolling. */
    clearAutoscroll(): void;

    /** Deselects the current selection. */
    clearSelection(): void;

    /** Get the RegExp used by the cursor to determine what a "word" is. */
    wordRegExp(options?: { includeNonWordCharacters?: boolean }): RegExp;

    /** Get the RegExp used by the cursor to determine what a "subword" is. */
    subwordRegExp(options?: { backwards?: boolean }): RegExp;
}

export interface CursorPositionChangedEvent {
    oldBufferPosition: Point;
    oldScreenPosition: Point;
    newBufferPosition: Point;
    newScreenPosition: Point;
    textChanged: boolean;
    cursor: Cursor;
}
