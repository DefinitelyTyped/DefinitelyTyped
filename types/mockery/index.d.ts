// Type definitions for mockery 1.4.0
// Project: https://github.com/mfncooper/mockery
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface MockeryEnableArgs {
    useCleanCache?: boolean | undefined;
    warnOnReplace?: boolean | undefined;
    warnOnUnregistered?: boolean | undefined;
}

export declare function enable(args?: MockeryEnableArgs): void;
export declare function disable(): void;

export declare function registerMock(name: string, mock: any): void;
export declare function deregisterMock(name: string): void;

export declare function registerSubstitute(name: string, substitute: string): void;
export declare function deregisterSubstitute(name: string): void;

export declare function registerAllowable(name: string, unhook?: boolean): void;
export declare function deregisterAllowable(name: string): void;

export declare function registerAllowables(names: string[]): void;
export declare function deregisterAllowables(names: string[]): void;

export declare function deregisterAll(): void;
export declare function resetCache(): void;
export declare function warnOnUnregistered(value: boolean): void;
export declare function warnOnReplace(value: boolean): void;
