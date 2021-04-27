// Type definitions for siege 0.2
// Project: https://github.com/kissjs/siege.js#readme
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type Stringifiable = NodeJS.Dict<string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null>;
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
    readonly times: T;
    readonly seconds: T;
}

declare class Task {
    constructor(siege: Siege);

    for(num: number): For<Task>;
    request(options: {
        path: string;
        method?: Method;
        query?: Stringifiable;
    }): void;
    concurrent(concurrent: number): Task;
    report(options: ReportOptions): void;
    readonly withCookie: Siege;
    readonly withoutCookie: Siege;
    readonly with304: Siege;
    readonly without304?: Siege;
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
    readonly withCookie: Siege;
    readonly withoutCookie: Siege;
    readonly with304: Siege;
    readonly without304?: Siege;
    concurrent(n: number): Siege;
    for(n: number): For<Siege>;
    get(url: string, query?: Stringifiable): Siege;
    post(url: string, params: Stringifiable): Siege;
    attack(): void;
}

declare function siege(options?: Options): Siege;
declare function siege(path?: string, options?: Options): Siege;

export = siege;
