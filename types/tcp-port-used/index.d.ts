// Type definitions for tcp-port-used 1.0
// Project: https://github.com/stdarg/tcp-port-used
// Definitions by: Gaute Johansen <https://github.com/gautejohan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TcpPortUsedOptions {
    port: number;
    host: string;
    status: boolean;
    retryTimeMs: number;
    timeOutMs: number;
}

export function check(port: number | TcpPortUsedOptions, host?: string): Promise<boolean>;

export function waitForStatus(port: number | TcpPortUsedOptions, host?: string, inUse?: boolean, retryTimeMs?: number, timeOutMs?: number): Promise<void>;

export function waitUntilFree(port: number | TcpPortUsedOptions, retryTimeMs?: number, timeOutMs?: number): Promise<void>;

export function waitUntilFreeOnHost(port: number | TcpPortUsedOptions, host?: string, retryTimeMs?: number, timeOutMs?: number): Promise<void>;

export function waitUntilUsed(port: number | TcpPortUsedOptions, retryTimeMs?: number, timeOutMs?: number): Promise<void>;

export function waitUntilUsedOnHost(port: number | TcpPortUsedOptions, host?: string, retryTimeMs?: number, timeOutMs?: number): Promise<void>;
