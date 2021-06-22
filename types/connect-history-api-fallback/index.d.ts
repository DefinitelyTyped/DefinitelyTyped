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
        readonly disableDotRule?: true;
        readonly htmlAcceptHeaders?: ReadonlyArray<string>;
        readonly index?: string;
        readonly logger?: typeof console.log;
        readonly rewrites?: ReadonlyArray<Rewrite>;
        readonly verbose?: boolean;
    }

    interface Context {
        readonly match: RegExpMatchArray;
        readonly parsedUrl: Url;
    }
    type RewriteTo = (context: Context) => string;

    interface Rewrite {
        readonly from: RegExp;
        readonly to: string | RegExp | RewriteTo;
    }
}
