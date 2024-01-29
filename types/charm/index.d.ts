/// <reference types="node" />

declare namespace charm {
    type CharmColorName = "red" | "yellow" | "green" | "blue" | "cyan" | "magenta" | "black" | "white";
    type CharmColorHex = number;
    type CharmColor = CharmColorName | CharmColorHex;
    type CharmAnyStream = NodeJS.WritableStream | NodeJS.ReadableStream | NodeJS.Process;

    interface CharmInstance extends NodeJS.WritableStream {
        /** Reset the entire screen, like the /usr/bin/reset command. */
        reset(): void;

        /** Emit an "end" event downstream. */
        destroy(): any;

        /** Emit an "end" event downstream. */
        end(): any;

        /**
         * Pass along `msg` to the output stream.
         * @param cb Unused by charm, only there to comply to the WritableStream interface
         */
        write(msg: string | Buffer, cb?: Function): boolean;
        write(msgs: string | Buffer, encoding?: string, cb?: Function): boolean;

        /** Set the cursor position to the absolute coordinates `x`, `y`. */
        position(x: number, y: number): void;

        /**
         * Query the absolute cursor position from the input stream through the output stream
         * (the shell does this automatically) and get the response back as `cb(x, y)`.
         */
        position(callback: (x: number, y: number) => void): void;

        /** Move the cursor position by the relative coordinates `x`, `y`. */
        move(x: number, y: number): this;

        /** Move the cursor up by `y` rows. */
        up(y: number): this;

        /** Move the cursor down by `y` rows. */
        down(y: number): this;

        /** Move the cursor left by `x` columns. */
        left(x: number): this;

        /** Move the cursor right by `x` columns. */
        right(x: number): this;

        /** Push the cursor state and optionally the attribute state. */
        push(withAttributes?: boolean): this;

        /** Pop the cursor state and optionally the attribute state. */
        pop(withAttributes?: boolean): this;

        /**
         * Erase a region defined by the string `s`.
         *
         * `s` can be:
         *
         *  - end - erase from the cursor to the end of the line
         *  - start - erase from the cursor to the start of the line
         *  - line - erase the current line
         *  - down - erase everything below the current line
         *  - up - erase everything above the current line
         *  - screen - erase the entire screen
         */
        erase(s: "end" | "start" | "line" | "down" | "up" | "screen"): this;

        /**
         * Delete `'line'` or `'char'`s. delete differs from erase because it does not write over
         * the deleted characters with whitesapce, but instead removes the deleted space.
         *
         * mode can be `'line'` or `'char'`. `n` is the number of items to be deleted.
         * `n` must be a positive integer.
         *
         * The cursor position is not updated.
         */
        delete(mode: "line" | "char", n?: number): this;

        /**
         * Insert space into the terminal. `insert` is the opposite of `delete`,
         *
         * mode can be `'line'` or `'char'`. `n` is the number of items to be deleted.
         * `n` must be a positive integer.
         */
        insert(mode: "line" | "char", n: number): this;
        /**
         * Set the display mode with the string `attr.`
         *
         * `attr` can be:
         *
         *  - reset
         *  - bright
         *  - dim
         *  - underscore
         *  - blink
         *  - reverse
         *  - hidden
         */
        display(attr: "reset" | "bright" | "dim" | "underscore" | "blink" | "reverse" | "hidden"): this;

        /**
         * Set the foreground color with the string `color`, which can be:
         *
         *  - red
         *  - yellow
         *  - green
         *  - blue
         *  - cyan
         *  - magenta
         *  - black
         *  - white
         *  - or `color` can be an integer from 0 to 255, inclusive.
         */
        foreground(color: CharmColor): this;
        /**
         * Set the background color with the string `color`, which can be:
         *
         *  - red
         *  - yellow
         *  - green
         *  - blue
         *  - cyan
         *  - magenta
         *  - black
         *  - white
         *  - or `color` can be an integer from 0 to 255, inclusive.
         */
        background(color: CharmColor): this;

        /** Set the cursor visibility with a boolean `visible`. */
        cursor(visible: boolean): any;

        /** Pipes the output of Charm to a writeable stream `stream` */
        pipe(stream: NodeJS.WritableStream): void;
    }
}

/**
 * Create a new readable/writable charm stream.
 *
 * You can pass in readable or writable streams as parameters
 * and they will be piped to or from accordingly.
 * You can also pass `process` in which case
 * `process.stdin` and `process.stdout` will be used.
 */
declare function charm(param?: charm.CharmAnyStream): charm.CharmInstance;
export = charm;
