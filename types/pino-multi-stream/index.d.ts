// Type definitions for pino-multi-stream 3.1
// Project: https://github.com/pinojs/pino-multi-stream#readme
// Definitions by: Jake Ginnivan <https://github.com/JakeGinnivan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import {
    LoggerOptions as PinoLoggerOptions,
    Logger as PinoLogger,
    Level as PinoLevel,
    stdSerializers as pinoStdSerializers
} from 'pino';
import stream = require('stream');

declare namespace pinoms {
    type Streams = Array<{ stream: NodeJS.WritableStream; level?: Level }>;
    interface LoggerOptions extends PinoLoggerOptions {
        streams?: Streams;
    }
    const stdSerializers: typeof pinoStdSerializers;

    function multistream(streams: Streams): stream.Writable;
    type Level = PinoLevel;
    type Logger = PinoLogger;
}

declare function pinoms(options: pinoms.LoggerOptions): pinoms.Logger;
export = pinoms;
