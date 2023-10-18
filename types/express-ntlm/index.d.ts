import { ConnectionOptions } from "tls";

import { Handler } from "express";

declare function expressNtlm(options?: expressNtlm.Options): Handler;

declare namespace expressNtlm {
    interface Options {
        prefix?: string | undefined;
        badrequest?: Handler | undefined;
        internalservererror?: Handler | undefined;
        forbidden?: Handler | undefined;
        unauthorized?: Handler | undefined;
        domain?: string | undefined;
        domaincontroller?: string | ReadonlyArray<string> | undefined;
        tlsOptions?: ConnectionOptions | undefined;
        debug?(prefix: string, message: string): void;
    }
    interface RequestNtlm {
        DomainName?: string | undefined;
        UserName?: string | undefined;
        Workstation?: string | undefined;
    }
}

declare global {
    namespace Express {
        interface Request {
            ntlm?: expressNtlm.RequestNtlm | undefined;
        }
    }
}

export = expressNtlm;
