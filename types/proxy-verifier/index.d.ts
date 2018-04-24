// Type definitions for proxy-verifier 0.4
// Project: https://github.com/chill117/proxy-verifier#readme
// Definitions by: BehindTheMath <https://github.com/BehindTheMath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CoreOptions as RequestOptions } from "request";

declare class ProxyVerifier {
    static testAll(proxy: ProxyVerifier.Proxy, options: RequestOptions, cb: (error: any, result: ProxyVerifier.AllResults) => void): void;
    static testAll(proxy: ProxyVerifier.Proxy, cb: (error: any, result: ProxyVerifier.AllResults) => void): void;

    static testProtocol(proxy: ProxyVerifier.Proxy, options: RequestOptions, cb: (error: any, result: ProxyVerifier.Result) => void): void;
    static testProtocol(proxy: ProxyVerifier.Proxy, cb: (error: any, result: ProxyVerifier.Result) => void): void;

    static testProtocols(proxy: ProxyVerifier.Proxy, options: RequestOptions, cb: (error: any, result: ProxyVerifier.ProtocolResult) => void): void;
    static testProtocols(proxy: ProxyVerifier.Proxy, cb: (error: any, result: ProxyVerifier.ProtocolResult) => void): void;

    static testAnonymityLevel(proxy: ProxyVerifier.Proxy, options: RequestOptions, cb: (error: any, result: string) => void): void;
    static testAnonymityLevel(proxy: ProxyVerifier.Proxy, cb: (error: any, result: string) => void): void;

    static testTunnel(proxy: ProxyVerifier.Proxy, options: RequestOptions, cb: (error: any, result: ProxyVerifier.Result) => void): void;
    static testTunnel(proxy: ProxyVerifier.Proxy, cb: (error: any, result: ProxyVerifier.Result) => void): void;

    static test(proxy: ProxyVerifier.Proxy, options: ProxyVerifier.TestOptions, cb: (error: any, result: ProxyVerifier.CustomTestResult) => void): void;
    static test(proxy: ProxyVerifier.Proxy, cb: (error: any, result: ProxyVerifier.CustomTestResult) => void): void;
}

export = ProxyVerifier;

declare namespace ProxyVerifier {
    interface Proxy {
        ipAddress: string;
        port: number;
        /**
         * Proxy-Authorization header
         */
        auth?: string;
        protocol?: Protocol;
        protocols?: Protocol[];
    }

    type Protocol = "http" | "https" | "socks5" | "socks4";

    type AnonymityLevel = "transparent" | "anonymous" | "elite";

    interface AllResults {
        anonymityLevel?: AnonymityLevel;
        protocols?: ProtocolResult;
        tunnel?: Result;
    }

    type Result = WorkingResult | NotWorkingResult;

    interface WorkingResult {
        ok: true;
    }

    interface NotWorkingResult {
        ok: false;
        error: {
            message: string;
            code: string;
        };
    }

    interface ProtocolResult {
        [key: string]: Result;
    }

    interface TestOptions {
        testUrl: string;
        testFn(data: string, status: number, headers: Headers): void;
    }

    interface Headers {
        [key: string]: string;
    }

    interface CustomTestBaseResult {
        data: string;
        status: number;
        headers: Headers;
    }

    type CustomTestResult = CustomTestWorkingResult | CustomTestNotWorkingResult;

    interface CustomTestWorkingResult extends CustomTestBaseResult {
        ok: true;
    }

    interface CustomTestNotWorkingResult extends CustomTestBaseResult {
        ok: false;
        error: {
            message: string;
            code: string;
        };
    }
}
