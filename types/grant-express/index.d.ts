// Type definitions for grant-express 5.3
// Project: https://www.npmjs.org/package/grant-express
// Definitions by:  Gordon Lau <https://gitlab.com/gordon-tecky>
//                  Beeno Tung <https://github.com/beenotung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');

export = grant;

declare function grant(providers: { defaults: grant.DefaultOptions } | grant.ProvidersOptions): express.RequestHandler;
declare namespace grant {
    type Provider = string;

    type ProvidersOptions = {
        [key in Provider]?: GrantOptions;
    };

    interface DefaultOptions {
        protocol: 'http' | 'https';
        host: string;
        transport: 'querystring' | 'session';
        state: boolean;
    }
    interface GrantOptions {
        key: string;
        secret: string;
        scope: string[];
        nonce?: boolean;
        custom_params?: any;
        callback: string;
    }
}
