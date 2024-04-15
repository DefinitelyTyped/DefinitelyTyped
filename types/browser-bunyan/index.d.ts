/// <reference types="node" />

import * as bunyan from "bunyan";

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
        logByLevel?: boolean | undefined;
        css?: Partial<ConsoleFormattedStreamStyle> | undefined;
    }

    type ConsoleFormattedStream = new(options?: ConsoleFormattedStreamOptions) => NodeJS.WritableStream;

    type ConsoleRawStream = new(options?: ConsoleFormattedStreamOptions) => NodeJS.WritableStream;
}

type BrowserBunyan = typeof bunyan & {
    ConsoleFormattedStream: BrowserBunyan.ConsoleFormattedStream;
    ConsoleRawStream: BrowserBunyan.ConsoleRawStream;
};

declare const browserBunyan: BrowserBunyan;
export = browserBunyan;
