/**
 * References:
 *
 *   - http://en.wikipedia.org/wiki/ANSI_escape_code
 *   - http://www.termsys.demon.co.uk/vtansi.htm
 */

/// <reference types="node" />
import { Stream } from "stream";

interface CursorOptions {
    enabled: boolean;
    buffering: boolean;
}

declare function ansi(stream: Stream, options?: CursorOptions): ansi.Cursor;

declare namespace ansi {
    class Cursor {
        bg: Colorer;
        fg: Colorer;

        constructor(stream: Stream, options?: CursorOptions);

        /**
         * Helper function that calls `write()` on the underlying Stream.
         * Returns `this` instead of the write() return value to keep
         * the chaining going.
         */
        write(data: string): Cursor;

        /**
         * Buffer `write()` calls into memory.
         *
         * @api public
         */
        buffer(): Cursor;

        /**
         * Write out the in-memory buffer.
         *
         * @api public
         */
        flush(): Cursor;

        /**
         * Makes a beep sound!
         */
        beep(): Cursor;

        /**
         * Moves cursor to specific position
         */
        goto(x?: number, y?: number): Cursor;

        /**
         * Resets all ANSI formatting on the stream.
         */
        reset(): Cursor;

        /**
         * Sets the foreground color with the given RGB values.
         * The closest match out of the 216 colors is picked.
         */
        rgb(r: number, g: number, b: number): Cursor;

        /**
         * Accepts CSS color codes for use with ANSI escape codes.
         * For example: `#FF000` would be bright red.
         */
        hex(color: string): Cursor;

        up(): Cursor;
        down(): Cursor;
        forward(): Cursor;
        back(): Cursor;
        nextLine(): Cursor;
        previousLine(): Cursor;
        horizontalAbsolute(): Cursor;
        eraseData(): Cursor;
        eraseLine(): Cursor;
        scrollUp(): Cursor;
        scrollDown(): Cursor;
        savePosition(): Cursor;
        restorePosition(): Cursor;
        queryPosition(): Cursor;
        hide(): Cursor;
        show(): Cursor;

        bold(): Cursor;
        italic(): Cursor;
        underline(): Cursor;
        inverse(): Cursor;
        resetbold(): Cursor;
        resetitalic(): Cursor;
        resetunderline(): Cursor;
        resetinverse(): Cursor;

        white(): Cursor;
        black(): Cursor;
        blue(): Cursor;
        cyan(): Cursor;
        green(): Cursor;
        magenta(): Cursor;
        red(): Cursor;
        yellow(): Cursor;
        grey(): Cursor;
        brightBlack(): Cursor;
        brightRed(): Cursor;
        brightGreen(): Cursor;
        brightYellow(): Cursor;
        brightBlue(): Cursor;
        brightMagenta(): Cursor;
        brightCyan(): Cursor;
        brightWhite(): Cursor;
    }

    /**
     * The `Colorer` class manages both the background and foreground colors.
     */
    class Colorer {
        constructor(cursor: Cursor, base: string);

        /**
         * Write an ANSI color code, ensuring that the same code doesn't get rewritten.
         */
        _setColorCode(code: string): Colorer;

        /**
         * Resets the color.
         */
        reset(): Cursor;

        /**
         * Sets the foreground color with the given RGB values.
         * The closest match out of the 216 colors is picked.
         */
        rgb(r: number, g: number, b: number): Cursor;

        /**
         * Accepts CSS color codes for use with ANSI escape codes.
         * For example: `#FF000` would be bright red.
         */
        hex(color: string): Cursor;

        white(): Cursor;
        black(): Cursor;
        blue(): Cursor;
        cyan(): Cursor;
        green(): Cursor;
        magenta(): Cursor;
        red(): Cursor;
        yellow(): Cursor;
        grey(): Cursor;
        brightBlack(): Cursor;
        brightRed(): Cursor;
        brightGreen(): Cursor;
        brightYellow(): Cursor;
        brightBlue(): Cursor;
        brightMagenta(): Cursor;
        brightCyan(): Cursor;
        brightWhite(): Cursor;
    }

    interface Cursor {
        [key: string]: ((...anything: any[]) => Cursor) | Colorer;
    }

    interface Colorer {
        [key: string]: (...anything: any[]) => Cursor | Colorer;
    }
}

export = ansi;
