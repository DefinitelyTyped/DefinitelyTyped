// Type definitions for pino-multi-stream 5.0
// Project: https://github.com/pinojs/pino-multi-stream#readme
// Definitions by: Jake Ginnivan <https://github.com/JakeGinnivan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7
import {
    LoggerOptions as PinoLoggerOptions,
    Logger as PinoLogger,
    Level as PinoLevel,
    DestinationStream as PinoDestinationStream,
    stdSerializers as pinoStdSerializers
} from 'pino';
import stream = require('stream');

declare namespace pinoms {
    type Streams = Array<{ stream: PinoDestinationStream | NodeJS.WritableStream; level?: Level }>;
    interface LoggerOptions extends PinoLoggerOptions {
        streams?: Streams;
    }
    interface PrettyStreamOptions extends Pick<PinoLoggerOptions, 'prettyPrint'> {
        /**
         * Allows to optionally define which prettifier module to use
         */
        // TODO: use type definitions from 'pino-pretty' when available.
        prettifier?: any;
        dest?: PinoDestinationStream | NodeJS.WritableStream;
    }

    const stdSerializers: typeof pinoStdSerializers;

    function multistream(streams: Streams): stream.Writable;
    function prettyStream(opts?: PrettyStreamOptions): PinoDestinationStream;
    type Level = PinoLevel;
    type Logger = PinoLogger;
}

declare function pinoms(options: pinoms.LoggerOptions): pinoms.Logger;
export = pinoms;
