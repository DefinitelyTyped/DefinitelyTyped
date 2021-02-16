// Type definitions for siege 0.2
// Project: https://github.com/kissjs/siege.js#readme
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node" />

type Method = 'GET' | 'POST';

interface Options {
    serve?: string;
    host?: string;
    hostname?: string;
    rejectUnauthorized?: boolean;
    requestCert?: boolean;
    agent?: string;
    sslProtocol?: boolean;
    concurrent?: number;
    enableCookie?: boolean;
    enable304?: boolean;
    method?: Method;
}

interface ReportOptions {
    rps?: boolean;
    status?: boolean;
    timeout?: boolean;
    responseTime?: number[];
    weight?: boolean;
    graph?: {
        dot?: string;
        line?: string;
        c2mem?: string;
    };
    type?: 'json' | 'plain' | 'color';
}

declare class For<T> {
    times: T;
    seconds: T;
}

declare class Task {
    constructor(siege: Siege);

    for(num: number): For<Task>;
    request(options: {
        path: string;
        method?: Method;
        query?: NodeJS.Dict<string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null>;
    }): void;
    concurrent(concurrent: number): Task;
    report(options: ReportOptions): void;
    withCookie: Siege;
    withoutCookie: Siege;
    with304: Siege;
    without304?: Siege;
}

declare class Siege {
    on(port: number): Siege;
    host(host: string): Siege;
    hostname(hostname: string): Siege;
    rejectUnauthorized(rejectUnauthorized: boolean): Siege;
    requestCert(requestCert: boolean): Siege;
    agent(agent: string): Siege;
    sslProtocol(sslProtocol: boolean): Siege;
    describe(description: string): Task;
    report(options: ReportOptions): Siege;
    set(name: string, value: string): Siege;
    wait(ms: number): Siege;
    withCookie: Siege;
    withoutCookie: Siege;
    with304: Siege;
    without304?: Siege;
    concurrent(n: number): Siege;
    for(n: number): For<Siege>;
    get(url: string, query?: NodeJS.Dict<string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null>): Siege;
    post(url: string, params: any): Siege;
    attack(): void;
}

declare function Siege(options?: Options): Siege;
declare function Siege(path?: string, options?: Options): Siege;

export = Siege;
