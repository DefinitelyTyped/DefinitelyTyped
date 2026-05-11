export = LogStub;

declare class LogStub {
    constructor(...args: any[]);

    log(...args: any[]): void;

    silly(...args: any[]): void;
    debug(...args: any[]): void;
    verbose(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;

    assert(...args: any[]): void;
    clear(...args: any[]): void;
    count(...args: any[]): void;
    countReset(...args: any[]): void;
    dir(...args: any[]): void;
    dirxml(...args: any[]): void;
    group(...args: any[]): void;
    groupCollapsed(...args: any[]): void;
    groupEnd(...args: any[]): void;
    table(...args: any[]): void;
    time(...args: any[]): void;
    timeEnd(...args: any[]): void;
    timeLog(...args: any[]): void;

    fatal(...args: any[]): void;
    trace(...args: any[]): void;
    all(...args: any[]): void;

    critical(...args: any[]): void;

    child(
        ...args: any[]
    ): Pick<this, "debug" | "info" | "warn" | "error" | "child" | "level">;
    level(...args: any[]): number;
}
