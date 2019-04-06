// Type definitions for hapi-pino 5.2
// Project: https://github.com/pinojs/hapi-pino#readme
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types='node' />

import {
    Plugin,
} from 'hapi';
import * as pino from 'pino';

declare module 'hapi' {
interface Server {
    logger: () => pino.Logger;
}

interface Request {
    logger: pino.Logger;
}
}

declare namespace HapiPino {
    type LogLevels = 'trace' | 'debug' | 'info' | 'warn' | 'error';

    interface Options {
        logPayload?: boolean;
        logRouteTags?: boolean;
        stream?: NodeJS.WriteStream;
        prettyPrint?: boolean;
        levelTags?: { [key in LogLevels]: string };
        allTags?: LogLevels;
        serializers?: { [key: string]: (param: any) => void};
        instance?: pino.Logger;
        logEvents?: string[] | false | null;
        mergeHapiLogData?: boolean;
        ignorePaths?: string[];
        level?: LogLevels;
        redact?: string[];
    }
}

declare var HapiPino: Plugin<HapiPino.Options>;

export = HapiPino;
