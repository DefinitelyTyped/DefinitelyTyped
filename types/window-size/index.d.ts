// Type definitions for window-size 1.1.1
// Project: https://github.com/jonschlinkert/window-size
// Definitions by: Pouya Kary <https://github.com/pmkary>,
//                 Juer Whang <https://github.com/juergenie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'window-size' {
    import { WriteStream } from 'fs';

    export interface Size {
        /** Height of the terminal window.*/
        height: number;
        /** Width of the terminal window.*/
        width: number;
    }

    /** Options of inner function `streamSize`. */
    type StreamSizeOptions = Record<string, WriteStream>;

    /** Options of function `windowSize.tty`. */
    interface TtySizeOptions {
        tty?: {
            getWindowSize?: (out: WriteStream) => [number, number];
        };
    }

    /** Options of function `windowSize.get` */
    type WindowSizeOptions = StreamSizeOptions & TtySizeOptions;

    const windowSize: Size & {
        /** Get terminal window's size with available channels. */
        get(options?: WindowSizeOptions): Size;
        /** Get terminal window's size with `process.env.COLUMNS` and `process.env.ROWS`. */
        env(): Size;
        /** Get terminal window's size with `tty` module */
        tty(options: TtySizeOptions): Size;
        tput(): Size;
        win(): Size;
    };

    export default windowSize;
}
