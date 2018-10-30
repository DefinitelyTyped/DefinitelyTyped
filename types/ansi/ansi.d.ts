// Type definitions for ansi v0.3.1
// Project: https://www.npmjs.com/package/ansi
// Definitions by: Gustavo6046 https://github.com/Gustavo6046
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'ansi';

/**
 * References:
 *
 *   - http://en.wikipedia.org/wiki/ANSI_escape_code
 *   - http://www.termsys.demon.co.uk/vtansi.htm
 *
 */


/**
 * Creates a Cursor instance based off the given `writable stream` instance.
 */

declare function ansi(stream: Cursor, options?: Object) : Cursor;

/**
 * The `Cursor` class.
 */

declare class Cursor {
    constructor(stream: Cursor, options?: Object);

    /**
     * Helper function that calls `write()` on the underlying Stream.
     * Returns `this` instead of the write() return value to keep
     * the chaining going.
     */
    write(data: string) : Cursor;
    
    /**
     * Buffer `write()` calls into memory.
     *
     * @api public
     */
    buffer() : Cursor;

    /**
     * Write out the in-memory buffer.
     *
     * @api public
     */
    flush() : Cursor;

    /**
     * Makes a beep sound!
     */
    beep() : Cursor;

    /**
     * Moves cursor to specific position
     */
    goto(x?: number, y?: number) : Cursor;

    /**
    * Resets all ANSI formatting on the stream.
    */
    reset() : Cursor;

    /**
     * Sets the foreground color with the given RGB values.
     * The closest match out of the 216 colors is picked.
     */
    rgb(r: number, g: number, b: number) : Cursor;

    /**
     * Accepts CSS color codes for use with ANSI escape codes.
     * For example: `#FF000` would be bright red.
     */
    hex(color: string) : Cursor;

    up() : Cursor;
    down() : Cursor;
    forward() : Cursor;
    back() : Cursor;
    nextLine() : Cursor;
    previousLine() : Cursor;
    horizontalAbsolute() : Cursor;
    eraseData() : Cursor;
    eraseLine() : Cursor;
    scrollUp() : Cursor;
    scrollDown() : Cursor;
    savePosition() : Cursor;
    restorePosition() : Cursor;
    queryPosition() : Cursor;
    hide() : Cursor;
    show() : Cursor;

    bold() : Cursor;
    italic() : Cursor;
    underline() : Cursor;
    inverse() : Cursor;
    resetbold() : Cursor;
    resetitalic() : Cursor;
    resetunderline() : Cursor;
    resetinverse() : Cursor;

    white() : Cursor;
    black() : Cursor;
    blue() : Cursor;
    cyan() : Cursor;
    green() : Cursor;
    magenta() : Cursor;
    red() : Cursor;
    yellow() : Cursor;
    grey() : Cursor;
    brightBlack() : Cursor;
    brightRed() : Cursor;
    brightGreen() : Cursor;
    brightYellow() : Cursor;
    brightBlue() : Cursor;
    brightMagenta() : Cursor;
    brightCyan() : Cursor;
    brightWhite() : Cursor;
}

/**
 * The `Colorer` class manages both the background and foreground colors.
 */
declare class Colorer {
    constructor(cursor: Cursor, base: string);

    /**
     * Write an ANSI color code, ensuring that the same code doesn't get rewritten.
     */
    _setColorCode(code: string) : Colorer;

    /**
     * Resets the color.
     */
    reset() : Cursor;
    
    /**
     * Sets the foreground color with the given RGB values.
     * The closest match out of the 216 colors is picked.
     */
    rgb(r: number, g: number, b: number) : Cursor;

    /**
     * Accepts CSS color codes for use with ANSI escape codes.
     * For example: `#FF000` would be bright red.
     */
    hex(color: string) : Cursor;

    white() : Cursor;
    black() : Cursor;
    blue() : Cursor;
    cyan() : Cursor;
    green() : Cursor;
    magenta() : Cursor;
    red() : Cursor;
    yellow() : Cursor;
    grey() : Cursor;
    brightBlack() : Cursor;
    brightRed() : Cursor;
    brightGreen() : Cursor;
    brightYellow() : Cursor;
    brightBlue() : Cursor;
    brightMagenta() : Cursor;
    brightCyan() : Cursor;
    brightWhite() : Cursor;
}

// UTIL FUNCTIONS //

/**
 * Translates a 255 RGB value to a 0-5 ANSI RGV value,
 * then returns the single ANSI color code to use.
 */
declare function rgb(r: number, g: number, b: number) : number;

/**
 * Turns rgb 0-5 values into a single ANSI color code to use.
 */

declare function rgb5(r: number, g: number, b: number) : number;

/**
 * Accepts a hex CSS color code string (# is optional) and
 * translates it into an Array of 3 RGB 0-255 values, which
 * can then be used with rgb().
 */
declare function hex (color: string) : number[];