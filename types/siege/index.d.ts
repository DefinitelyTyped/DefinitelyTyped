/// <reference types="node" />

type Stringifiable = NodeJS.Dict<
    string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null
>;
type Method = "GET" | "POST";

interface Options {
    serve?: string | undefined;
    host?: string | undefined;
    hostname?: string | undefined;
    rejectUnauthorized?: boolean | undefined;
    requestCert?: boolean | undefined;
    agent?: string | undefined;
    sslProtocol?: boolean | undefined;
    concurrent?: number | undefined;
    enableCookie?: boolean | undefined;
    enable304?: boolean | undefined;
    method?: Method | undefined;
}

interface ReportOptions {
    rps?: boolean | undefined;
    status?: boolean | undefined;
    timeout?: boolean | undefined;
    responseTime?: number[] | undefined;
    weight?: boolean | undefined;
    graph?: {
        dot?: string | undefined;
        line?: string | undefined;
        c2mem?: string | undefined;
    } | undefined;
    type?: "json" | "plain" | "color" | undefined;
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
        method?: Method | undefined;
        query?: Stringifiable | undefined;
    }): void;
    concurrent(concurrent: number): Task;
    report(options: ReportOptions): void;
    readonly withCookie: Siege;
    readonly withoutCookie: Siege;
    readonly with304: Siege;
    readonly without304?: Siege | undefined;
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
    readonly without304?: Siege | undefined;
    concurrent(n: number): Siege;
    for(n: number): For<Siege>;
    get(url: string, query?: Stringifiable): Siege;
    post(url: string, params: Stringifiable): Siege;
    attack(): void;
}

declare function siege(options?: Options): Siege;
declare function siege(path?: string, options?: Options): Siege;

export = siege;
