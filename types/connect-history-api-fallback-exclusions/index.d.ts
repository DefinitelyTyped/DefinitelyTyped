// Type definitions for connect-history-api-fallback-exclusions 1.5
// Project: https://github.com/Wirewheel/connect-history-api-fallback#readme
// Definitions by: Tony Stone <https://github.com/tonystonee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Url } from 'url';

import * as core from "express-serve-static-core";

declare function historyApiFallback(options?: historyApiFallback.Options): core.RequestHandler;

declare namespace historyApiFallback {
    interface Options {
        exclusions?: string[] | undefined;
        disableDotRule?: true | undefined;
        htmlAcceptHeaders?: string[] | undefined;
        index?: string | undefined;
        logger?: typeof console.log | undefined;
        rewrites?: Rewrite[] | undefined;
        verbose?: boolean | undefined;
    }

    interface Context {
        match: RegExpMatchArray;
        parsedUrl: Url;
    }
    type RewriteTo = (context: Context) => string;

    interface Rewrite {
        from: RegExp;
        to: string | RegExp | RewriteTo;
    }
}
export = historyApiFallback;
