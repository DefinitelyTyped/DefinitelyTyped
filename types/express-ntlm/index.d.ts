// Type definitions for express-ntlm 2.3
// Project: https://github.com/einfallstoll/express-ntlm
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ConnectionOptions } from 'tls';

import { Handler } from 'express';

declare function expressNtlm(options?: expressNtlm.Options): Handler;

declare namespace expressNtlm {
    interface Options {
        prefix?: string;
        badrequest?: Handler;
        internalservererror?: Handler;
        forbidden?: Handler;
        unauthorized?: Handler;
        domain?: string;
        domaincontroller?: string;
        tlsOptions?: ConnectionOptions;
        debug?(prefix: string, message: string): void;
    }
    interface RequestNtlm {
        DomainName?: string;
        UserName?: string;
        Workstation?: string;
    }
}

declare global {
    namespace Express {
        interface Request {
            ntlm?: expressNtlm.RequestNtlm;
        }
    }
}

export = expressNtlm;
