export = Timeout;

type toErrorArgument = string | (() => Error) | Error;

declare class Timeout {
    static set(delay: number): Promise<undefined>;
    static set(delay: number, message: toErrorArgument): Promise<never>;

    static wrap(promise: Promise<any>, delay: number, error?: string): Promise<any>;

    set(delay: number): Promise<undefined>;
    set(delay: number, message: toErrorArgument): Promise<never>;
    clear(): void;
}
