// Type definitions for Shimmer 1.x
// Project: https://github.com/othiym23/shimmer
// Definitions by: Kelvin Jin <https://github.com/kjin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare global {
    interface Function {
        __wrapped?: boolean;
    }
}

declare const shimmer: {
    (options: { logger?(msg: string): void }): void;
    wrap<T extends (...args: any[]) => any>(
        nodule: object,
        name: string,
        wrapper: (original: T) => T
    ): void;
    massWrap<T extends (...args: any[]) => any>(
        nodules: object[],
        names: string[],
        wrapper: (original: T) => T
    ): void;
    unwrap(
        nodule: object,
        name: string
    ): void;
    massUnwrap(
        nodules: object[],
        names: string[]
    ): void;
};

export = shimmer;
