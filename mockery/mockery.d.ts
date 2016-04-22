// Type definitions for mockery 1.4.0
// Project: https://github.com/mfncooper/mockery
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface MockeryEnableArgs {
    useCleanCache?: boolean;
    warnOnReplace?: boolean;
    warnOnUnregistered?: boolean;
}

declare export function enable(args?: MockeryEnableArgs): void;
declare export function disable(): void;

declare export function registerMock(name: string, mock: any): void;
declare export function deregisterMock(name: string): void;

declare export function registerSubstitute(name: string, substitute: string): void;
declare export function deregisterSubstitute(name: string): void;

declare export function registerAllowable(name: string, unhook?: boolean): void;
declare export function deregisterAllowable(name: string): void;

declare export function registerAllowables(names: string[]): void;
declare export function deregisterAllowables(names: string[]): void;

declare export function deregisterAll(): void;
declare export function resetCache(): void;
declare export function warnOnUnregistered(value: boolean): void;
declare export function warnOnReplace(value: boolean): void;
