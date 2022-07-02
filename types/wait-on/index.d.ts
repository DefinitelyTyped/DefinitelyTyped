// Type definitions for wait-on 5.3
// Project: https://github.com/jeffbski/wait-on#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
//                 Andrew Leedham <https://github.com/AndrewLeedham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { SecureContextOptions } from 'tls';
export = waitOn;

declare function waitOn(options: waitOn.WaitOnOptions): Promise<void>;
declare function waitOn(options: waitOn.WaitOnOptions, cb: (err: any) => void): void;

declare namespace waitOn {
    interface WaitOnOptions extends SecureContextOptions {
        /**
         * Array of string resources to wait for. prefix determines the type of resource with the default type of file:
         */
        resources: string[];
        /**
         * Initial delay in ms.
         * @default 0
         */
        delay?: number | undefined;
        /**
         * Poll resource interval in ms,
         * @default 250ms
         */
        interval?: number | undefined;
        /**
         * Flag which outputs to stdout, remaining resources waited on and when complete or any error occurs.
         */
        log?: boolean | undefined;
        /**
         * Flag to reverse operation so checks are for resources being NOT available.
         * @default false
         */
        reverse?: boolean | undefined;
        /**
         * Timeout in ms until it aborts with error.
         * @default Infinity
         */
        timeout?: number | undefined;
        /**
         * http HEAD/GET timeout to wait for request
         * @default 0
         */
        httpTimeout?: number | undefined;
        /**
         * Tcp timeout in ms.
         * @default 300
         */
        tcpTimeout?: number | undefined;
        /**
         * Flag which outputs debug output.
         * @default false
         */
        verbose?: boolean | undefined;
        /**
         * Stabilization time in ms
         * Waits this amount of time for file sizes to stabilize or other resource availability to remain unchanged.
         * @default 750ms.
         */
        window?: number | undefined;
        /**
         * Limit of concurrent connections to a resource
         * @default Infinity
         */
        simultaneous?: number | undefined;
        /**
         * Https specific option.
         * see https://github.com/request/request#readme for specific details
         */
        auth?: WaitOnAuth | undefined;
        /**
         * Validates whether a status is valid.
         */
        validateStatus?: ValidateStatus | undefined;
        /**
         * Proxy options.
         * see https://github.com/axios/axios#config-defaults
         */
        proxy?: AxiosProxyConfig | undefined;
        strictSSL?: boolean | undefined;
        followRedirect?: boolean | undefined;
        headers?: Record<string, any> | undefined;
    }

    interface HttpSignature {
        keyId: string;
        key: string;
    }

    interface WaitOnAuth {
        username: string;
        password: string;
    }

    type ValidateStatus = (status: number) => boolean;

    interface AxiosProxyConfig {
        host: string;
        port: number;
        auth?: {
            username: string;
            password: string;
        } | undefined;
        protocol?: string | undefined;
    }
}
