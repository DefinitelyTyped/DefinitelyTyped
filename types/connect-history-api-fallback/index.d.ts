// Type definitions for connect-history-api-fallback 1.3
// Project: https://github.com/bripkens/connect-history-api-fallback#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Url } from 'url';

import * as core from "express-serve-static-core";

export = historyApiFallback;

declare function historyApiFallback(options?: historyApiFallback.Options): core.RequestHandler;

declare namespace historyApiFallback {
    interface Options {
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
