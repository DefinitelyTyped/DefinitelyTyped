// Type definitions for connect-history-api-fallback 1.5
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
        readonly disableDotRule?: true | undefined;
        readonly htmlAcceptHeaders?: ReadonlyArray<string> | undefined;
        readonly index?: string | undefined;
        readonly logger?: typeof console.log | undefined;
        readonly rewrites?: ReadonlyArray<Rewrite> | undefined;
        readonly verbose?: boolean | undefined;
    }

    interface Context {
        readonly match: RegExpMatchArray;
        readonly parsedUrl: Url;
        readonly request: core.Request;
    }
    type RewriteTo = (context: Context) => string;

    interface Rewrite {
        readonly from: RegExp;
        readonly to: string | RegExp | RewriteTo;
    }
}
