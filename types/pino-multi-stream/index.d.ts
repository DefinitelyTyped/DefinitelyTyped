import {
    DestinationStream as PinoDestinationStream,
    LevelWithSilent as PinoLevel,
    Logger as PinoLogger,
    LoggerOptions as PinoLoggerOptions,
    stdSerializers as pinoStdSerializers,
} from "pino";
import stream = require("stream");

declare namespace pinoms {
    type Streams = Array<{ stream: PinoDestinationStream | NodeJS.WritableStream; level?: Level | undefined }>;
    interface LoggerOptions extends PinoLoggerOptions {
        streams?: Streams | undefined;
    }
    interface PrettyStreamOptions extends Pick<PinoLoggerOptions, "prettyPrint"> {
        /**
         * Allows to optionally define which prettifier module to use
         */
        // TODO: use type definitions from 'pino-pretty' when available.
        prettifier?: any;
        dest?: PinoDestinationStream | NodeJS.WritableStream | undefined;
    }
    interface MultiStreamOptions {
        dedupe?: boolean | undefined;
    }

    const stdSerializers: typeof pinoStdSerializers;

    function multistream(streams: Streams, opts?: MultiStreamOptions): stream.Writable;
    function prettyStream(opts?: PrettyStreamOptions): PinoDestinationStream;
    type Level = PinoLevel;
    type Logger = PinoLogger;
}

declare function pinoms(options: pinoms.LoggerOptions): pinoms.Logger;
export = pinoms;
