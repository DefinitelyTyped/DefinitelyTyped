type MoveFunction1 = (n?: number) => string;
type MoveFunction2 = (x?: number, y?: number) => string;

/**
 * Move around functions
 */
interface Move {

    /**
     * Move cursor x columns and y rows away. Values can be positive or negative
     */
    (x?: number, y?: number): string;
    /**
    * Move cursor up n rows
    */
    readonly up: MoveFunction1;
    /**
    * Move cursor down n rows
    */
    readonly down: MoveFunction1;
    /**
    * Move cursor right n columns
    */
    readonly right: MoveFunction1;
    /**
    * Move cursor left n columns
    */
    readonly left: MoveFunction1;
    /**
    * Absolute move. Sets cursor position at x column and y row
    */
    readonly to: MoveFunction2;
    /**
    * Move cursor n lines forward if n is positive, otherwise n lines backward, and place it at line beginning
    */
    readonly lines: MoveFunction1;
    /**
    * Move cursor to top of a screen
    */
    readonly top: string;
    /**
    * Move cursor to bottom of a screen
    */
    readonly bottom: string;
    /**
    * Move cursor to begin of a line
    */
    readonly lineBegin: string;
    /**
    * Move cursor to end of a line
    */
    readonly lineEnd: string;
}

declare const move: Move;
export = move;
