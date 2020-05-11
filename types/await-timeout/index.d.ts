// Type definitions for await-timeout 0.3
// Project: https://github.com/vitalets/await-timeout
// Definitions by: Sean Zhu <https://github.com/szhu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = Timeout;

declare class Timeout {
    static set(delay: number): Promise<undefined>;
    static set(delay: number, message: string): Promise<never>;

    static wrap(promise: Promise<any>, delay: number, error?: string): Promise<any>;

    set(delay: number): Promise<undefined>;
    set(delay: number, message: string): Promise<never>;
    clear(): void;
}
