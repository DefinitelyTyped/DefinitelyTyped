// Type definitions for wait-port 0.2
// Project: https://github.com/dwmkerr/wait-port
// Definitions by: Leon Si <https://github.com/leonzalion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Params {
    protocol?: 'http';
    port: number;
    host?: string;
    path?: string;
    interval?: number;
    timeout?: number;
    output?: string;
    waitForDns?: boolean;
}

declare function waitPort(params: Params): Promise<boolean>;

export = waitPort;
