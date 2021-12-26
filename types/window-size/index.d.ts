// Type definitions for window-size 1.1.1
// Project: https://github.com/jonschlinkert/window-size
// Definitions by: Juer Whang <https://github.com/juergenie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'window-size' {
    import { WriteStream } from 'fs';

    const windowSize: windowSize.Size & {
        /** Get terminal window's size with available channels. */
        get(options?: windowSize.WindowSizeOptions): windowSize.Size;
        /** Get terminal window's size with `process.env.COLUMNS` and `process.env.ROWS`. */
        env(): windowSize.Size;
        /** Get terminal window's size with `tty` module */
        tty(options: windowSize.TtySizeOptions): windowSize.Size;
        tput(): windowSize.Size;
        win(): windowSize.Size;
    };
    export = windowSize;
    namespace windowSize {
        export interface Size {
            width: number;
            height: number;
            type: string;
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
    }
}
