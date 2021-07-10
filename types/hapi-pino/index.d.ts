// Type definitions for hapi-pino 8.0
// Project: https://github.com/pinojs/hapi-pino#readme
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
//                 Todd Bealmear <https://github.com/todd>
//                 Matt Jeanes <https://github.com/BlooJeans>
//                 Kyle Gray <https://github.com/GoPro16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types='node' />

import * as pino from 'pino';

import { Plugin, Request } from '@hapi/hapi';

declare module '@hapi/hapi' {
    interface Server {
        logger: pino.Logger;
    }

    interface Request {
        logger: pino.Logger;
    }
}

declare namespace HapiPino {
    interface Serializers {
        [key: string]: pino.SerializerFn;
    }

    interface Options {
        logPayload?: boolean | undefined;
        logRouteTags?: boolean | undefined;
        logRequestStart?: boolean | ((req: Request) => boolean) | undefined;
        logRequestComplete?: boolean | ((req: Request) => boolean) | undefined;
        stream?: NodeJS.WriteStream | undefined;
        prettyPrint?: boolean | pino.PrettyOptions | undefined;
        tags?: { [key in pino.Level]?: string } | undefined;
        allTags?: pino.Level | undefined;
        serializers?: Serializers | undefined;
        getChildBindings?: ((
            req: Request,
        ) => {
            level?: pino.Level | string | undefined;
            serializers?: Serializers | undefined;
            [key: string]: any;
        }) | undefined;
        instance?: pino.Logger | undefined;
        logEvents?: string[] | false | null | undefined;
        mergeHapiLogData?: boolean | undefined;
        ignorePaths?: string[] | undefined;
        level?: pino.Level | undefined;
        redact?: string[] | pino.redactOptions | undefined;
    }
}

declare var HapiPino: Plugin<HapiPino.Options>;

export = HapiPino;
