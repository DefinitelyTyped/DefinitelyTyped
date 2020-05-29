// Type definitions for bunyan-slack 0.0
// Project: https://github.com/qualitybath/bunyan-slack#readme
// Definitions by: Eric Chen <https://github.com/fshiori>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace BunyanSlack {
    interface Options {
        webhook_url: string;
        webhookUrl?: string;
        customFormatter?: any;
        icon_url?: string;
        iconUrl?: string;
        icon_emoji?: string;
        iconEmoji?: string;
        channel?: string;
        username?: string;
    }

    interface BunyanSlackConstructor extends NodeJS.WritableStream {
        new (options: Options, error?: any);
    }
}

declare module 'bunyan-slack' {
    const temp: BunyanSlack.BunyanSlackConstructor;
    export = temp;
}
