// Type definitions for express-jwt
// Project: https://www.npmjs.org/package/express-jwt
// Definitions by:  Gordon Lau <https://gitlab.com/gordon-tecky>
//                  Beeno Tung <https://github.com/beenotung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

declare module 'grant-express' {
    import express from 'express';

    type Provider = string;
    function grant(providers: { defaults: DefaultOptions } | ProvidersOptions): express.RequestHandler;

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

    export = grant;
}
