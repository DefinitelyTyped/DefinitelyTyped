// Type definitions for bunyan-bugsnag 1.0
// Project: https://github.com/marnusw/bunyan-bugsnag
// Definitions by: Pasi Eronen <https://github.com/pasieronen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as Logger from 'bunyan';

declare namespace bugsnagLogStream {
    interface Options {
        systemInfo?: string[];
        warningLevel?: Logger.LogLevel;
        errorLevel?: Logger.LogLevel;
    }
}

declare function bugsnagLogStream(options?: bugsnagLogStream.Options): NodeJS.WritableStream;

export = bugsnagLogStream;
