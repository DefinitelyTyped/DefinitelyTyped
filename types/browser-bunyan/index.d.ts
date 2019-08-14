// Type definitions for browser-bunyan 0.4
// Project: https://github.com/philmander/browser-bunyan
// Definitions by: Paul Lockwood <https://github.com/PaulLockwood>
//                 Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as bunyan from 'bunyan';

declare namespace BrowserBunyan {
    interface ConsoleFormattedStreamLevelStyle {
        trace: string;
        debug: string;
        info: string;
        warn: string;
        error: string;
        fatal: string;
    }

    interface ConsoleFormattedStreamStyle {
        levels: Partial<ConsoleFormattedStreamLevelStyle>;
        def: string;
        msg: string;
        src: string;
    }

    interface ConsoleFormattedStreamOptions {
        logByLevel?: boolean;
        css?: Partial<ConsoleFormattedStreamStyle>;
    }

    type ConsoleFormattedStream = new(options?: ConsoleFormattedStreamOptions) => NodeJS.WritableStream;

    type ConsoleRawStream = new(options?: ConsoleFormattedStreamOptions) => NodeJS.WritableStream;
}

type BrowserBunyan = typeof bunyan & {
    ConsoleFormattedStream: BrowserBunyan.ConsoleFormattedStream
    ConsoleRawStream: BrowserBunyan.ConsoleRawStream
};

declare const browserBunyan: BrowserBunyan;
export = browserBunyan;
