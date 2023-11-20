import { CoreOptions as RequestOptions } from "request";

export function testAll(proxy: Proxy, options: RequestOptions, cb: (error: any, result: AllResults) => void): void;
export function testAll(proxy: Proxy, cb: (error: any, result: AllResults) => void): void;

export function testProtocol(proxy: Proxy, options: RequestOptions, cb: (error: any, result: Result) => void): void;
export function testProtocol(proxy: Proxy, cb: (error: any, result: Result) => void): void;

export function testProtocols(
    proxy: Proxy,
    options: RequestOptions,
    cb: (error: any, result: ProtocolResult) => void,
): void;
export function testProtocols(proxy: Proxy, cb: (error: any, result: ProtocolResult) => void): void;

export function testAnonymityLevel(
    proxy: Proxy,
    options: RequestOptions,
    cb: (error: any, result: string) => void,
): void;
export function testAnonymityLevel(proxy: Proxy, cb: (error: any, result: string) => void): void;

export function testTunnel(proxy: Proxy, options: RequestOptions, cb: (error: any, result: Result) => void): void;
export function testTunnel(proxy: Proxy, cb: (error: any, result: Result) => void): void;

export function test(proxy: Proxy, options: TestOptions, cb: (error: any, result: CustomTestResult) => void): void;
export function test(proxy: Proxy, cb: (error: any, result: CustomTestResult) => void): void;

export interface Proxy {
    ipAddress: string;
    port: number;
    /**
     * Proxy-Authorization header
     */
    auth?: string | undefined;
    protocol?: Protocol | undefined;
    protocols?: Protocol[] | undefined;
}

export type Protocol = "http" | "https" | "socks5" | "socks4";

export type AnonymityLevel = "transparent" | "anonymous" | "elite";

export interface AllResults {
    anonymityLevel?: AnonymityLevel | undefined;
    protocols?: ProtocolResult | undefined;
    tunnel?: Result | undefined;
}

export type Result = WorkingResult | NotWorkingResult;

export interface WorkingResult {
    ok: true;
}

export interface NotWorkingResult {
    ok: false;
    error: {
        message: string;
        code: string;
    };
}

export interface ProtocolResult {
    [key: string]: Result;
}

export interface TestOptions {
    testUrl: string;
    testFn(data: string, status: number, headers: Headers): void;
}

export interface Headers {
    [key: string]: string;
}

export interface CustomTestBaseResult {
    data: string;
    status: number;
    headers: Headers;
}

export type CustomTestResult = CustomTestWorkingResult | CustomTestNotWorkingResult;

export interface CustomTestWorkingResult extends CustomTestBaseResult {
    ok: true;
}

export interface CustomTestNotWorkingResult extends CustomTestBaseResult {
    ok: false;
    error: {
        message: string;
        code: string;
    };
}
