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
        exclusions?: string[];
        disableDotRule?: true;
        htmlAcceptHeaders?: string[];
        index?: string;
        logger?: typeof console.log;
        rewrites?: Rewrite[];
        verbose?: boolean;
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
